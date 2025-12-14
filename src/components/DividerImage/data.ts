type DividerItem = {
  id: string;
  src: string;
  alt: string;
};

export const DividersData: DividerItem[] = [
  {
    id: "divider1",
    src: "/images/dividers/divider_1.png",
    alt: "Zdjęcie przedstawiające Kari - artystkę tatuażu podczas pracy",
  },
  {
    id: "divider2",
    src: "/images/dividers/divider_2.png",
    alt: "Zdjęcie przedstawiające fragment studia tatuażu K2.inked w Warszawie",
  },
  { id: "divider3", src: "/images/dividers/divider_3.png", alt: "Zdjęcie przedstawiające fragment studia tatuażu K2.inked w Warszawie" },
] as const;

