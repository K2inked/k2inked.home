import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/utils";
import { ConsentScripts } from "@/components/Consent/ConsentScripts";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookiesBanner } from "@/components/CookiesBanner/CookiesBanner";

const inconsolata = localFont({
  src: "./Fonts/Inconsolata.woff2",
  variable: "--font-inconsolata",
  weight: "400 500 600 700",
});

const marcellusSC = localFont({
  src: "./Fonts/MarcellusSC.woff2",
  variable: "--font-marcellus-sc",
  weight: "500 700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.k2inked.pl"),
  title: {
    default: "K2inked — Studio tatuażu Warszawa",
    template: "%s | K2inked — Studio tatuażu Warszawa",
  },
  description:
    "K2inked — profesjonalne studio tatuażu w sercu Warszawy. Autorskie projekty, higiena, precyzja i indywidualne podejście. Zarezerwuj termin.",
  keywords: [
    "tatuaż Warszawa",
    "studio tatuażu Warszawa",
    "tattoo Warsaw",
    "piercing Warszawa",
    "dotwork",
    "blackwork",
    "fineline",
    "realism",
    "k2inked",
    "K2 inked",
  ],
  applicationName: "K2inked",
  authors: [{ name: "Agata Kuklińska" }],
  creator: "Agata Kuklińska",
  publisher: "K2inked",
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "K2inked — Studio tatuażu Warszawa",
    description:
      "Profesjonalne studio tatuażu w sercu Warszawy. Zobacz portfolio artystek i umów wizytę.",
    siteName: "K2inked",
    locale: "pl_PL",
    // og:image generowany dynamicznie przez src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "K2inked — Studio tatuażu Warszawa",
    description:
      "Profesjonalne studio tatuażu, higiena i precyzja. Zarezerwuj termin w K2inked.",
    // twitter:image dziedziczony z opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "beauty",
  verification: {
    google: [
      "xq3Wv62gjYFY8V6_Dvz8Wy5zGMtaLquZ8y7hm2tdsoI",
      "R2II42_bl2I1SbaOfhQx7qbPGc--e0ERRsUl6iHFU8c",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body
        className={cn(
          inconsolata.variable,
          marcellusSC.variable,
          "font-inconsolata text-dark flex min-h-screen flex-col antialiased",
        )}
      >
        <a
          href="#main"
          className="bg-dark text-light focus:ring-light/60 sr-only z-[100] rounded-md px-4 py-2 text-sm tracking-[0.06em] focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:ring-2 focus:outline-none"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <CookiesBanner />
        <Footer />
        <ConsentScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "@id": "https://www.k2inked.pl/#studio",
              name: "K2inked",
              url: "https://www.k2inked.pl",
              image: "https://www.k2inked.pl/opengraph-image",
              logo: "https://www.k2inked.pl/icon-192.png",
              areaServed: { "@type": "City", name: "Warszawa" },
              telephone: "+48 883 308 451",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Krucza 47A",
                addressLocality: "Warszawa",
                addressRegion: "mazowieckie",
                postalCode: "00-509",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.2302385893085,
                longitude: 21.016352031548752,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "11:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/k2inked",
                "https://www.facebook.com/k2.inked",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
