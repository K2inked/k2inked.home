// Audyt treści na WYRENDEROWANYM HTML (to, co widzi Google), nie na źródle.
// Wymaga wcześniejszego `npm run build`.
// Użycie: node scripts/content-audit.mjs
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const APP = ".next/server/app";

const CELE = {
  "poradniki/jak-dbac-o-tatuaz": [900, 1200],
  "poradniki/jak-przygotowac-sie-do-tatuazu": [800, 1000],
  "poradniki/ile-kosztuje-tatuaz-warszawa": [1000, 1200],
  "poradniki/czy-tatuaz-boli": [800, 1000],
  cennik: [null, null],
  piercing: [null, null],
  faq: [null, null],
};

// Menu i stopka są na każdej stronie — liczone do słów zawyżałyby wynik.
const bezChrome = (html) =>
  html
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ");

const tekstZHtml = (html) =>
  bezChrome(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const licz = (t) => t.split(" ").filter((w) => /[\p{L}\d]/u.test(w)).length;

// Linki wewnętrzne wychodzące z danej strony (bez nawigacji i stopki —
// te są na każdej stronie, więc nie świadczą o linkowaniu kontekstowym).
const linkiWTresci = (html) => {
  const bezNav = html
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<nav aria-label="Nawigacja[\s\S]*?<\/nav>/gi, " ");
  return [...bezNav.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]);
};

if (!existsSync(APP)) {
  console.error("Brak buildu — odpal najpierw `npm run build`.");
  process.exit(1);
}

const znajdzHtml = (route) => {
  const p = join(APP, `${route}.html`);
  return existsSync(p) ? p : null;
};

console.log("\n=== LICZBA SŁÓW ===");
const przychodzace = new Map();
const strony = [];

for (const [route, [min, max]] of Object.entries(CELE)) {
  const p = znajdzHtml(route);
  if (!p) {
    console.log(`❌ ${route.padEnd(42)} BRAK HTML`);
    continue;
  }
  const html = readFileSync(p, "utf8");
  const n = licz(tekstZHtml(html));
  const cel = min ? `cel ${min}-${max}` : "—";
  const ok = !min || (n >= min && n <= max);
  console.log(`${ok ? "✅" : "⚠️ "} ${route.padEnd(42)} ${String(n).padStart(5)} słów   ${cel}`);
  strony.push(route);
  for (const href of linkiWTresci(html)) {
    if (!przychodzace.has(href)) przychodzace.set(href, new Set());
    przychodzace.get(href).add(`/${route}`);
  }
}

console.log("\n=== LINKI PRZYCHODZĄCE (z treści, bez menu/stopki) ===");
const artykuly = readdirSync(join(APP, "poradniki"))
  .filter((f) => f.endsWith(".html"))
  .map((f) => `/poradniki/${f.replace(/\.html$/, "")}`);

for (const art of artykuly) {
  const zrodla = [...(przychodzace.get(art) ?? [])];
  const ok = zrodla.length >= 2;
  console.log(`${ok ? "✅" : "⚠️ "} ${art.padEnd(42)} ${zrodla.length} źródeł  ${zrodla.join(", ") || "—"}`);
}

console.log("\n=== SANITY ===");
for (const route of strony) {
  const html = readFileSync(znajdzHtml(route), "utf8");
  const t = tekstZHtml(html);
  const komentarze = t.includes("TODO MSTUDIO") || t.includes("<!--");
  const zlote = /\b\d+\s*(zł|PLN|złotych)/i.exec(t);
  if (komentarze) console.log(`⚠️  ${route}: widoczny komentarz TODO w treści!`);
  if (zlote) console.log(`⚠️  ${route}: znaleziono kwotę „${zlote[0]}" — sprawdź czy to nie zmyślona cena!`);
}
console.log("Sanity OK jeśli powyżej pusto.\n");
