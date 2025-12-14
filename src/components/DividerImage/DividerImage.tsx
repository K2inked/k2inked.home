"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { DividersData } from "./data";

type DividerProps = {
  id: string;
};

export const DividerImage = ({ id }: DividerProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    if (!root || !inner) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 20) / viewportH;
        const translate = (progress - 0.2) * rect.height * 0.5;
        inner.style.transform = `translateY(${translate.toFixed(1)}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const divider = DividersData.find((d) => d.id === id);
  if (!divider) return null;

  return (
    <section
      ref={rootRef}
      className="tablet:h-[300px] desktop:h-[400px] relative h-[250px] overflow-hidden"
    >
      <div ref={innerRef} className="absolute -inset-30 will-change-transform">
        <Image
          src={divider.src}
          alt={divider.alt}
          fill
          sizes="(min-width:1280px) 120vw,
             (min-width:768px)  115vw,
             100vw"
          priority
          quality={90}
          className="object-cover grayscale-100"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: "scale(1.2)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
};
