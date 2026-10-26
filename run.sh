#!/usr/bin/env bash
# Faqat LOKAL sinov uchun: kodni o'zgartirib, GitHub'ga push qilishdan oldin natijani ko'rish.
# Haqiqiy sayt GitHub Pages'da ishlaydi va bu skriptga bog'liq emas:
#   https://khabibjon.uz/
# Port o'zgartirish: PORT=8080 ./run.sh
# Eslatma: admin panelda saqlangan o'zgarishlar GitHub'ga yoziladi — lokalda ko'rish uchun avval: git pull
set -euo pipefail
cd "$(dirname "$0")"
./build.sh
PORT="${PORT:-5500}"
echo ""
echo "  Lokal sinov:  http://localhost:$PORT"
echo "  Haqiqiy sayt: https://khabibjon.uz/"
echo "  To'xtatish:   Ctrl+C"
echo ""
exec python3 -m http.server "$PORT" --bind 127.0.0.1 --directory _site
