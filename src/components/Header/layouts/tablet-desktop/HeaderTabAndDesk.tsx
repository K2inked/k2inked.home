import { Container } from "@/components/Container";
import { Logo } from "../../components/Logo";
import { usePathname } from "next/navigation";
import { SocialmediaTray } from "@/components/Socialmedia/SocialmediaTray";
import { Nav } from "./Nav";

type HeaderTabAndDeskProps = {
  variant?: "auto" | "default" | "hero";
};

export const HeaderTabAndDesk = ({
  variant = "auto",
}: HeaderTabAndDeskProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const effectiveVariant =
    variant === "auto" ? (isHome ? "hero" : "default") : variant;
  const isHero = effectiveVariant === "hero";

  return (
    <div
      className={[
        "text-light inset-x-0 top-0 z-50 hidden md:flex",
        isHero ? "absolute bg-transparent" : "bg-darker drop-shadow-lg/20 sticky",
      ].join(" ")}
    >
      <Container className="tablet:px-4 desktop:px-0 flex h-35 items-center justify-between">
        <Logo className="w-27.5" logoClassName="link-hover" />
        <Nav />
        <SocialmediaTray
          navclassName="hidden tablet:flex flex-row gap-7.5"
          iconclassName="text-light link-hover"
        />
      </Container>
    </div>
  );
};
