import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { ProseSections } from "@/components/Prose/ProseSections";
import { FaqList } from "@/components/Faq/FaqList";
import { piercingData, piercingFaq } from "./data";
import { faqPageLd, breadcrumbLd } from "@/utils/jsonLd";
import { TEAM_BY_SLUG } from "@/data/teamData";

export const metadata: Metadata = {
  title: { absolute: "Piercing Warszawa — Śródmieście | K2inked" },
  description:
    "Profesjonalny piercing w Warszawie (Śródmieście, ul. Krucza 47A). Przekłucia wykonuje certyfikowana piercerka Emi — sterylne narzędzia, bezpieczna biżuteria. Sprawdź cennik.",
  alternates: { canonical: "/piercing" },
  openGraph: { images: ["/opengraph-image"] },
};

const emiIg = `https://www.instagram.com/${
  TEAM_BY_SLUG.emi.instagramUsername ?? "k2inked"
}`;

const PiercingPage = () => (
  <PageLayout
    variant="dark"
    headingName="Piercing Warszawa"
    isMainHeading
    tabDeskClassName="tablet:w-180 desktop:w-180"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: breadcrumbLd([
          { name: "Strona główna", path: "/" },
          { name: "Piercing", path: "/piercing" },
        ]),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: faqPageLd(piercingFaq) }}
    />
    <ProseSections blocks={piercingData} />
    <div className="tablet:max-w-3xl mt-6 w-full">
      <h2 className="font-marcellus-sc tablet:text-2xl mt-10 mb-4 text-xl tracking-[0.1em]">
        Najczęstsze pytania o piercing
      </h2>
      <FaqList items={piercingFaq} />
    </div>
    <div className="mt-10 flex justify-center">
      <a
        href={emiIg}
        target="_blank"
        rel="noopener noreferrer"
        className="link-hover text-sm tracking-[0.15em] uppercase underline underline-offset-4"
      >
        Umów piercing u Emi
      </a>
    </div>
  </PageLayout>
);

export default PiercingPage;
