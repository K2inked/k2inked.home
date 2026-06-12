import { LogoK2Inked } from "@/icons/LogoK2Inked";
import { STATIC_ROUTES } from "@/routes";
import Link from "next/link";

type LogoProps = {
  className: string;
  logoClassName?: string;
};

export const Logo = ({ className, logoClassName }: LogoProps) => (
  <Link
    href={STATIC_ROUTES.HOME}
    aria-label="Przejdź do strony głównej salonu K2inked"
    className={logoClassName}
  >
    <LogoK2Inked className={className} />
  </Link>
);
