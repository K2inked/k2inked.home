import type { ProseBlock } from "@/components/Prose/ProseSections";

// Cennik bez konkretnych kwot (klient ich nie podał) — strona odpowiada na
// „ile kosztuje tatuaż” modelem wyceny i CTA. Kwoty dodamy, gdy klient poda.
export const cennikData: ProseBlock[] = [
  {
    type: "lead",
    text: "Ile kosztuje tatuaż w Warszawie? W K2inked każdą wycenę robimy indywidualnie i bezpłatnie — ostateczna kwota zależy od rozmiaru projektu, stylu i czasu pracy artystki. Małe, delikatne wzory fineline wyceniamy inaczej niż rozbudowane kompozycje blackwork czy projekty wielosesyjne.",
  },
  {
    type: "p",
    text: [
      "Chcesz wiedzieć więcej? W osobnym poradniku rozkładamy wycenę na czynniki pierwsze: ",
      {
        text: "ile kosztuje tatuaż w Warszawie",
        href: "/poradniki/ile-kosztuje-tatuaz-warszawa",
      },
      " — z osobnymi sekcjami o małych wzorach i o tatuażach na ręce.",
    ],
  },
  { type: "h2", text: "Od czego zależy cena tatuażu" },
  {
    type: "ul",
    items: [
      "rozmiar i umiejscowienie tatuażu,",
      "styl i poziom szczegółowości (delikatny fineline kontra rozbudowany blackwork),",
      "czas pracy i liczba potrzebnych sesji,",
      "stopień autorskości projektu (gotowy wzór czy projekt tworzony od zera).",
    ],
  },
  { type: "h2", text: "Rodzaje projektów" },
  {
    type: "ul",
    items: [
      "Mały tatuaż (do ~5 cm, fineline / single needle),",
      "Średni projekt (5–15 cm),",
      "Duży projekt / sesja wielogodzinna,",
      "Piercing — u naszej certyfikowanej piercerki Emi.",
    ],
  },
  {
    type: "p",
    text: "Każdą z tych kategorii wyceniamy indywidualnie — napisz, opisz pomysł i miejsce na ciele, a przygotujemy wycenę dopasowaną do Twojego projektu.",
  },
  { type: "h2", text: "Co wchodzi w cenę" },
  {
    type: "p",
    text: "W cenie tatuażu otrzymujesz: indywidualny projekt przygotowany specjalnie dla Ciebie, sterylne, jednorazowe igły, certyfikowane farby oraz instrukcje pielęgnacji po sesji. Dbamy o higienę i komfort na każdym etapie.",
  },
  { type: "h2", text: "Jak umówić wycenę" },
  {
    type: "p",
    text: [
      "Napisz do wybranej artystki przez jej profil na Instagramie lub skorzystaj z ",
      { text: "formularza kontaktowego", href: "/kontakt" },
      ". Wycena jest bezpłatna i niewiążąca.",
    ],
  },
  {
    type: "links",
    title: "Zobacz też",
    items: [
      {
        label: "Ile kosztuje tatuaż w Warszawie — od czego zależy cena",
        href: "/poradniki/ile-kosztuje-tatuaz-warszawa",
      },
      {
        label: "Jak przygotować się do tatuażu",
        href: "/poradniki/jak-przygotowac-sie-do-tatuazu",
      },
      { label: "Czy tatuaż boli?", href: "/poradniki/czy-tatuaz-boli" },
      { label: "Piercing w K2inked", href: "/piercing" },
    ],
  },
];
