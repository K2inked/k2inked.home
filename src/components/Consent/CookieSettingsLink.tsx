"use client";

import { useEffect, useState } from "react";
import {
  hasCookiesConsent,
  clearCookiesConsent,
  CONSENT_EVENT,
} from "@/components/CookiesBanner/cookiesConsent";

// Link w stopce do cofnięcia zgody na cookies (RODO). Widoczny tylko gdy zgoda
// została udzielona — wtedy jest co cofać.
export const CookieSettingsLink = ({
  className = "",
}: {
  className?: string;
}) => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(hasCookiesConsent());
    const onChange = () => setGranted(hasCookiesConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!granted) return null;

  return (
    <button
      type="button"
      onClick={() => clearCookiesConsent()}
      aria-label="Cofnij zgodę na pliki cookies"
      className={className}
    >
      Cofnij zgodę na cookies
    </button>
  );
};
