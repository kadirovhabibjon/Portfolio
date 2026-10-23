const LANGS = ["uz", "ru", "en"];
const emptyI18n = () => ({ uz: "", ru: "", en: "" });

// Har bir bo'lim qaysi maydonlardan iboratligi. Yangi maydon qo'shish uchun shu yerga yozing.
const SECTIONS = [
  {
    id: "profile", label: "Profil",
    fields: [
      { path: "name", label: "Ism familiya" },
      { path: "photo", label: "Rasm", type: "image" },
      { path: "title", label: "Lavozim", type: "i18n" },
      { path: "email", label: "Email" },
      { path: "phone", label: "Telefon", hint: "Masalan: +998 90 123 45 67. Bo'sh bo'lsa ko'rsatilmaydi." },
      { path: "resume", label: "Rezyume (PDF)", type: "file", accept: ".pdf" },
    ],
  },
  {
    id: "socials", label: "Ijtimoiy tarmoqlar",
    hint: "To'liq havola yozing. Bo'sh qoldirilganlari saytda ko'rinmaydi.",
    fields: [
      { path: "socials.telegram", label: "Telegram", placeholder: "https://t.me/username", hint: "@username yoki username deb yozsangiz ham bo'ladi — saqlashda to'g'ri havolaga aylanadi." },
      { path: "socials.github", label: "GitHub", placeholder: "https://github.com/username" },
      { path: "socials.linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
      { path: "socials.youtube", label: "YouTube", placeholder: "https://youtube.com/@channel" },
    ],
  },
  {
    id: "experience", label: "Tajriba", list: "experience", itemName: "Ish joyi",
    hint: "Eng yangisi birinchi turishi kerak — tartibni ↑ ↓ bilan o'zgartiring.",
    title: (i) => i.company,
    newItem: () => ({ period: emptyI18n(), company: "", logo: "", role: emptyI18n() }),
    fields: [
      { path: "company", label: "Kompaniya" },
      { path: "role", label: "Lavozim", type: "i18n" },
      { path: "period", label: "Davr", type: "i18n", hint: "Masalan: 2024 - Hozirgacha / 2024 - Настоящее время / 2024 - Present" },
      { path: "logo", label: "Logotip (ixtiyoriy)", type: "image" },
    ],
  },
  {
    id: "education", label: "Ta'lim", list: "education", itemName: "Ta'lim",
    title: (i) => i.place && i.place.uz,
    newItem: () => ({ period: "", place: emptyI18n(), degree: emptyI18n() }),
    fields: [
      { path: "place", label: "O'quv joyi", type: "i18n" },
      { path: "degree", label: "Daraja / yo'nalish", type: "i18n" },
      { path: "period", label: "Davr", placeholder: "2018 - 2022" },
    ],
  },
  {
    id: "stack", label: "Tech Stack", list: "stack", itemName: "Texnologiya",
    hint: "8 tadan ko'p bo'lsa, saytda pastdan tepaga aylanib turadi.",
    title: (i) => i.name,
    newItem: () => ({ name: "", icon: "" }),
    fields: [
      { path: "name", label: "Nomi" },
      { path: "icon", label: "Ikonka", type: "icon", hint: "devicon.dev klassi (devicon-python-plain colored), simpleicons.org slugi (si:celery yoki si:celery:#37814A), o'rnatilganlar (ic:db, ic:webhook, ic:flask, ic:rag, ic:ocr, ic:server, ic:sparkle, ic:bolt) yoki rasm yuklang. Bo'sh bo'lsa bosh harflar chiqadi." },
    ],
  },
  {
    id: "projects", label: "Loyihalar", list: "projects", itemName: "Loyiha",
    hint: "Birinchi 2 tasi bosh sahifadagi kartochkada ko'rinadi, qolganlari \"Barchasi\" tugmasi orqali ochiladi.",
    title: (i) => i.name,
    newItem: () => ({ name: "", image: "", url: "", tags: [], description: emptyI18n() }),
    fields: [
      { path: "name", label: "Nomi" },
      { path: "image", label: "Rasm", type: "image", hint: "Bo'sh bo'lsa rangli fon chiqadi." },
      { path: "url", label: "Havola (ixtiyoriy)", placeholder: "https://..." },
      { path: "tags", label: "Teglar", type: "tags", hint: "Vergul bilan ajrating: Django, PostgreSQL" },
      { path: "description", label: "Tavsif", type: "i18n-area" },
    ],
  },
  {
    id: "videos", label: "Videolar", list: "videos", itemName: "Video",
    hint: "Bo'sh bo'lsa, bosh sahifada videolar kartochkasi ko'rinmaydi. YouTube havolasi uchun rasm avtomatik olinadi.",
    title: (i) => i.title,
    newItem: () => ({ title: "", url: "", thumbnail: "" }),
    fields: [
      { path: "title", label: "Sarlavha" },
      { path: "url", label: "Havola", placeholder: "https://youtu.be/..." },
      { path: "thumbnail", label: "Muqova rasmi", type: "image" },
    ],
  },
  {
    id: "settings", label: "Sozlamalar",
    fields: [{ path: "snow", label: "Qishki qor effekti", type: "checkbox" }],
  },
];

/* ---------- Helpers ---------- */
const $ = (s) => document.querySelector(s);
const getPath = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
function setPath(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((o, k) => (o[k] = o[k] && typeof o[k] === "object" ? o[k] : {}), obj);
  target[last] = value;
}
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (k === "class") node.className = v;
    else if (v !== undefined && v !== null && v !== false) node.setAttribute(k, v === true ? "" : v);
  }
  node.append(...children.flat().filter((c) => c !== null && c !== undefined && c !== false));
  return node;
}
// Admin sahifasi /admin/ ichida, saytdagi yo'llar esa ildizga nisbatan
// Yangi yuklangan fayl saytga deploy bo'lguncha (1-2 daqiqa) brauzerdagi nusxasi ko'rsatiladi
const localPreviews = {};
const assetUrl = (u) => (!u ? u : localPreviews[u] || (/^(https?:)?\/\//.test(u) ? u : "../" + u.replace(/^\/+/, "")));

let toastTimer;
function toast(msg, isError = false) {
  const t = $("#toast");
  t.textContent = msg;
  t.className = "toast" + (isError ? " err" : "");
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), isError ? 7000 : 3000);
}

/* ---------- GitHub API ---------- */
// Admin panel serversiz ishlaydi: kontent va fayllar to'g'ridan-to'g'ri GitHub repoga commit qilinadi,
// GitHub Actions esa saytni qayta deploy qiladi.
const REPO = (() => {
  const m = location.hostname.match(/^([\w-]+)\.github\.io$/i);
  if (m) {
    const first = location.pathname.split("/").filter(Boolean)[0];
    return { owner: m[1], repo: first && first !== "admin" ? first : `${m[1]}.github.io` };
  }
  return { owner: "kadirovhabibjon", repo: "Portfolio" }; // lokal ishlaganda
})();
const BRANCH = "main";
const CONTENT_PATH = "public/content.json";
const UPLOADS_PATH = "public/uploads";
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const ALLOWED_UPLOADS = ["png", "jpg", "jpeg", "webp", "gif", "pdf"];
const AUTH_PATH = "public/admin/auth.json";
const TOKEN_KEY = "portfolio_gh_token";

// Ochilgan token brauzer yopilguncha (sessionStorage) eslab qolinadi
let token = "";
try { token = sessionStorage.getItem(TOKEN_KEY) || ""; localStorage.removeItem(TOKEN_KEY); } catch (e) {}
const saveToken = (v) => { token = v; try { v ? sessionStorage.setItem(TOKEN_KEY, v) : sessionStorage.removeItem(TOKEN_KEY); } catch (e) {} };

/* ---------- Parol bilan shifrlash ----------
   Token AES-GCM bilan shifrlanadi, kalit paroldan PBKDF2 (SHA-256, 600 000 iteratsiya) orqali olinadi.
   Repoda faqat shifrlangan token turadi; uni ochish uchun parol kerak. */
const PBKDF2_ITERATIONS = 600000;
const bytesToB64 = (bytes) => btoa(String.fromCharCode(...bytes));
const b64ToBytes = (b64) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

async function deriveKey(password, salt, iterations) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}
async function encryptToken(tok, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, PBKDF2_ITERATIONS);
  const data = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(tok)));
  return { v: 1, iterations: PBKDF2_ITERATIONS, salt: bytesToB64(salt), iv: bytesToB64(iv), data: bytesToB64(data) };
}
async function decryptToken(auth, password) {
  const key = await deriveKey(password, b64ToBytes(auth.salt), auth.iterations);
  try {
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64ToBytes(auth.iv) }, key, b64ToBytes(auth.data));
    return new TextDecoder().decode(plain);
  } catch (e) {
    throw new Error("Parol noto'g'ri");
  }
}

// auth.json ni GitHub API'dan o'qiymiz (sayt nusxasi deploy bo'lguncha eski bo'lishi mumkin); limit tugasa — saytdagi nusxa
async function loadAuth() {
  const res = await fetch(`https://api.github.com/repos/${REPO.owner}/${REPO.repo}/contents/${AUTH_PATH}?ref=${BRANCH}`, {
    cache: "no-store", headers: { Accept: "application/vnd.github+json" },
  }).catch(() => null);
  if (res && res.status === 404) return null;
  if (res && res.ok) return { ...JSON.parse(fromBase64((await res.json()).content)) };
  const site = await fetch("auth.json", { cache: "no-store" }).catch(() => null);
  if (site && site.ok) return site.json();
  if (site && site.status === 404) return null;
  throw new Error("Sozlamani yuklab bo'lmadi. Internetni tekshirib, sahifani yangilang");
}

async function gh(path, opts = {}) {
  const res = await fetch(`https://api.github.com/repos/${REPO.owner}/${REPO.repo}${path}`, {
    cache: "no-store",
    ...opts,
    headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28", ...(opts.headers || {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) {
    saveToken("");
    showLogin();
    throw new Error("GitHub token yaroqsiz yoki muddati tugagan. \"Parolni o'rnatish / tokenni yangilash\" orqali yangi token kiriting");
  }
  if (res.status === 409 || (res.status === 422 && /sha/i.test(data.message || ""))) {
    throw new Error("Ma'lumot boshqa joyda o'zgartirilgan. Sahifani yangilang (F5) va qayta tahrirlang");
  }
  if (res.status === 403 || res.status === 404) {
    throw new Error(`Tokenda ${REPO.owner}/${REPO.repo} repoga ruxsat yo'q (Contents: Read and write kerak)`);
  }
  if (!res.ok) throw new Error(data.message || `GitHub xatosi (${res.status})`);
  return data;
}

const toBase64 = (text) => {
  let bin = "";
  new TextEncoder().encode(text).forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
};
const fromBase64 = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, "")), (c) => c.charCodeAt(0)));
const fileToBase64 = (file) => new Promise((resolve, reject) => {
  const r = new FileReader();
  r.onload = () => resolve(String(r.result).split(",")[1]);
  r.onerror = () => reject(new Error("Faylni o'qib bo'lmadi"));
  r.readAsDataURL(file);
});

/* ---------- State ---------- */
let content = null;
let contentSha = "";
let dirty = false;
let current = "profile";

function markDirty() {
  dirty = true;
  $("#saveBtn").disabled = false;
  $("#status").textContent = "Saqlanmagan o'zgarishlar bor";
  $("#status").classList.add("dirty");
}
function markClean(text = "") {
  dirty = false;
  $("#saveBtn").disabled = true;
  $("#status").textContent = text;
  $("#status").classList.remove("dirty");
}
window.addEventListener("beforeunload", (e) => { if (dirty) e.preventDefault(); });

/* ---------- Field widgets ---------- */
async function uploadFile(file) {
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  if (!ALLOWED_UPLOADS.includes(ext)) throw new Error(`Ruxsat etilgan formatlar: ${ALLOWED_UPLOADS.join(", ")}`);
  if (file.size > MAX_UPLOAD_BYTES) throw new Error("Fayl 10 MB dan oshmasligi kerak");
  const name = `${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}.${ext}`;
  await gh(`/contents/${UPLOADS_PATH}/${name}`, {
    method: "PUT",
    body: JSON.stringify({ message: `Admin: ${name} yuklandi`, content: await fileToBase64(file), branch: BRANCH }),
  });
  const url = `uploads/${name}`;
  localPreviews[url] = URL.createObjectURL(file);
  return url;
}

function uploadButton(accept, onDone) {
  const input = el("input", { type: "file", accept, hidden: true, onchange: async () => {
    if (!input.files[0]) return;
    btn.disabled = true;
    btn.textContent = "Yuklanmoqda…";
    try {
      onDone(await uploadFile(input.files[0]));
      toast("Fayl yuklandi");
    } catch (err) {
      toast(err.message, true);
    } finally {
      btn.disabled = false;
      btn.textContent = "Yuklash";
      input.value = "";
    }
  } });
  const btn = el("button", { type: "button", class: "btn btn-outline btn-sm", onclick: () => input.click() }, "Yuklash");
  return [input, btn];
}

function renderField(f, obj) {
  const value = getPath(obj, f.path);
  const set = (v) => { setPath(obj, f.path, v); markDirty(); };
  const type = f.type || "text";
  let control;

  if (type === "text") {
    control = el("input", { class: "input", value: value ?? "", placeholder: f.placeholder, oninput: (e) => set(e.target.value) });
  } else if (type === "i18n" || type === "i18n-area") {
    const v = value && typeof value === "object" ? value : emptyI18n();
    if (value !== v) setPath(obj, f.path, v);
    control = el("div", { class: "i18n" }, LANGS.map((l) => {
      const input = type === "i18n"
        ? el("input", { class: "input", value: v[l] ?? "" })
        : el("textarea", { class: "textarea" });
      if (type !== "i18n") input.value = v[l] ?? "";
      input.addEventListener("input", (e) => { v[l] = e.target.value; markDirty(); });
      return el("div", { class: "i18n-row" }, el("span", {}, l.toUpperCase()), input);
    }));
  } else if (type === "image" || type === "file") {
    const isImage = type === "image";
    const preview = isImage ? el("img", { class: "preview-img", alt: "" }) : null;
    const link = isImage ? null : el("a", { class: "link", target: "_blank" }, "Ochish");
    const refresh = (v) => {
      if (preview) { preview.src = assetUrl(v) || ""; preview.hidden = !v; }
      if (link) { link.href = assetUrl(v) || "#"; link.hidden = !v; }
    };
    const input = el("input", { class: "input", value: value ?? "", placeholder: "Havola yoki fayl yuklang", oninput: (e) => { set(e.target.value); refresh(e.target.value); } });
    const accept = f.accept || "image/png,image/jpeg,image/webp,image/gif";
    const clear = el("button", { type: "button", class: "btn btn-danger btn-sm", title: "Olib tashlash", onclick: () => { input.value = ""; set(""); refresh(""); } }, "✕");
    control = el("div", { class: "inline" }, preview, input, link, uploadButton(accept, (url) => { input.value = url; set(url); refresh(url); }), clear);
    refresh(value);
  } else if (type === "tags") {
    control = el("input", { class: "input", value: (value || []).join(", "), oninput: (e) => set(e.target.value.split(",").map((s) => s.trim()).filter(Boolean)) });
  } else if (type === "icon") {
    const preview = el("span", { class: "icon-preview" });
    const refresh = (v) => (preview.innerHTML = stackIcon(v, obj.name));
    const input = el("input", { class: "input", value: value ?? "", placeholder: "devicon-python-plain colored", oninput: (e) => { set(e.target.value); refresh(e.target.value); } });
    control = el("div", { class: "inline" }, preview, input,
      uploadButton("image/png,image/jpeg,image/webp,image/gif", (url) => { input.value = url; set(url); refresh(url); }));
    refresh(value);
  } else if (type === "checkbox") {
    return el("label", { class: "checkbox" },
      el("input", { type: "checkbox", checked: !!value, onchange: (e) => set(e.target.checked) }), f.label);
  }

  return el("div", { class: "field" }, el("label", {}, f.label), control, f.hint && el("span", { class: "hint" }, f.hint));
}

/* ---------- Sections ---------- */
function renderSidebar() {
  $("#sidebar").replaceChildren(...SECTIONS.map((s) => el("button", {
    class: s.id === current ? "active" : "",
    onclick: () => { current = s.id; renderSidebar(); renderEditor(); window.scrollTo(0, 0); },
  }, s.label, s.list && el("span", { class: "count" }, String((content[s.list] || []).length)))));
}

function renderEditor() {
  const s = SECTIONS.find((x) => x.id === current);
  const nodes = [el("h2", {}, s.label), s.hint && el("p", { class: "muted section-hint" }, s.hint)];

  if (!s.list) {
    nodes.push(el("div", { class: "card fields" }, s.fields.map((f) => renderField(f, content))));
  } else {
    const items = (content[s.list] = content[s.list] || []);
    const restructure = () => { markDirty(); renderSidebar(); renderEditor(); };
    items.forEach((item, idx) => {
      const move = (d) => { [items[idx], items[idx + d]] = [items[idx + d], items[idx]]; restructure(); };
      nodes.push(el("article", { class: "card" },
        el("div", { class: "item-head" },
          el("strong", {}, `${idx + 1}. ${s.title(item) || s.itemName}`),
          el("div", { class: "item-tools" },
            el("button", { type: "button", title: "Yuqoriga", disabled: idx === 0, onclick: () => move(-1) }, "↑"),
            el("button", { type: "button", title: "Pastga", disabled: idx === items.length - 1, onclick: () => move(1) }, "↓"),
            el("button", { type: "button", title: "O'chirish", class: "btn-danger", onclick: () => {
              if (confirm(`"${s.title(item) || s.itemName}" o'chirilsinmi?`)) { items.splice(idx, 1); restructure(); }
            } }, "✕"))),
        el("div", { class: "fields" }, s.fields.map((f) => renderField(f, item)))));
    });
    nodes.push(el("button", { type: "button", class: "add-btn", onclick: () => { items.push(s.newItem()); restructure(); } }, `+ ${s.itemName} qo'shish`));
  }
  $("#editor").replaceChildren(...nodes.filter(Boolean));
}

/* ---------- Save ---------- */
function youtubeThumb(url) {
  const m = /(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/.exec(url || "");
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : "";
}

async function save() {
  if (!content.name || !content.name.trim()) {
    toast("Ism bo'sh bo'lmasligi kerak", true);
    return;
  }
  (content.videos || []).forEach((v) => { if (!v.thumbnail) v.thumbnail = youtubeThumb(v.url); });
  if (content.socials) content.socials.telegram = telegramUrl(content.socials.telegram);
  $("#saveBtn").disabled = true;
  try {
    const res = await gh(`/contents/${CONTENT_PATH}`, {
      method: "PUT",
      body: JSON.stringify({
        message: "Admin: kontent yangilandi",
        content: toBase64(JSON.stringify(content, null, 2) + "\n"),
        sha: contentSha,
        branch: BRANCH,
      }),
    });
    contentSha = res.content.sha;
    markClean("Saqlandi · " + new Date().toLocaleTimeString() + " · saytda 1–2 daqiqada ko'rinadi");
    toast("Saqlandi ✓ Saytda 1–2 daqiqada ko'rinadi");
    if (current === "videos") renderEditor();
  } catch (err) {
    $("#saveBtn").disabled = false;
    toast(err.message, true);
  }
}

$("#saveBtn").addEventListener("click", save);
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "s" && !$("#appView").hidden) {
    e.preventDefault();
    if (dirty) save();
  }
});

/* ---------- Auth ---------- */
let authConfigured = true;

function showForm(which) {
  $("#appView").hidden = true;
  $("#loginView").hidden = false;
  $("#loginForm").hidden = which !== "login";
  $("#setupForm").hidden = which !== "setup";
  $("#backToLogin").hidden = !authConfigured;
  (which === "login" ? $("#password") : $("#setupToken")).focus();
}
const showLogin = () => showForm(authConfigured ? "login" : "setup");
document.querySelectorAll("[data-show]").forEach((b) => b.addEventListener("click", () => showForm(b.dataset.show)));

function formError(id, msg) {
  const el = $(id);
  el.textContent = msg || "";
  el.hidden = !msg;
}
async function withBusy(form, fn) {
  const btn = form.querySelector("button[type=submit]");
  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Tekshirilmoqda…";
  try { await fn(); } finally { btn.disabled = false; btn.textContent = label; }
}

async function showApp() {
  const file = await gh(`/contents/${CONTENT_PATH}?ref=${BRANCH}`);
  contentSha = file.sha;
  content = JSON.parse(fromBase64(file.content));
  $("#loginView").hidden = true;
  $("#appView").hidden = false;
  markClean();
  renderSidebar();
  renderEditor();
}

$("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  formError("#loginError");
  withBusy(e.target, async () => {
    try {
      const auth = await loadAuth();
      if (!auth) { authConfigured = false; showForm("setup"); return; }
      saveToken(await decryptToken(auth, $("#password").value));
      $("#password").value = "";
      await showApp();
    } catch (ex) {
      formError("#loginError", ex.message);
    }
  });
});

$("#setupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  formError("#setupError");
  const tok = $("#setupToken").value.trim();
  const pass = $("#setupPassword").value;
  if (pass.length < 10) return formError("#setupError", "Parol kamida 10 belgidan iborat bo'lsin");
  if (pass !== $("#setupPassword2").value) return formError("#setupError", "Parollar mos kelmadi");
  withBusy(e.target, async () => {
    try {
      saveToken(tok);
      const auth = await encryptToken(tok, pass);
      // Mavjud auth.json bo'lsa uning sha'si kerak; shu so'rov token yaroqliligini ham tekshiradi
      let sha;
      try { sha = (await gh(`/contents/${AUTH_PATH}?ref=${BRANCH}`)).sha; } catch (ex) { if (!/ruxsat yo'q/.test(ex.message)) throw ex; }
      await gh(`/contents/${AUTH_PATH}`, {
        method: "PUT",
        body: JSON.stringify({ message: "Admin: parol yangilandi", content: toBase64(JSON.stringify(auth, null, 2) + "\n"), sha, branch: BRANCH }),
      });
      authConfigured = true;
      e.target.reset();
      await showApp();
      toast("Parol o'rnatildi ✓ Endi faqat parol bilan kirasiz");
    } catch (ex) {
      saveToken("");
      formError("#setupError", ex.message);
    }
  });
});

$("#logoutBtn").addEventListener("click", async () => {
  if (dirty && !confirm("Saqlanmagan o'zgarishlar yo'qoladi. Chiqasizmi?")) return;
  saveToken("");
  dirty = false;
  showLogin();
});

$("#repoName").textContent = `${REPO.owner}/${REPO.repo}`;
if (token) showApp().catch((err) => { showLogin(); toast(err.message, true); });
else loadAuth().then((auth) => { authConfigured = !!auth; showLogin(); }).catch(() => showLogin());
