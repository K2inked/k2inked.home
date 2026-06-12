"use client";

import { LogoK2Inked } from "@/icons/LogoK2Inked";
import { BackgroundImage } from "./BackgroundImage";
import { Heading } from "../Heading";
import { Button } from "../Button/Button";
import { STATIC_ROUTES } from "@/routes";
import { K2INKED_DATA } from "@/data/k2Data";

export const Hero = () => (
  <BackgroundImage
    src="/images/background.png"
    alt="Zdjęcie przedstawiające tatuaż w trakcie wykonywania"
    priority
  >
    <section className="flex min-h-[100svh] tablet:pt-40 tablet:pb-25 w-full flex-col items-center justify-center px-[10vw]">
      <LogoK2Inked className="text-light desktop:h-[600px] tablet:max-w-[500px] h-[50vh]" />
      <Heading tag="h1" variant="light">
        K2inked
      </Heading>
      <Heading tag="h3" as="h2" variant="light" className="text-center desktop:!text-4xl desktop:pt-6">
        Studio tatuażu Warszawa
      </Heading>
      <p className="text-light font-marcellus-sc text-[3.5vw] tablet:text-base desktop:text-lg mt-2 tracking-[0.2em] opacity-80">
        Śródmieście · Krucza 47A
      </p>
      <div className="tablet:gap-45 tablet:py-18 flex flex-row gap-[20vw] py-13.5">
        <Button
          variant="light"
          ariaLabel="Umów wizytę przez Instagram K2inked"
          as="a"
          href={K2INKED_DATA.socialMedia.instagram}
        >
          Umów wizytę
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
