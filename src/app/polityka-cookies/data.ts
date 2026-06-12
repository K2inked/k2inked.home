export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

export type Section = {
  heading: string;
  blocks: Block[];
};

export const data: readonly Section[] = [
  {
    heading: "Czym są pliki cookies?",
    blocks: [
      {
        type: "p",
        text:
          "Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika (komputerze, tablecie, smartfonie) podczas korzystania ze strony internetowej. Cookies są powszechnie stosowane w celu zapewnienia prawidłowego działania stron internetowych, poprawy ich funkcjonalności oraz bezpieczeństwa.",
      },
    ],
  },
  {
    heading: "W jakim celu używamy plików cookies",
    blocks: [
      {
        type: "p",
        text:
          "Na stronie k2inked pliki cookies wykorzystywane są w następujących celach:",
      },
      {
        type: "ul",
        items: [
          "zapewnienia prawidłowego działania serwisu,",
          "zapamiętania decyzji użytkownika dotyczącej akceptacji plików cookies,",
          "zbierania anonimowych danych statystycznych i technicznych dotyczących wydajności strony (np. czasu ładowania, rodzaju urządzenia lub przeglądarki), w celu jej optymalizacji,",
          "wyświetlania osadzonej galerii z Instagrama (po wyrażeniu zgody).",
        ],
      },
      {
        type: "p",
        text:
          "Narzędzia analityczne oraz osadzenie Instagrama uruchamiane są wyłącznie po wyrażeniu przez Ciebie zgody. Do czasu kliknięcia „Akceptuję” strona nie ładuje tych narzędzi ani nie ustawia związanych z nimi plików cookies.",
      },
    ],
  },
  {
    heading: "Jakie rodzaje cookies stosujemy",
    blocks: [
      {
        type: "p",
        text:
          "Na stronie mogą być stosowane następujące rodzaje plików cookies:",
      },
      { type: "h3", text: "Cookies niezbędne" },
      {
        type: "p",
        text:
          "Są to cookies konieczne do prawidłowego funkcjonowania strony internetowej, w tym umożliwiające zapamiętanie ustawień użytkownika (np. informacji o zaakceptowaniu plików cookies). Bez tych plików strona nie mogłaby działać poprawnie.",
      },
      { type: "h3", text: "Cookies analityczne i techniczne" },
      {
        type: "p",
        text:
          "Strona korzysta z narzędzi analitycznych i wydajnościowych dostarczanych przez Vercel Inc. (Vercel Analytics oraz Speed Insights). Narzędzia te służą do zbierania anonimowych danych technicznych i statystycznych, takich jak liczba odwiedzin czy parametry wydajności strony. Dane te nie służą do identyfikacji użytkowników i nie są wykorzystywane w celach marketingowych. Narzędzia te uruchamiają się dopiero po wyrażeniu zgody na pliki cookies.",
      },
      { type: "h3", text: "Cookies osadzeń zewnętrznych (Instagram / Meta)" },
      {
        type: "p",
        text:
          "Na stronie galerii oraz na stronie głównej udostępniamy osadzoną galerię z profilu Instagram (za pośrednictwem usługi LightWidget). Osadzenie to może ustawiać pliki cookies firmy Meta Platforms, Inc. Z tego powodu ładujemy je wyłącznie po wyrażeniu przez Ciebie zgody — do tego czasu w miejscu galerii wyświetlamy informację z przyciskiem akceptacji.",
      },
    ],
  },
  {
    heading: "Zarządzanie plikami cookies",
    blocks: [
      {
        type: "p",
        text:
          "Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies za pomocą ustawień swojej przeglądarki internetowej. Przeglądarki umożliwiają m.in.:",
      },
      {
        type: "ul",
        items: [
          "blokowanie zapisywania plików cookies,",
          "usuwanie zapisanych plików cookies,",
          "ustawienie powiadomień o zapisywaniu cookies.",
        ],
      },
      {
        type: "p",
        text:
          "Ograniczenie lub wyłączenie obsługi plików cookies może wpłynąć na niektóre funkcjonalności strony.",
      },
    ],
  },
  {
    heading: "Zmiany polityki cookies",
    blocks: [
      {
        type: "p",
        text:
          "Polityka cookies może być okresowo aktualizowana w celu dostosowania jej do zmian w funkcjonowaniu strony lub obowiązujących przepisów prawa. Aktualna wersja dokumentu jest zawsze dostępna na stronie internetowej.",
      },
    ],
  },
  {
    heading: "Kontakt",
    blocks: [
      {
        type: "p",
        text:
          "W przypadku pytań dotyczących plików cookies lub funkcjonowania strony internetowej prosimy o kontakt za pośrednictwem danych kontaktowych podanych na stronie.",
      },
    ],
  },
] as const;
