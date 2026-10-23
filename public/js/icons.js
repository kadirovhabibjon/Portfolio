// Tech Stack ikonkalari. "icon" maydoni quyidagi ko'rinishlardan birida bo'lishi mumkin:
//   devicon-python-plain colored   — https://devicon.dev dagi klass
//   si:celery  yoki  si:celery:#37814A — https://simpleicons.org dagi slug (+ ixtiyoriy rang)
//   ic:db                          — quyidagi o'rnatilgan ikonkalardan biri
//   /uploads/logo.png yoki https://… — rasm
// Bo'sh bo'lsa, nomning bosh harflari chiqadi.

// "@user", "user", "t.me/@user", "https://t.me/@user" — hammasini https://t.me/user ga aylantiradi.
// Telegram "@" li havolani tanimaydi va telegram.org bosh sahifasiga yuboradi.
function telegramUrl(value) {
  const user = String(value || "").trim()
    .replace(/^(https?:\/\/)?(www\.)?(t\.me|telegram\.me)\//i, "")
    .replace(/^@/, "")
    .replace(/[/?#].*$/, "");
  return user ? `https://t.me/${user}` : "";
}

const SIMPLE_ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@16.30.0/icons/";

const BUILTIN_ICONS = {
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  webhook: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
  rag: '<path d="M4 4h10a2 2 0 0 1 2 2v3"/><path d="M4 4v14a2 2 0 0 0 2 2h5"/><path d="M7 9h5M7 13h3"/><circle cx="17" cy="16" r="3"/><path d="m21 20-1.8-1.8"/>',
  ocr: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
  server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
  sparkle: '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
};

function stackIcon(icon, name) {
  const e = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  icon = (icon || "").trim();

  if (icon.startsWith("si:")) {
    const [, slug, color] = icon.split(":");
    const url = SIMPLE_ICONS_CDN + encodeURIComponent(slug) + ".svg";
    const style = `--mask:url('${url}')` + (/^#[0-9a-f]{3,8}$/i.test(color || "") ? `;color:${color}` : "");
    return `<span class="si-icon" style="${e(style)}"></span>`;
  }
  if (icon.startsWith("ic:")) {
    const paths = BUILTIN_ICONS[icon.slice(3)];
    if (paths) return `<svg class="ic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }
  if (/^(https?:)?\/\//.test(icon) || icon.startsWith("/") || /\.(png|jpe?g|webp|gif|svg)$/i.test(icon)) {
    const src = /^(https?:)?\/\//.test(icon) || icon.startsWith("/") ? icon : "/" + icon;
    return `<img class="img-icon" src="${e(src)}" alt="">`;
  }
  if (icon.startsWith("devicon-")) return `<i class="${e(icon)}"></i>`;

  const words = String(name || "?").split(/[\s/&-]+/).filter(Boolean);
  const text = words.length > 1 ? words.map((w) => w[0]).join("").slice(0, 3) : String(name || "?").slice(0, 3);
  return `<span class="txt-icon">${e(text.toUpperCase())}</span>`;
}
