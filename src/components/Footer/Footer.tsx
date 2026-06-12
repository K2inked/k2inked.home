import { SocialmediaTray } from "../Socialmedia/SocialmediaTray";
import { Container } from "../Container";
import { FooterNav } from "./FooterNav";
import { Attribution } from "./Attribution";
import { CookieSettingsLink } from "../Consent/CookieSettingsLink";
import { K2INKED_DATA } from "@/data/k2Data";

export const Footer = () => (
  <footer className="bg-dark text-light tablet:pb-8.5 pb-17.5 tracking-[0.15em]">
    <hr className="h-0.5 w-full" />
    <Container className="tablet:mt-8.5 tablet:justify-between tablet:flex-row desktop:gap-22.5 tablet:px-8 desktop:px-0 flex flex-col items-center justify-center">
      <SocialmediaTray
        navclassName="tablet:hidden mt-13.5 mb-8.5 flex flex-row gap-7.5"
        iconclassName="text-light link-hover"
      />
      <FooterNav />
      <Attribution />
      <SocialmediaTray
        navclassName="hidden tablet:flex flex-row gap-7.5"
        iconclassName="text-light link-hover"
      />
    </Container>
    <address className="tablet:text-xs mt-10 px-4 text-center text-[3vw] leading-6 tracking-[0.12em] not-italic opacity-80">
      K2inked — studio tatuażu i piercingu · ul. {K2INKED_DATA.street},
      Śródmieście · {K2INKED_DATA.city}
      <br />
      {K2INKED_DATA.openDays}, {K2INKED_DATA.openingHours} ·{" "}
      <a href={`tel:${K2INKED_DATA.phone.replace(/\s/g, "")}`} className="link-hover">
        {K2INKED_DATA.phone}
      </a>
      <br />
      <CookieSettingsLink className="link-hover mt-1 underline underline-offset-4" />
    </address>
  </footer>
);
