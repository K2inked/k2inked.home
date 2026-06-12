import type { ReactNode } from "react";

// Lekki, współdzielony renderer treści dla stron marketingowych (cennik,
// piercing, poradniki). Treść trzymana w data.ts jako bloki — UI oddzielone.
export type ProseBlock =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

const renderBlock = (block: ProseBlock, i: number): ReactNode => {
  switch (block.type) {
    case "lead":
      return (
        <p
          key={i}
          className="tablet:text-lg mb-8 leading-8 font-light tracking-[0.04em]"
        >
          {block.text}
        </p>
      );
    case "p":
      return (
        <p key={i} className="mb-5 text-sm leading-7 font-light tracking-[0.04em]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          className="font-marcellus-sc tablet:text-2xl mt-10 mb-4 text-xl tracking-[0.1em]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="tablet:text-lg mt-6 mb-3 text-base font-semibold">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mb-5 list-outside list-disc pl-6 text-sm leading-7 font-light">
          {block.items.map((item, j) => (
            <li key={j} className="mb-2 tracking-[0.04em]">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export const ProseSections = ({ blocks }: { blocks: ProseBlock[] }) => (
  <div className="tablet:max-w-3xl w-full">{blocks.map(renderBlock)}</div>
);
