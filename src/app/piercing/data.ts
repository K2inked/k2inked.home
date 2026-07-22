import type { ProseBlock } from "@/components/Prose/ProseSections";
import type { FaqItem } from "@/app/faq/data";
import { PIERCING_PRICE_GROUPS } from "@/data/piercingPrices";

// Strona piercingu — wersja generyczna (klient nie podał listy przekłuć ani
// cen). Treść z zaakceptowanego raportu C1; szczegóły kierujemy do Emi.
export const piercingData: ProseBlock[] = [
  {
    type: "lead",
    text: "Szukasz profesjonalnego piercingu w Warszawie? W K2inked przekłucia wykonuje Emi — certyfikowana piercerka, która dba o bezpieczeństwo, higienę i dobór odpowiedniej biżuterii. Jesteśmy w sercu miasta, przy ul. Kruczej 47A na Śródmieściu.",
  },
  { type: "h2", text: "Cennik piercingu" },
  {
    type: "p",
    text: "Poniżej aktualny cennik przekłuć. Dobór biżuterii i szczegóły ustalisz z Emi — napisz na jej profilu na Instagramie, a doradzi najlepszą opcję pod Twoją anatomię i oczekiwania.",
  },
  { type: "prices", groups: PIERCING_PRICE_GROUPS },
  { type: "h2", text: "Bezpieczeństwo i higiena" },
  {
    type: "p",
    text: "Pracujemy wyłącznie na sterylnych, jednorazowych narzędziach, a do pierwszej biżuterii używamy bezpiecznych materiałów (m.in. tytan implantacyjny), które sprzyjają gojeniu i ograniczają ryzyko reakcji skóry. Przed zabiegiem wspólnie omawiamy miejsce i rodzaj biżuterii.",
  },
  { type: "h2", text: "Jak wygląda wizyta" },
  {
    type: "p",
    text: [
      "Najpierw rozmowa i dobór biżuterii, potem dezynfekcja, oznaczenie miejsca i samo przekłucie. Na koniec dostajesz jasne instrukcje pielęgnacyjne, dzięki którym przekłucie ładnie się goi. Emi ustali z Tobą szczegóły — a jeśli myślisz też o tatuażu, ",
      { text: "napisz do nas", href: "/kontakt" },
      ".",
    ],
  },
  {
    type: "links",
    title: "Zobacz też",
    items: [
      {
        label: "Jak dbać o tatuaż — pielęgnacja krok po kroku",
        href: "/poradniki/jak-dbac-o-tatuaz",
      },
      { label: "Cennik i model wyceny", href: "/cennik" },
      { label: "Wszystkie poradniki", href: "/poradniki" },
    ],
  },
];

export const piercingFaq: FaqItem[] = [
  {
    q: "Od jakiego wieku można wykonać piercing?",
    a: "Wyłącznie u osób pełnoletnich (18+). To standard bezpieczeństwa, którego się trzymamy.",
  },
  {
    q: "Czy piercing boli?",
    a: "To krótkie ukłucie; odczucia zależą od miejsca przekłucia. Emi pracuje szybko i spokojnie, dbając o Twój komfort.",
  },
  {
    q: "Jak długo goi się piercing?",
    a: "Zależnie od miejsca — od kilku tygodni do kilku miesięcy. Dokładny czas gojenia i zasady pielęgnacji Emi omówi z Tobą po zabiegu.",
  },
  {
    q: "Jak umówić się na piercing?",
    a: "Napisz do Emi przez jej profil na Instagramie — ustali z Tobą termin, rodzaj przekłucia i dobór biżuterii.",
  },
];
