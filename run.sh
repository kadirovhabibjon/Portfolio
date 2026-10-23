#!/usr/bin/env bash
# Saytni lokal ko'rish: ./run.sh  (port o'zgartirish: PORT=8080 ./run.sh)
# Eslatma: admin panelda saqlangan o'zgarishlar GitHub'ga yoziladi — lokalda ko'rish uchun avval: git pull
set -euo pipefail
cd "$(dirname "$0")"
./build.sh
PORT="${PORT:-5500}"
echo ""
echo "  Sayt:        http://localhost:$PORT"
echo "  Admin panel: http://localhost:$PORT/admin/"
echo "  To'xtatish:  Ctrl+C"
echo ""
exec python3 -m http.server "$PORT" --bind 127.0.0.1 --directory _site
