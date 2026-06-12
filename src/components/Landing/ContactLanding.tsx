"use client";
import { LogoK2Inked } from "@/icons/LogoK2Inked";
import { Button } from "../Button/Button";
import { Container } from "../Container";
import { Heading } from "../Heading";
import { Map } from "../Map";
import { K2INKED_DATA } from "@/data/k2Data";
import { path } from "@/routes";

export const ContactLanding = () => {
  return (
    <section className="bg-dark text-light tablet:h-200 relative flex h-fit flex-col">
      <Map variant="hero" />
      <Container className="tablet:flex-row mt-16 mb-25 flex h-fit flex-col px-6 leading-9 font-light tracking-[0.12em] not-italic">
        <LogoK2Inked className="tablet:w-44 tablet:mr-20 desktop:mr-38 tablet:block hidden" />
        <div className="flex flex-1 flex-col gap-7.5 mb-15 tablet:mb-0">
          <Heading variant="light" tag="h3">
            Odwiedź nas
          </Heading>
          <address className="not-italic">
            {K2INKED_DATA.street} <br />
            {K2INKED_DATA.city}
          </address>
          <p>
            {K2INKED_DATA.openDays} <br />
            {K2INKED_DATA.openingHours}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Heading variant="light" tag="h3" className="pb-4">
            Skontaktuj się z nami{" "}
          </Heading>
          <a className="link-hover" href={`mailto:${K2INKED_DATA.email}`}>
            {K2INKED_DATA.email}
          </a>
          <a className="link-hover" href={`tel:${K2INKED_DATA.phone}`}>
            {K2INKED_DATA.phone}
          </a>
          <Button
            href={path.CONTACT}
            ariaLabel="Napisz do nas — formularz kontaktowy"
            variant="lightTrans"
            as="a"
            className="mt-11 text-base tablet:text-lg tablet:self-start self-center mb-11 tablet:mb-0"
          >
            NAPISZ DO NAS
          </Button>
          <LogoK2Inked className="tablet:hidden w-25 self-center" />
        </div>
      </Container>
    </section>
  );
};
