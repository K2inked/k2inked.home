import type { ReactNode } from "react";
import Link from "next/link";
import type { InternalHref } from "@/routes";
import type { RichText } from "@/utils/richText";

// Lekki, współdzielony renderer treści dla stron marketingowych (cennik,
// piercing, poradniki). Treść trzymana w data.ts jako bloki — UI oddzielone.
//
// Fragment tekstu może być linkiem wewnętrznym: zamiast stringa podaj tablicę
// kawałków (RichText). `href` typowany na InternalHref, więc link do
// nieistniejącej strony nie przejdzie kompilacji (linki tylko przez routes.ts).
export type { Inline, RichText } from "@/utils/richText";

export type ProseBlock =
  | { type: "lead"; text: RichText }
  | { type: "p"; text: RichText }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: RichText[] }
  | {
      type: "links";
      title?: string;
      items: { label: string; href: InternalHref }[];
    };

const linkClass = "underline underline-offset-4 link-hover";

/** Renderuje string albo tablicę kawałków (z linkami) do JSX. */
export const renderInline = (text: RichText): ReactNode => {
  if (typeof text === "string") return text;
  return text.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <Link key={i} href={part.href} className={linkClass}>
        {part.text}
      </Link>
    ),
  );
};

const renderBlock = (block: ProseBlock, i: number): ReactNode => {
  switch (block.type) {
    case "lead":
      return (
        <p
          key={i}
          className="tablet:text-lg mb-8 leading-8 font-light tracking-[0.04em]"
        >
          {renderInline(block.text)}
        </p>
      );
    case "p":
      return (
        <p key={i} className="mb-5 text-sm leading-7 font-light tracking-[0.04em]">
          {renderInline(block.text)}
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
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "links":
      return (
        <nav
          key={i}
          aria-label={block.title ?? "Powiązane strony"}
          className="border-current/15 mt-10 border-t pt-6"
        >
          {block.title && (
            <h2 className="font-marcellus-sc mb-3 text-lg tracking-[0.1em]">
              {block.title}
            </h2>
          )}
          <ul className="flex flex-col gap-2 text-sm leading-7 font-light">
            {block.items.map((item, j) => (
              <li key={j} className="tracking-[0.04em]">
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      );
    default:
      return null;
  }
};

export const ProseSections = ({ blocks }: { blocks: ProseBlock[] }) => (
  <div className="tablet:max-w-3xl w-full">{blocks.map(renderBlock)}</div>
);
