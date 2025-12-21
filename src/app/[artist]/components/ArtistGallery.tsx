"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { IconChevron } from "@/icons/IconChevron";
import { cn } from "@/utils";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

type Props = {
  images: string[];
  name: string;
  className?: string;
};

export const ArtistGallery = ({ images, name, className }: Props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () => images.map((src, i) => ({ src, alt: `${name} – praca #${i + 1}` })),
    [images, name],
  );

  const clx =
    " text-light tablet:size-15 size-7 hover:text-light/80 transition duration-300 active:scale-110";

  return (
    <>
      <div
        className={
          className ??
          "tablet:grid-cols-2 tablet:gap-12.5 grid grid-cols-2 gap-6"
        }
      >
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Powiększ: ${name} – zdjęcie ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="tablet:size-75 group relative size-32.5 cursor-pointer overflow-hidden rounded-3xl drop-shadow-lg/30"
          >
            <Image
              alt={`${name} - zdjęcie pracy nr. ${i + 1}`}
              src={src}
              fill
              sizes="(min-width:1280px) 25rem, (min-width:768px) 22rem, 90vw"
              quality={90}
              className="h-full w-full object-cover grayscale-75 transition-transform duration-300 group-hover:scale-110 group-hover:grayscale-0"
            />
          </button>
        ))}
      </div>

      {open && (
        <Lightbox
          index={index}
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Fullscreen, Zoom, Thumbnails]}
          render={{
            iconPrev: () => <IconChevron className={cn(clx, "rotate-180")} />,
            iconNext: () => <IconChevron className={clx} />,
          }}
          animation={{ zoom: 500 }}
          zoom={{ maxZoomPixelRatio: 3 }}
          thumbnails={{ width: 80, height: 80, borderRadius: 8 }}
          className="z-50"
        />
      )}
    </>
  );
};
