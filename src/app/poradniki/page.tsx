import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { guides } from "./data";
import { breadcrumbLd } from "@/utils/jsonLd";

export const metadata: Metadata = {
  title: { absolute: "Poradniki — tatuaż i pielęgnacja | K2inked" },
  description:
    "Poradniki K2inked: jak dbać o tatuaż i jak przygotować się do sesji. Praktyczne wskazówki od studia tatuażu w Warszawie.",
  alternates: { canonical: "/poradniki" },
  openGraph: { images: ["/opengraph-image"] },
};

const PoradnikiPage = () => (
  <PageLayout
    variant="dark"
    headingName="Poradniki"
    isMainHeading
    tabDeskClassName="tablet:w-180 desktop:w-180"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: breadcrumbLd([
          { name: "Strona główna", path: "/" },
          { name: "Poradniki", path: "/poradniki" },
        ]),
      }}
    />
    <ul className="tablet:max-w-3xl flex w-full flex-col gap-6">
      {guides.map((g) => (
        <li key={g.slug}>
          <Link
            href={`/poradniki/${g.slug}`}
            className="border-current/15 hover:border-current/40 group block rounded-2xl border p-6 transition-colors"
          >
            <h2 className="font-marcellus-sc tablet:text-2xl mb-3 text-xl tracking-[0.1em]">
              {g.heading}
            </h2>
            <p className="text-sm leading-7 font-light tracking-[0.04em] opacity-90">
              {g.excerpt}
            </p>
            <span className="mt-4 inline-block text-xs tracking-[0.15em] uppercase underline underline-offset-4">
              Czytaj poradnik
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </PageLayout>
);

export default PoradnikiPage;
