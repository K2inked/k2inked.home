import type { NextConfig } from "next";

// CSP dopuszczająca znane third-party (Vercel Analytics, LightWidget/Instagram,
// Google Maps, Formspree). 'unsafe-inline'/'unsafe-eval' wymagane przez Next +
// osadzenia; mimo to blokujemy obce skrypty, clickjacking, object/embed i
// wstrzyknięcie <base>. Strona statyczna bez user-inputu renderowanego w DOM.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://cdn.lightwidget.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://formspree.io https://cdn.lightwidget.com",
  "frame-src 'self' https://cdn.lightwidget.com https://www.google.com https://www.instagram.com",
  "form-action 'self' https://formspree.io",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "k2inked.pl" }],
        destination: "https://www.k2inked.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
