import Image from "next/image";
import { Opinion } from "./data";
import { IconStar } from "@/icons/IconStar";

type CardProps = Opinion & {
  className?: string;
};

// used hardcoded data from data.ts for now, waiting for the access to the API

export const Card = ({ opinion, author, rate, date, avatar }: CardProps) => {
  const maxChars = 350;
  const text =
    typeof opinion === "string" && opinion.length > maxChars
      ? opinion.slice(0, maxChars).trimEnd() + "…"
      : opinion;

  return (
    <div className="border-primary h-95 w-70 rounded-2xl border-1 bg-white p-4 drop-shadow-lg/30">
      <div className="mb-3 flex">
        <div className="mr-4 h-12.5 w-12.5">
          <Image
            src={avatar}
            alt={author}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
        <div className="inline-flex flex-col justify-center">
          <h3 className="text-md text-dark/70 font-semibold">{author}</h3>
          <p className="text-dark/70 text-sm">
            {new Date(date).toLocaleDateString("pl-PL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="mt-5 flex">
        {Array.from({ length: 5 }, (_, i) => (
          <IconStar
            key={i}
            size={20}
            className={`${i < rate ? "text-primary" : "text-dark/20"}`}
          />
        ))}
      </div>
      <p className="text-dark/80 mt-4 text-sm leading-5 font-light">{text}</p>
    </div>
  );
};
