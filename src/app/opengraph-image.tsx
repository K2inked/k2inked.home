import { ImageResponse } from "next/og";

// Brandowany kafelek OG dla strony głównej (1200x630). Next auto-wpina go jako
// og:image oraz twitter:image. Zastępuje nieistniejący statyczny /og/k2-og.jpg.

export const alt = "K2inked — Studio tatuażu Warszawa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0e0e0e",
          color: "#f5f5f5",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 132, letterSpacing: "-0.02em", fontWeight: 700 }}>
          K2inked
        </div>
        <div style={{ fontSize: 46, marginTop: 12, color: "#cfcfcf" }}>
          Studio tatuażu Warszawa
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 36,
            letterSpacing: "0.18em",
            color: "#9a9a9a",
            textTransform: "uppercase",
          }}
        >
          Krucza 47A · Śródmieście
        </div>
      </div>
    ),
    size,
  );
}
