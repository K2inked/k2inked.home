export const COOKIES_CONSENT_KEY = "k2inked_cookies_accepted";
// Event emitowany przy zmianie zgody — pozwala bramkowanym komponentom
// (ConsentScripts, InstagramEmbed) zareagować bez przeładowania strony.
export const CONSENT_EVENT = "k2-consent-change";

export const hasCookiesConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIES_CONSENT_KEY) === "true";
};

export const setCookiesConsent = (): void => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIES_CONSENT_KEY, "true");
  window.dispatchEvent(new Event(CONSENT_EVENT));
};
