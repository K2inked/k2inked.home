export const COOKIES_CONSENT_KEY = "k2inked_cookies_accepted";
// Event emitowany przy zmianie zgody — pozwala bramkowanym komponentom
// (ConsentScripts, InstagramEmbed) zareagować bez przeładowania strony.
export const CONSENT_EVENT = "k2-consent-change";

export const hasCookiesConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIES_CONSENT_KEY) === "true";
};

// Czy użytkownik podjął JAKĄKOLWIEK decyzję (akceptacja LUB odrzucenie).
// Baner pokazujemy tylko gdy brak decyzji.
export const hasCookieDecision = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIES_CONSENT_KEY) !== null;
};

// Odrzucenie zgody (RODO art. 7 — równie łatwe jak akceptacja). Zapisuje
// "false" — narzędzia śledzące się nie ładują, a baner nie nęka ponownie.
export const setCookiesRejected = (): void => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIES_CONSENT_KEY, "false");
  window.dispatchEvent(new Event(CONSENT_EVENT));
};

export const setCookiesConsent = (): void => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIES_CONSENT_KEY, "true");
  window.dispatchEvent(new Event(CONSENT_EVENT));
};

// Cofnięcie zgody (RODO art. 7 ust. 3 — równie łatwe jak udzielenie).
// Reload zapewnia odładowanie skryptów third-party już wstrzykniętych.
export const clearCookiesConsent = (): void => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(COOKIES_CONSENT_KEY);
  window.dispatchEvent(new Event(CONSENT_EVENT));
  window.location.reload();
};
