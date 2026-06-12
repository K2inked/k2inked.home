import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { ProseSections } from "@/components/Prose/ProseSections";
import { cennikData } from "./data";
import { breadcrumbLd } from "@/utils/jsonLd";
import { STATIC_ROUTES } from "@/routes";

export const metadata: Metadata = {
  title: { absolute: "Cennik tatuażu i piercingu | K2inked Warszawa" },
  description:
    "Ile kosztuje tatuaż w Warszawie? W K2inked wycena jest indywidualna i bezpłatna — sprawdź, od czego zależy cena tatuażu i jak umówić wycenę.",
  alternates: { canonical: "/cennik" },
  openGraph: { images: ["/opengraph-image"] },
};

const CennikPage = () => (
  <PageLayout
    variant="dark"
    headingName="Cennik tatuażu"
    isMainHeading
    tabDeskClassName="tablet:w-180 desktop:w-180"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: breadcrumbLd([
          { name: "Strona główna", path: "/" },
          { name: "Cennik", path: "/cennik" },
        ]),
      }}
    />
    <ProseSections blocks={cennikData} />
    <div className="mt-10 flex justify-center">
      <Link
        href={STATIC_ROUTES.CONTACT}
        className="link-hover text-sm tracking-[0.15em] uppercase underline underline-offset-4"
      >
        Umów bezpłatną wycenę
      </Link>
    </div>
  </PageLayout>
);

export default CennikPage;
