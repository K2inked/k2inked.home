"use client";

import { LogoK2Inked } from "@/icons/LogoK2Inked";
import { BackgroundImage } from "./BackgroundImage";
import { Heading } from "../Heading";
import { Button } from "../Button/Button";
import { STATIC_ROUTES } from "@/routes";

export const Hero = () => (
  <BackgroundImage
    src="/images/background.png"
    alt="Zdjęcie przedstawiające tatuaż w trakcie wykonywania"
    priority
  >
    <section className="flex min-h-[100svh] tablet:pt-40 tablet:pb-25 w-full flex-col items-center justify-center px-[10vw]">
      <LogoK2Inked className="text-light desktop:h-[600px] tablet:max-w-[500px] h-[50vh]" />
      <Heading tag="h1" variant="light">
        K2.inked
      </Heading>
      <Heading tag="h3" variant="light" className="text-center desktop:!text-4xl desktop:py-6">
        Studio w sercu Warszawy
      </Heading>
      <div className="tablet:gap-45 tablet:py-18 flex flex-row gap-[20vw] py-13.5">
        <Button
          variant="light"
          ariaLabel="Kliknij, by przejść do strony z formularzem kontaktowym"
          as="a"
          href={STATIC_ROUTES.CONTACT}
        >
          Umów się
        </Button>
        <Button
          variant="lightTrans"
          ariaLabel="Kliknij, by przejść do galerii prac"
          as="a"
          href={STATIC_ROUTES.GALLERY}
        >
          Zobacz prace
        </Button>
      </div>
    </section>
  </BackgroundImage>
);
