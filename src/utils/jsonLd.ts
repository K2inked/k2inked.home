// Helpery JSON-LD (schema.org) renderowane server-side jako surowy <script>.
// Studio jest opisane TattooParlor w layout.tsx (@id poniżej) — tu referujemy.
import { inlineToText, type RichText } from "./richText";

const SITE = "https://www.k2inked.pl";
const STUDIO_ID = `${SITE}/#studio`;

type PersonArgs = {
  name: string;
  slug: string;
  isPiercer: boolean;
  instagramUsername?: string;
  imgSrc: string;
};

/** Person schema dla podstrony artysty/piercerki, powiązany ze studiem (worksFor). */
export const artistPersonLd = ({
  name,
  slug,
  isPiercer,
  instagramUsername,
  imgSrc,
}: PersonArgs): string =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: isPiercer ? "Piercerka" : "Tatuażystka",
    url: `${SITE}/${slug}`,
    image: `${SITE}${imgSrc}`,
    worksFor: { "@type": "TattooParlor", "@id": STUDIO_ID, name: "K2inked" },
    ...(instagramUsername
      ? { sameAs: [`https://www.instagram.com/${instagramUsername}`] }
      : {}),
  });

type Crumb = { name: string; path: string };

/** BreadcrumbList — np. Strona główna → {Imię}. path względny ("/" lub "/klaudia"). */
export const breadcrumbLd = (crumbs: Crumb[]): string =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path === "/" ? "" : c.path}/`.replace(/\/+$/, "/"),
    })),
  });

type FaqItem = { q: string; a: RichText };

type ArticleArgs = {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
};

/** Article schema dla poradników — sygnał E-E-A-T + cytowania w AI search. */
export const articleLd = ({
  headline,
  description,
  slug,
  datePublished,
}: ArticleArgs): string =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "pl-PL",
    mainEntityOfPage: `${SITE}/poradniki/${slug}`,
    author: { "@type": "Organization", name: "K2inked", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "K2inked",
      url: SITE,
      "@id": STUDIO_ID,
    },
  });

/** FAQPage schema z listy pytań/odpowiedzi (dla /faq i mini-FAQ artystów). */
export const faqPageLd = (items: FaqItem[]): string =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      // Spłaszczone: odpowiedź może nieść linki, schema wymaga czystego tekstu.
      acceptedAnswer: { "@type": "Answer", text: inlineToText(it.a) },
    })),
  });
