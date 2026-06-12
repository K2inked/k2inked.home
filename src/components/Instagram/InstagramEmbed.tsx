"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/Button/Button";
import {
  hasCookiesConsent,
  setCookiesConsent,
  CONSENT_EVENT,
} from "@/components/CookiesBanner/cookiesConsent";

type InstagramEmbedProps = {
  src: string;
  className?: string;
  title?: string;
  theme?: "light" | "dark";
};

// Osadzenie Instagrama (LightWidget) ustawia cookies Meta — ładowane DOPIERO
// po zgodzie na cookies (RODO). Bez zgody pokazuje placeholder z przyciskiem.
export const InstagramEmbed = ({
  src,
  className,
  title = "Galeria Instagram K2inked",
  theme = "light",
}: InstagramEmbedProps) => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(hasCookiesConsent());
    const onChange = () => setGranted(hasCookiesConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!granted) {
    return (
      <div
        className={`flex w-full flex-col items-center gap-5 rounded-2xl border ${
          theme === "dark" ? "border-light/15" : "border-dark/15"
        } px-6 py-12 text-center`}
      >
        <p className="max-w-md text-sm leading-6 font-light tracking-[0.06em]">
          Galeria z Instagrama korzysta z osadzenia, które ustawia pliki cookies
          Meta. Aby ją wyświetlić, zaakceptuj pliki cookies.
        </p>
        <Button
          variant={theme === "dark" ? "light" : "primary"}
          ariaLabel="Zaakceptuj cookies i pokaż galerię z Instagrama"
          onClick={() => setCookiesConsent()}
        >
          Pokaż galerię z Instagrama
        </Button>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
      />
      <iframe
        src={src}
        title={title}
        scrolling="no"
        loading="lazy"
        className={className}
      />
    </>
  );
};
