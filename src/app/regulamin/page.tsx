import { REGULATIONS } from "./data";
import { PageLayout } from "@/components/PageLayout";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import type { Inline, Block, Section, ListItem } from "./data";

export const metadata: Metadata = {
  title: "Regulamin",
  description:
    "Regulamin studia tatuażu i piercingu K2inked w Warszawie — zasady wykonywania tatuaży i przekłuć oraz polityka prywatności.",
  alternates: { canonical: "/regulamin" },
};

const renderContent = (content: Inline[]): ReactNode[] =>
  content.map((c, i) => {
    switch (c.type) {
      case "strong":
        return (
          <strong className="font-bold" key={i}>
            {c.text}
          </strong>
        );
      case "em":
        return (
          <em className="font-italic" key={i}>
            {c.text}
          </em>
        );
      case "text":
      default:
        return <span key={i}>{c.text}</span>;
    }
  });

const renderList = (items: ListItem[]): ReactNode => (
  <ul className="mb-6 list-outside list-disc pl-6">
    {items.map((item, j) => (
      <li key={j} className="mb-2">
        {renderContent(item.content)}
        {item.children && renderList(item.children)}
      </li>
    ))}
  </ul>
);

const renderBlock = (block: Block, idx: number): ReactNode => {
  switch (block.type) {
    case "p":
      return (
        <p key={idx} className="mb-6">
          {renderContent(block.content)}
        </p>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="tablet:text-xl mt-8 mb-4 text-lg font-semibold"
        >
          {block.content}
        </h3>
      );
    case "ul":
      return <div key={idx}>{renderList(block.content)}</div>;
    case "ol":
      return (
        <ol key={idx} className="mb-6 list-outside list-decimal pl-6">
          {block.content.map((item, j) => (
            <li key={j} className="mb-2">
              {renderContent(item.content)}
              {item.children && renderList(item.children)}
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
};

const Regulations = () => {
  return (
    <PageLayout
      variant="dark"
      headingName="Regulamin"
      isMainHeading
      tabDeskClassName="tablet:w-150 desktop:w-150"
    >
      <article className="text-base leading-7.5 font-light tracking-[0.12em]">
        {REGULATIONS.sections.map((section: Section, i: number) => (
          <div key={section.id ?? i} className="mb-12">
            <h2 className="tablet:text-3xl mb-6 text-2xl font-bold">
              {section.title}
            </h2>
            {section.blocks.map((block, j) => renderBlock(block, j))}
          </div>
        ))}
      </article>
    </PageLayout>
  );
};

export default Regulations;
