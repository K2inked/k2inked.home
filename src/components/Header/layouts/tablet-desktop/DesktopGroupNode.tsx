"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type {
  NavGroup,
  NavLink,
  NavNode,
} from "@/components/Header/helpers/data";
import { hasActive } from "@/components/Header/helpers";
import { IconChevron } from "@/icons/IconChevron";

type Props = {
  node: NavGroup;
  pathname: string;
  renderLink: (n: NavLink) => React.ReactNode;
};

export const DesktopGroupNode = ({ node, pathname, renderLink }: Props) => {
  const childActive = useMemo(
    () => hasActive(node, pathname),
    [node, pathname],
  );
  const [open, setOpen] = useState(false);
  const hoverTimer = useRef<number | null>(null);

  const canHover = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const clearHoverTimer = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };

  const onEnter = () => {
    if (!canHover) return;
    clearHoverTimer();
    setOpen(true);
  };

  const onLeave = () => {
    if (!canHover) return;
    clearHoverTimer();
    hoverTimer.current = window.setTimeout(() => setOpen(false), 80);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Escape") setOpen(false);
    if ((e.key === "Enter" || e.key === " ") && !open) {
      e.preventDefault();
      setOpen(true);
    }
  };

  // Grupa może zawierać podgrupy (ARTYŚCI → TATUAŻ/PIERCING) albo płaską listę
  // linków (PORADNIKI → artykuły). Bez tego drugiego przypadku dropdown byłby pusty.
  const sections = node.items.filter(
    (it): it is NavGroup => it.kind === "group",
  );
  const flatLinks = node.items.filter((it): it is NavLink => it.kind === "link");

  const renderItems = (items: readonly NavNode[]) => (
    <ul className="hover:!text-light space-y-1">
      {items.map((item, j) => {
        if (item.kind !== "link") return null;
        return (
          <li key={j}>
            <div className="hover:bg-primary tablet:py-1.5 cursor-pointer rounded-tr-md rounded-bl-md px-6 py-2 text-base tracking-[0.12em]">
              {renderLink(item)}
            </div>
          </li>
        );
      })}
    </ul>
  );

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark";
  const chevron = (
    <IconChevron
      className={`desktop:size-6 size-5 transition ${open ? "rotate-270" : "rotate-90"}`}
    />
  );

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      role="none"
    >
      {node.href ? (
        <div className="desktop:gap-3 flex items-center gap-1.5 py-2 tracking-[0.14em]">
          <Link
            href={node.href}
            className={`link-hover rounded-sm ${focusRing} ${childActive ? "font-bold" : ""}`}
          >
            {node.label}
          </Link>
          <button
            type="button"
            className={`link-hover rounded-sm ${focusRing}`}
            aria-haspopup="true"
            aria-expanded={open}
            aria-label={`${open ? "Zwiń" : "Rozwiń"} podmenu ${node.label}`}
            onClick={() => setOpen((v) => !v)}
            onKeyDown={onKeyDown}
          >
            {chevron}
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={`link-hover desktop:gap-3 flex items-center gap-1.5 rounded-sm py-2 tracking-[0.14em] ${focusRing}`}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onKeyDown}
        >
          <span className={childActive ? "font-bold" : ""}>{node.label}</span>
          {chevron}
        </button>
      )}

      {open && (
        <div
          className="bg-dark/95 tablet:-left-20 desktop:-left-25 desktop:w-70 tablet:w-60 absolute top-full z-50 mt-1 rounded-b-md p-4 shadow-lg ring-1 ring-white/10"
        >
          {sections.length > 0
            ? sections.map((section, i) => (
                <div
                  key={i}
                  className={i > 0 ? "mt-2 border-t border-white/10 pt-2" : ""}
                >
                  <div className="mb-1 text-center text-base tracking-[0.18em]">
                    {section.label}
                  </div>
                  {renderItems(section.items)}
                </div>
              ))
            : renderItems(flatLinks)}
        </div>
      )}
    </div>
  );
};
