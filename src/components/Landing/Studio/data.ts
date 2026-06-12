export const studioData = [
  "Jesteśmy studiem założonym przez dwie tatuatorki z wieloletnim doświadczeniem. Dogłębna wiedza o naszej branży sprawia, że łączymy profesjonalizm z klimatem, który przenosi Cię w nasz artystyczny świat.",
  "Skład naszego studia tworzą artyści o różnych specjalizacjach i unikalnym stylu – dzięki temu każdy znajdzie tu coś dla siebie, od delikatnych, minimalistycznych wzorów po pełne detali, mocnej czerni, odważne kompozycje.",
  "Wykonasz u nas rownież piercing, który podkreśli Twój charakter i dopełni wyjątkowy wizerunek.",
  "Przyjdź i zanurz się w świecie sztuki, a jedno z dzieł weź ze sobą, na zawsze, na skórze.",
] as const;

type TarotItem = {
  id: string;
  src: string;
  alt: string;
  flippedSrc: string;
  flippedAlt: string;
  content: string;
};

export const TarotCardsData: TarotItem[] = [
  {
    id: "tarot1",
    src: "/images/studio/tarot_1.jpeg",
    alt: "Karta tarota przedstawiająca członków K2inked",
    flippedSrc: "/images/studio/studio_1.jpg",
    flippedAlt: "Zdjęcie przedstawiające wnętrze studia K2inked",
    content:
      "Jesteśmy zespołem, który traktuje się jak rodzina i współpracuje od lat. To przekłada się na luźną, komfortową atmosferę – bez napięć, bez dziwnych akcji, za to z dobrą energią.",
  },
  {
    id: "tarot2",
    src: "/images/studio/tarot_2.jpeg",
    alt: "Karta tarota przedstawiająca poczekalnię studia K2inked",
    flippedSrc: "/images/studio/studio_2.jpg",
    flippedAlt: "Zdjęcie przedstawiające wnętrze studia K2inked",
    content:
      "Każdy krok w naszym studiu to coś nowego do odkrycia. K2 to przestrzeń pełna detali — vintage meble, obrazy,rzeźby, które razem tworzą jedną wielką galerię sztuki.",
  },
  {
    id: "tarot3",
    src: "/images/studio/tarot_4.jpeg",
    alt: "Karta tarota przedstawiająca atrystkę podczas tatuowania",
    flippedSrc: "/images/studio/studio_3.jpg",
    flippedAlt: "Zdjęcie przedstawiające artystkę podczas tatuowania",
    content:
      "Każdy artysta to inna historia i inny styl. Dzięki temu klient wychodzi z tatuażem/piercingiem skrojonym idealnie pod siebie – z sercem włożonym w każdy detal.",
  },
  {
    id: "tarot4",
    src: "/images/studio/tarot_3.jpeg",
    alt: "Karta tarota przedstawiająca galerię rycin",
    flippedSrc: "/images/studio/studio_4.jpg",
    flippedAlt: "Zdjęcie przedstawiające galerię rycin w studiu K2inked",
    content:
      "Wyjdziesz od nas ze sztuką nie tylko na skórze. Nasz team to artyści w pełnym wymiarze – ich pasja przejawia się też w obrazach, rzeźbach i rzeczach handmade.",
  },
] as const;
