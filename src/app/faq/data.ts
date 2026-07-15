import type { RichText } from "@/components/Prose/ProseSections";

// `a` przyjmuje zwykły string albo tablicę kawałków z linkami wewnętrznymi
// (patrz RichText). Schema FAQPage dostaje wersję spłaszczoną — inlineToText.
export type FaqItem = { q: string; a: RichText };

// Pełne FAQ (/faq). Treść z zaakceptowanego raportu MSTUDIO.
// Luki bez danych klienta sfrazowane generycznie; pytanie o cover-up pominięte.
export const faqData: FaqItem[] = [
  {
    q: "Ile kosztuje tatuaż w K2inked?",
    a: "Ceny ustalamy indywidualnie — ostateczna kwota zależy od rozmiaru, stylu i czasu pracy. Małe dziarki fineline kosztują inaczej niż rozbudowany blackwork. Napisz do nas lub do wybranej artystki — wycena jest bezpłatna i niewiążąca.",
  },
  {
    q: "Czy tatuaż boli?",
    a: "Ból jest bardzo indywidualny — zależy od miejsca, Twojej wrażliwości i przygotowania. Większość osób opisuje to jako mrowienie albo „draśnięcie”. Pracujemy w komfortowym tempie i możesz poprosić o przerwę w każdej chwili.",
  },
  {
    q: "Jak przygotować się do sesji tatuażu?",
    a: "Zjedz porządny posiłek i nawodnij się, unikaj alkoholu min. 24 h przed, a skórę w dniu wizyty zostaw czystą i nienatłuszczoną. Ubierz się tak, by artystka miała swobodny dostęp do tatuowanego miejsca. Masz wątpliwości? Napisz — podpowiemy.",
  },
  {
    q: "Jak dbać o tatuaż po sesji?",
    a: "Świeży tatuaż myj delikatnie, nie mocz długo (zakaz basenu/sauny ~2 tyg.), nawilżaj cienko kremem poleconym przez artystkę i nie zdrapuj strupków. Dokładne instrukcje dostaniesz po sesji.",
  },
  {
    q: "Jak długo goi się tatuaż?",
    a: "Wierzchnia warstwa skóry zamyka się w ~2 tygodnie, pełne wygojenie w głębszych warstwach trwa do 2–3 miesięcy. Trzymając się instrukcji pielęgnacyjnych, tatuaż wygląda tak, jak powinien.",
  },
  {
    q: "Czy muszę mieć skończone 18 lat?",
    a: "Tak — tatuujemy i przekłuwamy wyłącznie osoby pełnoletnie (18+), nawet za zgodą rodziców tego nie robimy. To standard bezpieczeństwa.",
  },
  {
    q: "Jak działa rezerwacja i czy jest zadatek?",
    a: "Umawiasz się bezpośrednio z wybraną artystką przez jej profil na Instagramie. Szczegóły dotyczące ewentualnego zadatku i jego zasad ustalisz indywidualnie z artystką przy rezerwacji terminu.",
  },
  {
    q: "Czy robicie projekty na zamówienie (custom)?",
    a: "Tak, większość naszych tatuaży to projekty tworzone specjalnie dla Ciebie. Przyjdź z pomysłem, inspiracją albo opisem — artystka przygotuje projekt dopasowany do Ciebie i miejsca na ciele.",
  },
  {
    q: "Czy robicie piercing?",
    a: "Tak — Emi, nasza certyfikowana piercerka, wykonuje profesjonalne przekłucia (bezpieczne materiały, doradztwo w doborze biżuterii). Umów się przez jej profil na Instagramie.",
  },
  {
    q: "Gdzie się znajdujecie i jak dojechać?",
    a: "Jesteśmy w sercu Warszawy — ul. Krucza 47A, Śródmieście, kilka minut od Centrum i metra. Otwarte od poniedziałku do soboty, 11:00–17:00.",
  },
  {
    q: "Czy mogę przyjść z własnym projektem?",
    a: "Jasne — możesz przynieść gotowy wzór, szkic albo moodboard. Artystka dopasuje go do anatomii i podpowie, co sprawdzi się najlepiej.",
  },
  {
    q: "Czy to dobre miejsce na pierwszy tatuaż?",
    a: "Tak — dbamy o domową atmosferę w profesjonalnych warunkach, tłumaczymy każdy krok i odpowiadamy na pytania. Pierwszy tatuaż powinien być dobrym wspomnieniem.",
  },
];

// 6 pytań na stronę główną (najważniejsze dla decyzji). Reszta -> /faq.
export const homeFaqQuestions = [
  "Ile kosztuje tatuaż w K2inked?",
  "Czy tatuaż boli?",
  "Jak przygotować się do sesji tatuażu?",
  "Jak długo goi się tatuaż?",
  "Gdzie się znajdujecie i jak dojechać?",
  "Czy to dobre miejsce na pierwszy tatuaż?",
];

export const homeFaqData: FaqItem[] = homeFaqQuestions
  .map((q) => faqData.find((item) => item.q === q))
  .filter((item): item is FaqItem => Boolean(item));
