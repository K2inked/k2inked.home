import { InternalHref, path, type ArtistSlug, STATIC_ROUTES } from "@/routes";

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

const tattooArtists = (
  ["klaudia", "kari", "sonia", "ewelina", "mirella", "kuba", "kinia", "kamila"] as const
).map(artistLink);

const piercingArtists = (["emi"] as const).map(artistLink);

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
  { kind: "link", label: "REGULAMIN", href: STATIC_ROUTES.REGULATIONS },
  { kind: "link", label: "KONTAKT", href: STATIC_ROUTES.CONTACT },
] as const satisfies readonly NavNode[];


export const NAV_DESKTOP: readonly NavNode[] = NAV_MOBILE.slice(1);