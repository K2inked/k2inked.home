import type { FaqItem } from "@/app/faq/data";

// Lista FAQ jako natywny <details> akordeon — dostępna, bez JS, treść w DOM
// (widoczna dla Google i AI search). Kolory dziedziczone (border-current),
// więc działa na jasnym i ciemnym tle.
export const FaqList = ({ items }: { items: FaqItem[] }) => (
  <div className="w-full">
    {items.map((item) => (
      <details
        key={item.q}
        className="border-current/15 group border-b last:border-b-0"
      >
        <summary className="tablet:text-lg flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium tracking-[0.06em]">
          <span>{item.q}</span>
          <span
            aria-hidden="true"
            className="shrink-0 text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <p className="pr-8 pb-5 text-sm leading-7 font-light tracking-[0.04em] opacity-90">
          {item.a}
        </p>
      </details>
    ))}
  </div>
);
