export type StaticRoute = (typeof STATIC_ROUTES)[keyof typeof STATIC_ROUTES];
export type ArtistSlug = (typeof ARTIST_SLUGS)[number];
export type ArtistPath = `/${ArtistSlug}`;
export type InternalHref = StaticRoute | ArtistPath;

export const STATIC_ROUTES = {
  HOME: "/",
  GALLERY: "/galeria",
  REGULATIONS: "/regulamin",
  COOKIES_POLICY: "/polityka-cookies",
  CONTACT: "/kontakt",
} as const;

export const ARTIST_SLUGS = [
  "klaudia",
  "kari",
  "sonia",
  "ewelina",
  "mirella",
  "emi",
  "kuba",
] as const;

export const path = {
  ...STATIC_ROUTES,
  artist: (slug: ArtistSlug) => `/${slug}` as ArtistPath,
};

export const RESERVED_SLUGS = new Set(
  Object.values(STATIC_ROUTES).map((p) => p.replace(/^\//, "")),
);

export const isArtistSlug = (s: string): s is ArtistSlug =>
  (ARTIST_SLUGS as readonly string[]).includes(s);
