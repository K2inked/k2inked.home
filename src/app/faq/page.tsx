import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { FaqList } from "@/components/Faq/FaqList";
import { faqData } from "./data";
import { faqPageLd, breadcrumbLd } from "@/utils/jsonLd";

export const metadata: Metadata = {
  title: "Najczęstsze pytania (FAQ)",
  description:
    "Odpowiedzi na najczęstsze pytania o tatuaż i piercing w K2inked w Warszawie — cena, ból, przygotowanie, pielęgnacja, gojenie i rezerwacja.",
  alternates: { canonical: "/faq" },
};

const FaqPage = () => (
  <PageLayout
    variant="dark"
    headingName="Najczęstsze pytania"
    isMainHeading
    tabDeskClassName="tablet:w-180 desktop:w-180"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: faqPageLd(faqData.map((f) => ({ q: f.q, a: f.a }))),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: breadcrumbLd([
          { name: "Strona główna", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      }}
    />
    <div className="tablet:max-w-3xl w-full">
      <FaqList items={faqData} />
    </div>
  </PageLayout>
);

export default FaqPage;
