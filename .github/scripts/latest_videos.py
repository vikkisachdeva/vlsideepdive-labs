"""Writes latest-videos.json with the 3 newest long-form uploads of the vlsideepdive channel.

Source 1: the channel's public RSS feed (no API key). Shorts are skipped.
Source 2 (if the feed fails): yt-dlp on the channel's Videos tab.
If both fail, the existing file is kept unchanged.
"""
import json, subprocess, sys, urllib.request, xml.etree.ElementTree as ET
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
    print("No source worked; keeping the current file.")
    sys.exit(0)

try:
    old = json.load(open(OUT)).get("videos")
except Exception:
    old = None
if old == videos:
    print("No change.")
    sys.exit(0)
json.dump({"updated": datetime.now(timezone.utc).isoformat(timespec="seconds"), "videos": videos}, open(OUT, "w"), indent=1, ensure_ascii=False)
print("Updated", OUT)
