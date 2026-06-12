import type { ProseBlock } from "@/components/Prose/ProseSections";

export type Guide = {
  slug: string;
  heading: string; // H1 na stronie
  metaTitle: string;
  description: string;
  excerpt: string; // skrót na liście /poradniki
  datePublished: string;
  blocks: ProseBlock[];
};

// Poradniki — treść z zaakceptowanego raportu (C2, C3). Luki bez danych klienta
// (rodzaj opatrunku, polecany krem, przeciwwskazania) sfrazowane generycznie
// z odesłaniem do instrukcji artystki / konsultacji lekarskiej.
export const guides: Guide[] = [
  {
    slug: "jak-dbac-o-tatuaz",
    heading: "Jak dbać o tatuaż — pielęgnacja krok po kroku",
    metaTitle: "Jak dbać o tatuaż — pielęgnacja krok po kroku | K2inked",
    description:
      "Jak dbać o świeży tatuaż? Pielęgnacja krok po kroku: pierwsze godziny, mycie, nawilżanie, gojenie i czego unikać — poradnik studia K2inked.",
    excerpt:
      "Pielęgnacja krok po kroku: pierwsze godziny, mycie, nawilżanie i czego unikać, by tatuaż ładnie się goił i wyglądał po latach.",
    datePublished: "2026-06-12",
    blocks: [
      {
        type: "lead",
        text: "Dobra pielęgnacja tatuażu to podstawa — od niej zależy, jak Twój tatuaż będzie wyglądał za rok i za dziesięć lat. Poniżej krok po kroku, jak dbać o świeży tatuaż w pierwszych dniach i tygodniach.",
      },
      { type: "h2", text: "Pierwsze godziny" },
      {
        type: "p",
        text: "Pierwszy opatrunek zostaw zgodnie z instrukcją, którą dostaniesz od artystki po sesji. Po jego zdjęciu delikatnie umyj tatuaż letnią wodą z mydłem o neutralnym pH i osusz czystym ręcznikiem papierowym (nie pocieraj).",
      },
      { type: "h2", text: "Pierwsze 2 tygodnie" },
      {
        type: "p",
        text: "Myj tatuaż 1–2 razy dziennie i nakładaj cienką warstwę kremu poleconego przez artystkę. Nie zdrapuj strupków i nie drap — to może uszkodzić wzór. Unikaj basenu, sauny, jeziora i długiej kąpieli przez ~2 tygodnie.",
      },
      { type: "h2", text: "Gojenie — czego się spodziewać" },
      {
        type: "p",
        text: "Wierzchnia warstwa skóry goi się zwykle 2 tygodnie, a pełne wygojenie głębszych warstw trwa do 2–3 miesięcy. Lekkie łuszczenie i swędzenie to normalny etap.",
      },
      { type: "h2", text: "Czego unikać" },
      {
        type: "p",
        text: "Unikaj słońca i solarium na świeżym tatuażu, obcisłych ubrań ocierających skórę oraz drapania. Po wygojeniu chroń tatuaż kremem z filtrem — to najlepszy sposób, by kolory i linie zostały intensywne.",
      },
      {
        type: "p",
        text: "Masz wątpliwości? Napisz do nas — chętnie podpowiemy.",
      },
    ],
  },
  {
    slug: "jak-przygotowac-sie-do-tatuazu",
    heading: "Jak przygotować się do tatuażu",
    metaTitle: "Jak przygotować się do tatuażu | K2inked Warszawa",
    description:
      "Jak przygotować się do tatuażu? Co zrobić dzień przed i w dniu wizyty, co zabrać i o czym powiedzieć artystce — poradnik studia K2inked w Warszawie.",
    excerpt:
      "Co zrobić dzień przed i w dniu wizyty, co zabrać i o czym powiedzieć artystce, by sesja była wygodna, a gojenie przebiegło lepiej.",
    datePublished: "2026-06-12",
    blocks: [
      {
        type: "lead",
        text: "Dobre przygotowanie do tatuażu sprawia, że sesja jest wygodniejsza, a gojenie przebiega lepiej. Oto, o co zadbać przed wizytą w studiu.",
      },
      { type: "h2", text: "Dzień przed" },
      {
        type: "p",
        text: "Wyśpij się, nawodnij organizm i unikaj alkoholu przez minimum 24 godziny (alkohol rozrzedza krew). Nie opalaj miejsca, które chcesz wytatuować.",
      },
      { type: "h2", text: "W dniu wizyty" },
      {
        type: "p",
        text: "Zjedz porządny posiłek przed sesją — pomaga utrzymać dobre samopoczucie. Ubierz się wygodnie, tak aby artystka miała swobodny dostęp do tatuowanego miejsca. Skórę zostaw czystą i nienatłuszczoną kremem.",
      },
      { type: "h2", text: "Co zabrać" },
      {
        type: "p",
        text: "Weź dokument potwierdzający pełnoletność, ewentualnie przekąskę i wodę na dłuższą sesję oraz referencje lub inspiracje, jeśli masz konkretny pomysł.",
      },
      { type: "h2", text: "O czym powiedzieć artystce" },
      {
        type: "p",
        text: "Powiedz o uczuleniach, przyjmowanych lekach czy problemach skórnych. Jeśli masz wątpliwości zdrowotne, skonsultuj je wcześniej z lekarzem.",
      },
      {
        type: "p",
        text: "Gotowa/y? Umów się z wybraną artystką przez Instagram — a jeśli nie wiesz, od czego zacząć, napisz do nas, pomożemy ustalić szczegóły.",
      },
    ],
  },
];

export const getGuide = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);
