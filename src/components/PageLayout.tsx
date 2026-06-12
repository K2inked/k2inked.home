import { ReactNode } from "react";
import { cn } from "@/utils";
import { Heading } from "./Heading";
import { Container } from "./Container";
import { Divider } from "@/icons/Divider";

type PageProps = {
  variant: "light" | "dark";
  headingName: string;
  tabDeskClassName: string;
  children: ReactNode;
  // true = nagłówek strony (renderowany jako <h1> dla SEO/a11y, rozmiar bez
  // zmian). Domyślnie h2 — bo PageLayout używają też sekcje strony głównej,
  // gdzie h1 należy do Hero.
  isMainHeading?: boolean;
};

export const PageLayout = ({
  variant,
  headingName,
  tabDeskClassName,
  children,
  isMainHeading = false,
}: PageProps) => {
  const pageVariants = {
    light: "text-dark bg-light",
    dark: "text-light bg-dark",
  };

  return (
    <section className={cn(pageVariants[variant], "h-fit desktop:pb-40 pb-25")}>
      <Container className="flex flex-col items-center px-6.5 pt-34">
        <Heading
          tag="h2"
          as={isMainHeading ? "h1" : "h2"}
          variant={variant === "light" ? "dark" : "light"}
          className="text-center"
        >
          {headingName}
        </Heading>
        <Divider className="tablet:hidden mb-14" capWidth={70} />
        <div className={tabDeskClassName}>
          <Divider className="tablet:flex mb-20 hidden" />
        </div>
        {children}
      </Container>
    </section>
  );
};
