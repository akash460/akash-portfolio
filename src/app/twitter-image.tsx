import { ImageResponse } from "next/og";

export const alt = "Akash Agrahari - Full-Stack & WordPress Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#050507",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff" }}>
            Akash Agrahari
          </span>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#34d399",
            }}
          >
            Full-Stack & WordPress Developer
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#ffffff",
            }}
          >
            Building High-Converting Web Products & Workflows
          </div>
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#71717a",
            fontFamily: "monospace",
          }}
        >
          akashagrahari.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
