type VariantProps = {
  variant: "hero" | "contact";
};

export const Map = ({ variant }: VariantProps) => {
  const variants = {
    hero: "relative h-96 max-h-[30%] w-full overflow-hidden tablet:h-[60vh] top-0 tablet:max-h-[400px]  ",
    contact:
      "tablet:h-[55em] tablet:max-h-full tablet:w-[40%] relative h-96 max-h-[30%] w-full overflow-hidden rounded-tr-3xl",
  };

  return (
    <div className={variants[variant]}>
      <iframe
        title="Mapa dojazdu — K2inked"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1221.8623090166263!2d21.015671879915452!3d52.2302207963174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd88a09b3e6d%3A0xe483c785b50e377a!2sK2.inked!5e0!3m2!1spl!2spl!4v1756646777890!5m2!1spl!2spl"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0 grayscale filter transition duration-500 hover:grayscale-0 active:grayscale-0"
      />
    </div>
  );
};
