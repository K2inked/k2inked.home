import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.k2inked.pl";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/galeria`, lastModified: new Date() },
    { url: `${base}/kontakt`, lastModified: new Date() },
    { url: `${base}/regulamin`, lastModified: new Date() },
    { url: `${base}/polityka-cookies`, lastModified: new Date() },
    { url: `${base}/klaudia`, lastModified: new Date() },
    { url: `${base}/kari`, lastModified: new Date() },
    { url: `${base}/sonia`, lastModified: new Date() },
    { url: `${base}/ewelina`, lastModified: new Date() },
    { url: `${base}/mirella`, lastModified: new Date() },
    { url: `${base}/emi`, lastModified: new Date() },
    { url: `${base}/kuba`, lastModified: new Date() },
    { url: `${base}/kinia`, lastModified: new Date() },
    { url: `${base}/kamila`, lastModified: new Date() },
  ];
}
