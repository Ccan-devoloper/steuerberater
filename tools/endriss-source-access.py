"""Probe a source-only download path; no credentials, no source text in logs."""
import hashlib
import pathlib
import urllib.request

FILE_ID = "1DdIbwtK4vfHU4w15uayCsg_VdaD7Afft"
EXPECTED = "94ae8633d4b04c3134d6e80ea4dbb2314555d83fafa21233a7c549f8a58c6f4f"
url = "https://drive.usercontent.google.com/download?id=" + FILE_ID + "&export=download&confirm=t"
try:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=90) as response:
        data = response.read(20 * 1024 * 1024)
    actual = hashlib.sha256(data).hexdigest()
    if not data.startswith(b"%PDF-") or actual != EXPECTED:
        raise ValueError("Downloaded bytes are not the verified source PDF")
    pathlib.Path("/tmp/endriss-est-source.pdf").write_bytes(data)
    print("SOURCE_ACCESS_OK", FILE_ID, len(data), actual)
except Exception as exc:
    print("SOURCE_ACCESS_UNAVAILABLE", type(exc).__name__)
