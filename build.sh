#!/usr/bin/env bash
# public/ dan tayyor saytni _site/ ga yig'adi (GitHub Pages va lokal ko'rish uchun).
set -euo pipefail
cd "$(dirname "$0")"
rm -rf _site
cp -r public _site
# /contact/ manzili ham ochilishi uchun — sahifaning o'zi bir xil, bo'limni JS URL bo'yicha tanlaydi
mkdir -p _site/contact
# Statik <base> — brauzer CSS/JS'ni sahifa skripti ishlashidan oldin ham to'g'ri manzildan yuklaydi
sed 's|<meta charset="utf-8">|<meta charset="utf-8">\n  <base href="../">|' _site/index.html > _site/contact/index.html
touch _site/.nojekyll
# Kesh: har deploy'da CSS/JS manzillariga versiya qo'shiladi, brauzer eski faylni ishlatib qolmasin
VERSION="$(git rev-parse --short HEAD 2>/dev/null || date +%s)"
find _site -name '*.html' -exec perl -pi -e \
  's#((?:src|href)="(?:\.\./)?(?:js/|css/)?[\w.-]+\.(?:js|css))"#$1?v='"$VERSION"'"#g' {} +
echo "Tayyor: _site/"
