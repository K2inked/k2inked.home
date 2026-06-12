import Link from "next/link";
import { STATIC_ROUTES } from "@/routes";

export const Attribution = () => (
  <section className="desktop:inline-flex tablet:gap-2 tablet:text-sm flex flex-col items-center gap-3 text-[3vw]">
    <small>
      &copy; <time dateTime="2025">2025</time>{" "}
      <strong>
        <Link
          href={STATIC_ROUTES.HOME}
          aria-label="Przejdź do strony głównej salonu K2.INKED"
          className="link-hover"
        >
          K2.INKED
        </Link>
      </strong>{" "}
      ALL RIGHTS RESERVED.{" "}
    </small>
    <small>
      PHOTOS BY{" "}
      <a
        href="https://www.instagram.com/laczynski_ph"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tomasz Łączyński — Instagram"
        className="link-hover"
      >
        <strong>TOMASZ ŁĄCZYŃSKI</strong>.
      </a>
    </small>
    <small>
      DESIGNED &amp; PROUDLY DEVELOPED BY
      <a
        href="https://www.linkedin.com/in/agata-kuklinska"
        rel="author noopener noreferrer"
        target="_blank"
        aria-label="Agata Kuklińska — LinkedIn"
        className="link-hover"
      >
        {" "}
        <strong>AGATA KUKLIŃSKA</strong>
      </a>
      .
    </small>
  </section>
);
