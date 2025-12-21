import Link from "next/link";
import { STATIC_ROUTES } from "@/routes";

export const FooterNav = () => (
  <nav className="tablet:text-xs tablet:mb-0 tablet:text-start mb-12.5 flex flex-col gap-1.5 text-center text-[3.5vw] font-bold tracking-[0.15em]">
    <Link
      href={STATIC_ROUTES.REGULATIONS}
      aria-label="Kliknij, by przejść do regulaminu salonu K2.Inked"
      className="link-hover flex flex-col"
    >
      <span>REGULAMIN</span> <span>I POLITYKA</span> <span>PRYWATNOŚCI</span>
    </Link>
  </nav>
);
