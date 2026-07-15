"use client";

import { useEffect, useMemo, useState, Fragment } from "react";
import Link from "next/link";
import type { NavGroup, NavNode } from "@/components/Header/helpers/data";
import { hasActive } from "@/components/Header/helpers";
import { IconChevron } from "@/icons/IconChevron";

type Props = {
  node: NavGroup;
  depth: number;
  pathname: string;
  renderNode: (n: NavNode, d: number) => React.ReactNode;
};

export const GroupNode = ({ node, depth, pathname, renderNode }: Props) => {
  const childActive = useMemo(() => hasActive(node, pathname), [node, pathname]);
  
  const [manualOpen, setManualOpen] = useState<boolean | null>(null);
  const open = (manualOpen ?? node.defaultOpen ?? childActive) === true;

  useEffect(() => setManualOpen(null), [pathname]);

  const toggle = () => setManualOpen((v) => (v === null ? !open : !v));
  const chevron = (
    <IconChevron
      className={`size-6 transition ${open ? "rotate-270" : "rotate-90"}`}
    />
  );

  return (
    <div>
      {node.href ? (
        <div className="text-light flex w-full items-center gap-3 py-4 text-left">
          <Link
            href={node.href}
            className={`tracking-[0.14em] ${childActive ? "font-bold" : ""}`}
          >
            {node.label}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-label={`${open ? "Zwiń" : "Rozwiń"} podmenu ${node.label}`}
            onClick={toggle}
          >
            {chevron}
          </button>
        </div>
      ) : (
        <button
          className="text-light flex w-full items-center gap-3 py-4 text-left"
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="tracking-[0.14em]">{node.label}</span>
          {chevron}
        </button>
      )}

      {open && (
        <div className="pl-4">
          {node.items.map((child, i) => (
            <Fragment key={`${depth}-${i}`}>{renderNode(child, depth + 1)}</Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
