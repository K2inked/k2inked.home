import Link from "next/link";
import { STATIC_ROUTES } from "@/routes";

export const FooterNav = () => (
  <nav className="tablet:text-xs tablet:mb-0 tablet:text-start mb-12.5 flex flex-col text-center text-[3.5vw] font-bold tracking-[0.15em] gap-5">
    <Link href={STATIC_ROUTES.GALLERY} className="link-hover">
      GALERIA
    </Link>
    <Link href={STATIC_ROUTES.PRICING} className="link-hover">
      CENNIK
    </Link>
    <Link href={STATIC_ROUTES.PIERCING} className="link-hover">
      PIERCING
    </Link>
    <Link href={STATIC_ROUTES.FAQ} className="link-hover">
      FAQ
    </Link>
    <Link href={STATIC_ROUTES.GUIDES} className="link-hover">
      PORADNIKI
    </Link>
    <Link
      href={STATIC_ROUTES.REGULATIONS}
      className="link-hover flex flex-col "
    >
      <span>REGULAMIN I POLITYKA</span> <span> PRYWATNOŚCI</span>
    </Link>
    <Link href={STATIC_ROUTES.COOKIES_POLICY} className="link-hover ">
      POLITYKA COOKIES
    </Link>
  </nav>
);
