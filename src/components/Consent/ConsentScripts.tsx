"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  hasCookiesConsent,
  CONSENT_EVENT,
} from "@/components/CookiesBanner/cookiesConsent";

// Ładuje Vercel Analytics + Speed Insights DOPIERO po zgodzie na cookies (RODO).
// Reaguje na event zgody (mount bez przeładowania strony).
export const ConsentScripts = () => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(hasCookiesConsent());
    const onChange = () => setGranted(hasCookiesConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!granted) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
};
