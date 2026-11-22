"""Writes latest-videos.json with the 3 newest long-form uploads of the vlsideepdive channel,
and the channel's total number of public videos (shown on the home page).

Latest videos. Source 1: the channel's public RSS feed (no API key); Shorts are skipped.
Source 2 (if the feed fails): yt-dlp on the channel's Videos tab.
Video count: the YouTube Data API if a YT_API_KEY secret is set, otherwise yt-dlp on the
channel's uploads playlist (the same number YouTube shows as "N videos").
Anything that fails keeps its previous value.
"""
import json, os, subprocess, sys, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone

CHANNEL = "UC6WZe5aEnmKg0zTW_nL4VjQ"
OUT = "latest-videos.json"
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015", "media": "http://search.yahoo.com/mrss/"}


def from_feed():
    req = urllib.request.Request(f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL}",
                                 headers={"User-Agent": "Mozilla/5.0 (vlsideepdive latest-videos)"})
    root = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
    vids = []
    for e in root.findall("a:entry", NS):
        link = e.find("a:link", NS).get("href", "")
        if "/shorts/" in link:
            continue
        vids.append({"id": e.find("yt:videoId", NS).text, "title": e.find("a:title", NS).text, "published": e.find("a:published", NS).text})
    return vids


def from_ytdlp():
    subprocess.run([sys.executable, "-m", "pip", "install", "-q", "yt-dlp"], check=True)
    out = subprocess.run([sys.executable, "-m", "yt_dlp", "--flat-playlist", "-J", "--playlist-end", "6",
                          f"https://www.youtube.com/channel/{CHANNEL}/videos"], check=True, capture_output=True, text=True).stdout
    return [{"id": e["id"], "title": e.get("title") or ""} for e in json.loads(out).get("entries", []) if e.get("id")]


def ytdlp_ready():
    subprocess.run([sys.executable, "-m", "pip", "install", "-q", "yt-dlp"], check=True)


def count_from_api():
    key = os.environ.get("YT_API_KEY")
    if not key:
        raise RuntimeError("no YT_API_KEY")
    url = f"https://www.googleapis.com/youtube/v3/channels?part=statistics&id={CHANNEL}&key={key}"
    return int(json.loads(urllib.request.urlopen(url, timeout=30).read())["items"][0]["statistics"]["videoCount"])


def count_from_ytdlp():
    ytdlp_ready()
    out = subprocess.run([sys.executable, "-m", "yt_dlp", "--flat-playlist", "-J", "--playlist-end", "1",
                          "https://www.youtube.com/playlist?list=UU" + CHANNEL[2:]], check=True, capture_output=True, text=True).stdout
    n = json.loads(out).get("playlist_count")
    if not n:
        raise RuntimeError("no playlist_count")
    return int(n)


try:
    prev = json.load(open(OUT))
except Exception:
    prev = {}

count = prev.get("video_count")
for fn in (count_from_api, count_from_ytdlp):
    try:
        count = fn()
        print(f"{fn.__name__}: {count} videos")
        break
    except Exception as exc:
        print(f"{fn.__name__} failed: {exc}")

videos = []
for fn in (from_feed, from_ytdlp):
    try:
        videos = fn()[:3]
        if videos:
            print(f"{fn.__name__}: {[v['id'] for v in videos]}")
            break
    except Exception as exc:  # keep trying the next source
        print(f"{fn.__name__} failed: {exc}")

if not videos:
    print("No source for the latest videos worked; keeping them.")
    videos = prev.get("videos") or []

if prev.get("videos") == videos and prev.get("video_count") == count:
    print("No change.")
    sys.exit(0)
json.dump({"updated": datetime.now(timezone.utc).isoformat(timespec="seconds"), "video_count": count, "videos": videos},
          open(OUT, "w"), indent=1, ensure_ascii=False)
print("Updated", OUT)
