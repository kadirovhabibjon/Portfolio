# Portfolio

Shaxsiy portfolio sayt va uni boshqarish uchun admin panel. UZ / RU / EN tillari, dark / light rejim.
Server kerak emas — GitHub Pages'da bepul ishlaydi.

- **Sayt:** https://kadirovhabibjon.github.io/Portfolio/
- **Kontakt:** https://kadirovhabibjon.github.io/Portfolio/contact/
- **Admin panel:** https://kadirovhabibjon.github.io/Portfolio/admin/

## Qanday ishlaydi

```
public/               Sayt (HTML/CSS/JS)
public/content.json   Saytdagi barcha ma'lumot (ism, tajriba, stack, loyihalar...)
public/uploads/       Admin panel orqali yuklangan rasm va PDF'lar
public/admin/         Admin panel
build.sh              public/ → _site/ (deploy uchun yig'adi)
.github/workflows/    main'ga push bo'lganda saytni GitHub Pages'ga deploy qiladi
```

Admin panel o'zgarishlarni GitHub API orqali to'g'ridan-to'g'ri `public/content.json` ga commit qiladi.
Har commit'dan keyin GitHub Actions saytni qayta deploy qiladi — o'zgarish 1–2 daqiqada saytda ko'rinadi.
Har saqlash alohida commit, shuning uchun eski versiyalar git tarixida saqlanadi.

## Admin panelga kirish

Parol o'rniga GitHub token ishlatiladi (bir marta yaratiladi, brauzerda eslab qolinadi):

1. https://github.com/settings/personal-access-tokens/new
2. **Repository access** → *Only select repositories* → `Portfolio`
3. **Permissions** → **Contents** → *Read and write*
4. **Generate token** → admin panelga kiriting

## Birinchi marta GitHub Pages'ni yoqish

Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**

## Lokal ko'rish

```bash
./run.sh
# http://localhost:5500
```

VS Code'da: `Ctrl+Shift+B`. Admin panelda saqlangan o'zgarishlar GitHub'ga yoziladi — lokalda ko'rish uchun avval `git pull`.
