"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_DESKTOP, type NavNode, type NavLink, type NavGroup } from "../../helpers/data";
import { DesktopGroupNode } from "./DesktopGroupNode";

type LinkVariant = "top" | "menu";

export const Nav = () => {
  const pathname = usePathname();

  const renderLink = (node: NavLink, variant: LinkVariant = "top") => {
    const active = node.isActive ? node.isActive(pathname) : pathname === node.href;

    const topClasses = [
      "block py-2 tracking-[0.15em] link-hover rounded-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
      active ? "font-bold" : "",
    ].join(" ");

    const menuClasses = ["block w-full", active ? "font-bold" : ""].join(" ");

    return (
      <Link
        href={node.href}
        aria-current={active ? "page" : undefined}
        className={variant === "top" ? topClasses : menuClasses}
      >
        {node.label}
      </Link>
    );
  };

  const renderNode = (node: NavNode, depth = 0): React.ReactNode => {
    if (node.kind === "link") return renderLink(node, "top");
    if (depth === 0) {
      return (
        <DesktopGroupNode
          node={node as NavGroup}
          pathname={pathname}
          renderLink={(n) => renderLink(n, "menu")}
        />
      );
    }

    return (
      <div className="pl-2">
        {(node as NavGroup).items.map((child, i) => (
          <Fragment key={`${depth}-${i}`}>{renderNode(child, depth + 1)}</Fragment>
        ))}
      </div>
    );
  };

  return (
    <nav
      aria-label="Nawigacja desktopowa"
      className="text-light desktop:gap-12 laptop:gap-6 tablet:gap-3 flex min-h-0 items-center justify-center text-sm"
    >
      {NAV_DESKTOP.map((n, i) => (
        <Fragment key={i}>{renderNode(n)}</Fragment>
      ))}
    </nav>
  );
};
