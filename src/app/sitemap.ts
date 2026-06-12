import type { MetadataRoute } from "next";
import { ARTIST_SLUGS } from "@/routes";
import { guides } from "./poradniki/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.k2inked.pl";
  const now = new Date();

  const staticPaths = [
    "/",
    "/galeria",
    "/faq",
    "/cennik",
    "/piercing",
    "/poradniki",
    "/kontakt",
    "/regulamin",
    "/polityka-cookies",
  ];

  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: now })),
    ...guides.map((g) => ({
      url: `${base}/poradniki/${g.slug}`,
      lastModified: now,
    })),
    ...ARTIST_SLUGS.map((slug) => ({ url: `${base}/${slug}`, lastModified: now })),
  ];
}
