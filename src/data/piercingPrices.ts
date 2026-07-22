// Cennik piercingu — dane od klienta (piercerka Emi). JEDNO źródło prawdy:
// importowane przez /piercing i /cennik, więc zmiana ceny = edycja tutaj.
// Treść klienta 1:1 (w tym pierwsza osoba „moich klientów" — nie zmieniać).

export type PriceRow = { label: string; price: string };
export type PriceGroup = { heading: string; rows: PriceRow[]; note?: string };

export const PIERCING_PRICE_GROUPS: PriceGroup[] = [
  {
    heading: "UCHO",
    rows: [
      { label: "Lobe / upper lobe", price: "150 zł" },
      {
        label:
          "Helix / forward helix / flat / conch / snonch / tragus / anti-tragus / snug / rook / faux rook / daith",
        price: "150 zł",
      },
      { label: "Industrial / orbital", price: "180 zł" },
    ],
  },
  {
    heading: "NOS I CIAŁO",
    rows: [
      { label: "Septum", price: "150 zł" },
      { label: "Nostril", price: "150 zł" },
      { label: "Bridge", price: "160 zł" },
      { label: "Brow", price: "150 zł" },
      { label: "Navel / reverse navel", price: "160 zł" },
      { label: "Sutek / sutki", price: "180 zł / 300 zł" },
    ],
  },
  {
    heading: "USTA I WARGI",
    rows: [
      { label: "Smiley / frowny", price: "150 zł" },
      { label: "Vertical labret / jestrum", price: "150 zł" },
      { label: "Different labrets", price: "150 zł" },
      { label: "Standard tongue", price: "170 zł" },
      { label: "Venom / double", price: "300 zł" },
    ],
  },
  {
    heading: "POZOSTAŁE USŁUGI",
    note: "Do ceny może zostać doliczony koszt nowego kolczyka.",
    rows: [
      { label: "Konsultacja dla moich klientów", price: "bezpłatna" },
      { label: "Konsultacja dla klientów spoza studia", price: "50 zł" },
      { label: "Konsultacja po niestosowaniu się do zaleceń", price: "60 zł" },
      { label: "Czyszczenie, wymiana lub wyjęcie kolczyka", price: "50 zł" },
      { label: "Kolczyk standardowy", price: "30 zł" },
      { label: "Ozdobna biżuteria", price: "cena ustalana indywidualnie" },
    ],
  },
  {
    heading: "PLAY PIERCING",
    note: "W cenę wliczone są zdobienia, takie jak wstążki, pióra, łańcuszki, sznurki itp.",
    rows: [
      { label: "Do 10 kółeczek wraz ze zdobieniami", price: "400 zł" },
      { label: "Więcej niż 10 kółeczek", price: "od 400 zł" },
    ],
  },
  {
    heading: "NEEDLE PLAY",
    note: "W cenę wliczone są zdobienia, takie jak wstążki, pióra, łańcuszki, sznurki itp.",
    rows: [
      { label: "Do 40 igieł", price: "400 zł" },
      { label: "Więcej niż 40 igieł", price: "od 400 zł" },
    ],
  },
];
