const I18N = {
  uz: {
    "nav.home": "Bosh sahifa", "nav.projects": "Loyihalarim", "nav.contact": "Kontakt",
    "cta.work": "Birga ishlaymiz", "cta.workQ": "Birga ishlaymizmi?",
    "btn.contact": "Bog'lanish", "btn.resume": "Rezyume", "btn.education": "Ta'lim",
    "btn.viewAll": "Barchasi", "btn.connect": "Bog'lanish", "btn.open": "Ochish",
    "sec.experience": "Tajriba", "sec.projects": "Loyihalarim", "sec.videos": "Videolar",
    "sec.contact": "Kontakt",
    "marquee": "Yangi loyihalar va takliflarga ochiqman",
    "contact.t1": "Keling, ", "contact.t2": "birga", "contact.t3": " ishlaymiz", "contact.online": "Onlayn",
    "contact.text": "Hamkorlik, takliflar, maslahat va har qanday savollar bo'yicha", "contact.strong": "Men bilan bog'laning!",
    "c.email": "Email", "c.phone": "Telefon", "c.copied": "Raqam nusxalandi",
  },
  ru: {
    "nav.home": "Главная", "nav.projects": "Мои проекты", "nav.contact": "Контакт",
    "cta.work": "Давайте работать вместе", "cta.workQ": "Давайте работать вместе?",
    "btn.contact": "Контакт", "btn.resume": "Резюме", "btn.education": "Образование",
    "btn.viewAll": "Посмотреть все", "btn.connect": "Связаться", "btn.open": "Открыть",
    "sec.experience": "Опыт", "sec.projects": "Мои проекты", "sec.videos": "Видео",
    "sec.contact": "Контакт",
    "marquee": "Открыт к новым проектам и предложениям",
    "contact.t1": "Работать ", "contact.t2": "со", "contact.t3": " мной", "contact.online": "Онлайн",
    "contact.text": "По вопросам сотрудничества, предложений, советов и любых вопросов", "contact.strong": "Свяжитесь со мной!",
    "c.email": "Email", "c.phone": "Телефон", "c.copied": "Номер скопирован",
  },
  en: {
    "nav.home": "Home", "nav.projects": "Projects", "nav.contact": "Contact",
    "cta.work": "Let's Work Together", "cta.workQ": "Let's work together?",
    "btn.contact": "Contact", "btn.resume": "Resume", "btn.education": "Education",
    "btn.viewAll": "View all", "btn.connect": "Get in touch", "btn.open": "Open",
    "sec.experience": "Experience", "sec.projects": "Projects", "sec.videos": "Videos",
    "sec.contact": "Contact",
    "marquee": "Open to new projects and opportunities",
    "contact.t1": "Let's work ", "contact.t2": "together", "contact.t3": "", "contact.online": "Online",
    "contact.text": "For collaboration, offers, advice or any other questions —", "contact.strong": "Get in touch!",
    "c.email": "Email", "c.phone": "Phone", "c.copied": "Number copied",
  },
};

const ICONS = {
  telegram: '<svg viewBox="0 0 24 24"><path d="M9.8 15.3 9.4 20c.6 0 .8-.3 1.1-.6l2.7-2.5 5.5 4c1 .6 1.7.3 2-.9l3.6-16.8c.3-1.5-.6-2.1-1.6-1.7L1.5 9.7C0 10.3 0 11.1 1.2 11.5l5.5 1.7L19.4 5.2c.6-.4 1.2-.2.7.2z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
  email: '<svg viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 8.6L2.4 6h19.2L12 12.6zM2 7.6V18h20V7.6l-10 6.9-10-6.9z"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>',
};

const SOCIAL_NAMES = { telegram: "Telegram", github: "GitHub", linkedin: "LinkedIn", youtube: "YouTube" };

const GRADIENTS = [
  "linear-gradient(135deg,#4f6ef7,#9b5cf6)",
  "linear-gradient(135deg,#f7b733,#fc4a1a)",
  "linear-gradient(135deg,#11998e,#38ef7d)",
  "linear-gradient(135deg,#ee0979,#ff6a00)",
  "linear-gradient(135deg,#2193b0,#6dd5ed)",
];

const $ = (sel) => document.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};

let lang = store.get("lang") || "en";
let PROFILE = {};
const t = (key) => I18N[lang][key] ?? key;
// Kontentdagi nisbiy yo'llar (assets/...) /contact sahifasida ham ishlashi uchun
// Yo'llar sayt ildiziga nisbatan (<base> tegi orqali); eski "/uploads/..." ko'rinishi ham ishlaydi
const assetUrl = (u) => (!u ? "" : /^([a-z]+:)?\/\//i.test(u) ? u : u.replace(/^\/+/, ""));
const tr = (v) => (v && typeof v === "object" ? v[lang] || v.en || "" : v || "");

function projectThumb(p, i) {
  const inner = p.image
    ? `<img src="${esc(assetUrl(p.image))}" alt="${esc(p.name)}" loading="lazy">`
    : `<div class="placeholder" style="background:${GRADIENTS[i % GRADIENTS.length]}">${esc(p.name)}</div>`;
  const attrs = p.url ? `href="${esc(p.url)}" target="_blank" rel="noopener"` : `href="#projects" data-open-projects`;
  return `<a class="project-thumb" ${attrs}>${inner}<span class="badge">${esc(p.name)}</span></a>`;
}

function render() {
  const P = { socials: {}, experience: [], education: [], stack: [], projects: [], videos: [], ...PROFILE };
  P.socials = { ...P.socials, telegram: telegramUrl(P.socials.telegram) };
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  $("#langLabel").textContent = lang.toUpperCase();
  document.querySelectorAll("[data-lang]").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  $("#photo").src = assetUrl(P.photo || "assets/avatar.svg");
  $("#photo").alt = P.name;
  $("#name").textContent = P.name;
  $("#title").textContent = tr(P.title);
  $("#footerName").textContent = P.name;
  $("#year").textContent = new Date().getFullYear();
  document.title = isContactPage() ? `${t("nav.contact")} — ${P.name}` : `${P.name} — ${tr(P.title)}`;

  $("#resumeBtn").href = assetUrl(P.resume);
  $("#resumeBtn").hidden = !P.resume;

  $("#socials").innerHTML = Object.entries(P.socials)
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k] || ""}</a>`)
    .join("");

  $("#experience").innerHTML = P.experience
    .map((e) => `<li>
      <span class="period">${esc(tr(e.period))}</span>
      <span class="logo-box">${e.logo ? `<img src="${esc(assetUrl(e.logo))}" alt="">` : esc((e.company || "?").charAt(0))}</span>
      <div><strong>${esc(e.company)}</strong><span class="muted">${esc(tr(e.role))}</span></div>
    </li>`).join("");

  $("#education").innerHTML = P.education
    .map((e) => `<li>
      <span class="period">${esc(e.period)}</span>
      <span class="logo-box">🎓</span>
      <div><strong>${esc(tr(e.place))}</strong><span class="muted">${esc(tr(e.degree))}</span></div>
    </li>`).join("");

  // 8 tadan ko'p bo'lsa, ro'yxat ikki nusxada chiziladi va pastdan tepaga uzluksiz aylanadi
  const stackHtml = P.stack
    .map((s) => `<div class="stack-item"><span class="ico">${stackIcon(s.icon, s.name)}</span><span>${esc(s.name)}</span></div>`)
    .join("");
  const loop = P.stack.length > 8;
  $("#stack").classList.toggle("loop", loop);
  $("#stack").innerHTML = loop
    ? `<div class="stack-track" style="--dur:${Math.ceil(P.stack.length / 4) * 1.5}s">
        <div class="stack-grid">${stackHtml}</div><div class="stack-grid" aria-hidden="true">${stackHtml}</div></div>`
    : `<div class="stack-grid">${stackHtml}</div>`;

  $("#projectsPreview").innerHTML = P.projects.slice(0, 2).map(projectThumb).join("");
  $("#allProjectsBtn").hidden = P.projects.length <= 2;
  $("#projectsGrid").innerHTML = P.projects
    .map((p, i) => `<article class="card project-card">
      ${projectThumb(p, i)}
      <h3>${esc(p.name)}</h3>
      <p class="muted">${esc(tr(p.description))}</p>
      <div class="tags">${(p.tags || []).map((x) => `<span>${esc(x)}</span>`).join("")}</div>
    </article>`).join("");

  const hasVideos = P.videos && P.videos.length > 0;
  $("#videosCard").hidden = !hasVideos;
  $("#videos").innerHTML = (P.videos || [])
    .map((v) => `<a class="video" href="${esc(v.url)}" target="_blank" rel="noopener"><img src="${esc(assetUrl(v.thumbnail))}" alt="" loading="lazy">${esc(v.title)}</a>`)
    .join("");

  const contacts = [
    ...Object.entries(P.socials)
      .filter(([, url]) => url)
      .map(([k, url]) => ({ k, label: SOCIAL_NAMES[k] || k, href: url })),
    P.email && { k: "email", label: t("c.email"), href: `mailto:${P.email}` },
    P.phone && { k: "phone", label: t("c.phone"), sub: P.phone, href: `tel:${P.phone.replace(/[^\d+]/g, "")}` },
  ].filter(Boolean);
  $("#contactTiles").innerHTML = contacts
    .map((c) => `<a class="contact-tile tile-${c.k}" href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} title="${esc(c.label)}">
      <span class="tile-icon">${ICONS[c.k] || ""}</span><span class="tile-label">${esc(c.label)}</span>${c.sub ? `<span class="tile-sub">${esc(c.sub)}</span>` : ""}</a>`)
    .join("");
}

/* ---------- Interactions ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.hidden = true), 2500);
}

// Telefon: tel: havolasi telefonda qo'ng'iroq ilovasini ochadi; kompyuterda ilova bo'lmasligi mumkin,
// shuning uchun raqam qo'shimcha ravishda nusxalanadi.
$("#contactTiles").addEventListener("click", (e) => {
  if (!e.target.closest(".tile-phone") || !PROFILE.phone) return;
  navigator.clipboard?.writeText(PROFILE.phone).then(() => toast(`${t("c.copied")}: ${PROFILE.phone}`), () => {});
});

function setLang(l) {
  lang = l;
  store.set("lang", l);
  render();
}

const langBtn = $("#langBtn");
const langMenu = $("#langMenu");
langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.hidden = !langMenu.hidden;
  langBtn.setAttribute("aria-expanded", String(!langMenu.hidden));
});
langMenu.addEventListener("click", (e) => {
  const b = e.target.closest("[data-lang]");
  if (b) setLang(b.dataset.lang);
  langMenu.hidden = true;
});
document.addEventListener("click", () => (langMenu.hidden = true));

$("#themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  store.set("theme", next);
});

const projectsDialog = $("#projectsDialog");
$("#allProjectsBtn").addEventListener("click", () => projectsDialog.showModal());
$("#projectsClose").addEventListener("click", () => projectsDialog.close());
projectsDialog.addEventListener("click", (e) => {
  if (e.target === projectsDialog) projectsDialog.close();
  if (e.target.closest("[data-open-projects]")) e.preventDefault();
});
// Havolasi yo'q loyiha kartochkasi bosilganda ham barcha loyihalar oynasi ochiladi
$("#projectsPreview").addEventListener("click", (e) => {
  if (e.target.closest("[data-open-projects]")) { e.preventDefault(); projectsDialog.showModal(); }
});

const eduDialog = $("#eduDialog");
$("#eduBtn").addEventListener("click", () => eduDialog.showModal());
$("#eduClose").addEventListener("click", () => eduDialog.close());
eduDialog.addEventListener("click", (e) => { if (e.target === eduDialog) eduDialog.close(); });

/* ---------- Routing: "/" va "/contact" bitta sahifada, qayta yuklanmasdan almashadi ---------- */
const BASE_PATH = new URL(document.baseURI).pathname;
const isContactPage = () => location.pathname.replace(/\/+$/, "") === BASE_PATH + "contact";

function applyRoute() {
  const contact = isContactPage();
  document.body.classList.toggle("page-contact", contact);
  const active = contact ? "contact" : location.hash === "#projects" ? "projects" : "home";
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === active));
  if (PROFILE.name) render();
  if (!contact && location.hash) document.querySelector(location.hash)?.scrollIntoView();
  else window.scrollTo(0, 0);
}

document.addEventListener("click", (e) => {
  const a = e.target.closest("a[data-route]");
  if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
  e.preventDefault();
  const url = new URL(a.href);
  if (url.pathname !== location.pathname || url.hash !== location.hash) history.pushState(null, "", url.pathname + url.hash);
  applyRoute();
});
window.addEventListener("popstate", applyRoute);

// Bosh sahifada "Loyihalarim" kartochkasi ekranda bo'lsa, menyuda ham belgilanadi
window.addEventListener("scroll", () => {
  if (isContactPage()) return;
  const projects = $("#projects").getBoundingClientRect();
  const current = projects.top < 160 && projects.bottom > 160 ? "projects" : "home";
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === current));
}, { passive: true });

function snow() {
  if (!PROFILE.snow || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = $("#snow");
  for (let i = 0; i < 40; i++) {
    const f = document.createElement("span");
    f.className = "flake";
    f.textContent = "❄";
    f.style.left = Math.random() * 100 + "vw";
    f.style.fontSize = 8 + Math.random() * 10 + "px";
    f.style.animationDuration = 8 + Math.random() * 12 + "s";
    f.style.animationDelay = -Math.random() * 20 + "s";
    box.appendChild(f);
  }
}

if (!I18N[lang]) lang = "en";
fetch("content.json", { cache: "no-store" })
  .then((r) => r.json())
  .then((data) => {
    PROFILE = data;
    applyRoute();
    snow();
  });
