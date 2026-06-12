import { data as COOKIES_POLICY } from "./data";
import { PageLayout } from "@/components/PageLayout";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import type { Section, Block } from "./data";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description:
    "Polityka plików cookies studia K2inked — jakich narzędzi używamy (analityka Vercel, osadzenie Instagrama) i jak zarządzać zgodą.",
  alternates: { canonical: "/polityka-cookies" },
};



const renderBlock = (block: Block, idx: number): ReactNode => {
  switch (block.type) {
    case "p":
      return (
        <p key={idx} className="mb-6">
          {block.text}
        </p>
      );

    case "h3":
      return (
        <h3
          key={idx}
          className="tablet:text-xl mt-8 mb-4 text-lg font-semibold"
        >
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul key={idx} className="mb-6 list-outside list-disc pl-6">
          {block.items.map((item, j) => (
            <li key={j} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

const CookiesPolicyPage = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="Polityka cookies"
      isMainHeading
      tabDeskClassName="tablet:w-170 desktop:w-190"
    >
      <article className="text-base leading-7.5 font-light tracking-[0.12em]">
        {COOKIES_POLICY.map((section: Section, i: number) => (
          <div key={`${section.heading}-${i}`} className="mb-12">
            <h2 className="tablet:text-3xl mb-6 text-2xl font-bold">
              {section.heading}
            </h2>

            {section.blocks.map((block, j) => renderBlock(block, j))}
          </div>
        ))}
      </article>
    </PageLayout>
  );
};

export default CookiesPolicyPage;
