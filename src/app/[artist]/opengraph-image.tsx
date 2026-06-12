import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { TEAM_BY_SLUG } from "@/data/teamData";
import { ARTIST_SLUGS, RESERVED_SLUGS, isArtistSlug } from "@/routes";

export const alt = "K2inked — artysta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return ARTIST_SLUGS.filter((slug) => !RESERVED_SLUGS.has(slug)).map(
    (artist) => ({ artist }),
  );
}

export default async function ArtistOgImage({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const { artist } = await params;
  const member = isArtistSlug(artist) ? TEAM_BY_SLUG[artist] : undefined;

  // Zdjęcie artysty wczytane z public/ jako data URI (build-time, statyczny OG).
  let photo = "";
  if (member) {
    try {
      const buf = readFileSync(join(process.cwd(), "public", member.imgSrc));
      photo = `data:image/jpeg;base64,${buf.toString("base64")}`;
    } catch {
      photo = "";
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0e0e0e",
          fontFamily: "serif",
        }}
      >
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.55) 45%, rgba(14,14,14,0.15) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 72,
            display: "flex",
            flexDirection: "column",
            color: "#f5f5f5",
          }}
        >
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#bdbdbd",
            }}
          >
            K2inked · Warszawa
          </div>
          <div style={{ fontSize: 104, fontWeight: 700, marginTop: 6 }}>
            {member?.name ?? "K2inked"}
          </div>
          {member?.style ? (
            <div style={{ fontSize: 40, marginTop: 4, color: "#dcdcdc" }}>
              {member.style}
            </div>
          ) : null}
        </div>
      </div>
    ),
    size,
  );
}
