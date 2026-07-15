import type { InternalHref } from "@/routes";

// Treść, w której fragment może być linkiem wewnętrznym. Zwykły string nadal
// poprawny, więc istniejąca treść działa bez migracji.
// Bez JSX celowo — korzystają z tego i komponenty (render), i jsonLd (schema).
export type Inline = string | { text: string; href: InternalHref };
export type RichText = string | Inline[];

/** Spłaszcza do czystego tekstu — JSON-LD nie może nieść markupu. */
export const inlineToText = (text: RichText): string =>
  typeof text === "string"
    ? text
    : text.map((p) => (typeof p === "string" ? p : p.text)).join("");
