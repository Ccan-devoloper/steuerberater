from PIL import Image, ImageOps, ImageDraw
from pathlib import Path

OUT = Path("qa")
OUT.mkdir(exist_ok=True)
DATES = ["2026-09-25", "2026-09-26", "2026-09-27", "2026-09-28"]

def fit(path, size=(270, 420)):
    im = Image.open(path).convert("RGB")
    return ImageOps.contain(im, size)

def sheet(paths, out, cols=4, thumb=(270, 420)):
    rows = (len(paths) + cols - 1) // cols
    canvas = Image.new("RGB", (cols * thumb[0], rows * (thumb[1] + 36)), "white")
    draw = ImageDraw.Draw(canvas)
    for i, p in enumerate(paths):
        im = fit(p, thumb)
        x = (i % cols) * thumb[0] + (thumb[0] - im.width) // 2
        y = (i // cols) * (thumb[1] + 36) + (thumb[1] - im.height) // 2
        canvas.paste(im, (x, y))
        draw.text(((i % cols) * thumb[0] + 6, (i // cols) * (thumb[1] + 36) + thumb[1] + 5), Path(p).name, fill="black")
    canvas.save(out, quality=88)

for d in DATES:
    base = Path("assets/vorproduktion") / d / "fertig"
    stills = []
    for sub in ["b1", "b2", "stories"]:
        if (base / sub).exists():
            stills += sorted((base / sub).glob("*.jpg"))
    sheet(stills, OUT / f"{d}-all.jpg")
    reel = sorted((OUT / "reel-frames").glob(f"{d}-reel-*.jpg"))
    if reel:
        sheet(reel, OUT / f"{d}-reel.jpg", cols=3, thumb=(360, 640))
