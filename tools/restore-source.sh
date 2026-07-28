#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="${1:-$ROOT_DIR/restored-project}"

mkdir -p "$TARGET_DIR/assets" "$TARGET_DIR/data"

gzip -dc "$ROOT_DIR/source/index.html.gz" > "$TARGET_DIR/index.html"
gzip -dc "$ROOT_DIR/source/assets/app.js.gz" > "$TARGET_DIR/assets/app.js"
gzip -dc "$ROOT_DIR/source/assets/styles.css.gz" > "$TARGET_DIR/assets/styles.css"
gzip -dc "$ROOT_DIR/source/data/bilanzen.js.gz" > "$TARGET_DIR/data/bilanzen.js"
cp "$ROOT_DIR/assets/favicon.svg" "$TARGET_DIR/assets/favicon.svg"
cp "$ROOT_DIR/LICENSE" "$TARGET_DIR/LICENSE"

cat > "$TARGET_DIR/README.md" <<'EOF'
# Wiederhergestelltes StB-Examenscampus-Projekt

Starten mit:

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.
EOF

printf 'Quelldateien wurden nach %s geschrieben.\n' "$TARGET_DIR"
