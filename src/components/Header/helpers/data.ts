import {
  GUIDE_SLUGS,
  InternalHref,
  path,
  type ArtistSlug,
  type GuideSlug,
  STATIC_ROUTES,
} from "@/routes";

export type NavLink = {
  kind: "link";
  label: string;
  href: InternalHref;
  isActive?: (pathname: string) => boolean;
};

export type NavGroup = {
  kind: "group";
  label: string;
  collapsible?: boolean;
  items: readonly NavNode[];
  defaultOpen?: boolean;
  // Gdy podane — etykieta grupy jest linkiem, a chevron osobnym przyciskiem
  // (grupa prowadzi na własną stronę, np. PORADNIKI → /poradniki).
  href?: InternalHref;
};

export type NavNode = NavLink | NavGroup;

const ARTIST_LABEL: Record<ArtistSlug, string> = {
  klaudia: "KLAUDIA",
  kari: "KARI",
  sonia: "SONIA",
  ewelina: "EWELINA",
  mirella: "MIRELLA",
  emi: "EMI",
  kuba: "KUBA",
  kinia: "KINIA",
  kamila: "KAMILA",
} as const;

const artistLink = (slug: ArtistSlug): NavLink => ({
  kind: "link",
  label: ARTIST_LABEL[slug],
  href: path.artist(slug),
  isActive: (p) => p.startsWith(path.artist(slug)),
});

// Etykiety krótkie — dropdown ma 280 px szerokości, dłuższe by się zawijały.
const GUIDE_LABEL: Record<GuideSlug, string> = {
  "jak-dbac-o-tatuaz": "JAK DBAĆ O TATUAŻ",
  "jak-przygotowac-sie-do-tatuazu": "JAK SIĘ PRZYGOTOWAĆ",
} as const;

const guideLink = (slug: GuideSlug): NavLink => ({
  kind: "link",
  label: GUIDE_LABEL[slug],
  href: path.guide(slug),
  isActive: (p) => p === path.guide(slug),
});

const tattooArtists = (
  ["klaudia", "kari", "sonia", "ewelina", "mirella", "kuba", "kinia", "kamila"] as const
).map(artistLink);

const piercingArtists = (["emi"] as const).map(artistLink);

const guideLinks = GUIDE_SLUGS.map(guideLink);

// REGULAMIN i PIERCING celowo poza paskiem — zostają w stopce.
export const NAV_MOBILE = [
  { kind: "link", label: "STRONA GŁÓWNA", href: STATIC_ROUTES.HOME },
  {
    kind: "group",
    label: "ARTYŚCI",
    collapsible: true,
    items: [
      {
        kind: "group",
        label: "TATUAŻ",
        collapsible: true,
        items: tattooArtists,
      },
      {
        kind: "group",
        label: "PIERCING",
        collapsible: true,
        items: piercingArtists,
      },
    ],
  },
  { kind: "link", label: "GALERIA", href: STATIC_ROUTES.GALLERY },
  { kind: "link", label: "CENNIK", href: STATIC_ROUTES.PRICING },
  {
    kind: "group",
    label: "PORADNIKI",
    collapsible: true,
    href: STATIC_ROUTES.GUIDES,
    items: guideLinks,
  },
  { kind: "link", label: "FAQ", href: STATIC_ROUTES.FAQ },
  { kind: "link", label: "KONTAKT", href: STATIC_ROUTES.CONTACT },
] as const satisfies readonly NavNode[];


export const NAV_DESKTOP: readonly NavNode[] = NAV_MOBILE.slice(1);