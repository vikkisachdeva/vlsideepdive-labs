"""Writes all-videos.json: every public long-form video on the vlsideepdive channel
(id, title, published date), for the site search. Shorts are left out.

Source 1: yt-dlp on the channel's Videos tab (long-form only, no API key).
Source 2: the YouTube Data API (YT_API_KEY) on the uploads playlist, with Shorts removed
by checking youtube.com/shorts/<id> (a Short answers 200, a normal video redirects).
If both fail, the previous file is kept.
"""
import json, os, subprocess, sys, urllib.request, urllib.error
from datetime import datetime, timezone

CHANNEL = "UC6WZe5aEnmKg0zTW_nL4VjQ"
OUT = "all-videos.json"


def from_ytdlp():
    subprocess.run([sys.executable, "-m", "pip", "install", "-q", "yt-dlp"], check=True)
    out = subprocess.run([sys.executable, "-m", "yt_dlp", "--flat-playlist", "-J",
                          f"https://www.youtube.com/channel/{CHANNEL}/videos"], check=True, capture_output=True, text=True).stdout
    vids = [{"id": e["id"], "title": e.get("title") or ""} for e in json.loads(out).get("entries", []) if e.get("id")]
    if len(vids) < 50:
        raise RuntimeError(f"only {len(vids)} videos")
    return vids


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


def is_short(vid):
    opener = urllib.request.build_opener(NoRedirect)
    try:
        r = opener.open(urllib.request.Request(f"https://www.youtube.com/shorts/{vid}", method="HEAD",
                                               headers={"User-Agent": "Mozilla/5.0"}), timeout=15)
        return r.status == 200
    except urllib.error.HTTPError:
        return False
    except Exception:
        return False


def from_api():
    key = os.environ.get("YT_API_KEY")
    if not key:
        raise RuntimeError("no YT_API_KEY")
    vids, token = [], ""
    while True:
        url = ("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&maxResults=50"
               f"&playlistId=UU{CHANNEL[2:]}&key={key}" + (f"&pageToken={token}" if token else ""))
        d = json.loads(urllib.request.urlopen(url, timeout=30).read())
        for it in d.get("items", []):
            if it.get("status", {}).get("privacyStatus") != "public":
                continue
            s = it["snippet"]
            vids.append({"id": s["resourceId"]["videoId"], "title": s["title"], "published": s.get("publishedAt", "")})
        token = d.get("nextPageToken")
        if not token:
            break
    return [v for v in vids if not is_short(v["id"])]


try:
    prev = json.load(open(OUT))
except Exception:
    prev = {}

videos = None
for fn in (from_ytdlp, from_api):
    try:
        videos = fn()
        print(f"{fn.__name__}: {len(videos)} videos")
        break
    except Exception as exc:
        print(f"{fn.__name__} failed: {exc}")

if not videos:
    print("No source worked; keeping the previous list.")
    sys.exit(0)
if prev.get("videos") == videos:
    print("No change.")
    sys.exit(0)
json.dump({"updated": datetime.now(timezone.utc).isoformat(timespec="seconds"), "videos": videos},
          open(OUT, "w"), indent=0, ensure_ascii=False)
print("Updated", OUT)
