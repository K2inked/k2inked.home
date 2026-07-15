export type StaticRoute = (typeof STATIC_ROUTES)[keyof typeof STATIC_ROUTES];
export type ArtistSlug = (typeof ARTIST_SLUGS)[number];
export type ArtistPath = `/${ArtistSlug}`;
export type GuideSlug = (typeof GUIDE_SLUGS)[number];
export type GuidePath = `${typeof STATIC_ROUTES.GUIDES}/${GuideSlug}`;
export type InternalHref = StaticRoute | ArtistPath | GuidePath;

export const STATIC_ROUTES = {
  HOME: "/",
  GALLERY: "/galeria",
  FAQ: "/faq",
  PRICING: "/cennik",
  PIERCING: "/piercing",
  GUIDES: "/poradniki",
  REGULATIONS: "/regulamin",
  COOKIES_POLICY: "/polityka-cookies",
  CONTACT: "/kontakt",
} as const;

// Slugi poradników — jak ARTIST_SLUGS: dodanie artykułu zaczyna się TUTAJ,
// dzięki czemu link do nieistniejącego poradnika wywala build, a nie produkcję.
export const GUIDE_SLUGS = [
  "jak-dbac-o-tatuaz",
  "jak-przygotowac-sie-do-tatuazu",
  "ile-kosztuje-tatuaz-warszawa",
  "czy-tatuaz-boli",
] as const;

export const ARTIST_SLUGS = [
  "klaudia",
  "kari",
  "sonia",
  "ewelina",
  "mirella",
  "emi",
  "kuba",
  "kinia",
  "kamila",
] as const;

export const path = {
  ...STATIC_ROUTES,
  artist: (slug: ArtistSlug) => `/${slug}` as ArtistPath,
  guide: (slug: GuideSlug) => `${STATIC_ROUTES.GUIDES}/${slug}` as GuidePath,
};

export const RESERVED_SLUGS = new Set(
  Object.values(STATIC_ROUTES).map((p) => p.replace(/^\//, "")),
);

export const isArtistSlug = (s: string): s is ArtistSlug =>
  (ARTIST_SLUGS as readonly string[]).includes(s);
