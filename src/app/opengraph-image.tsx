import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akash Agrahari - Full-Stack & WordPress Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(52, 211, 153, 0.2) 0%, transparent 50%), radial-gradient(circle at 10% 85%, rgba(16, 185, 129, 0.15) 0%, transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Frame border */}
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 24,
          }}
        />

        {/* Top Header: Brand Logo & Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(180deg, #27272a 0%, #09090b 100%)",
                border: "2px solid rgba(52, 211, 153, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(52, 211, 153, 0.3)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 19L12 4L17 19"
                  stroke="#34d399"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.2 14.2H14.8"
                  stroke="#34d399"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7.5" r="1.5" fill="#34d399" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
                Akash
              </span>
              <span style={{ fontSize: "32px", fontWeight: 600, color: "#d4d4d8", letterSpacing: "-0.02em" }}>
                Agrahari
              </span>
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: "#34d399",
                  boxShadow: "0 0 12px #34d399",
                }}
              />
            </div>
          </div>

          {/* Availability badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(52, 211, 153, 0.12)",
              border: "1px solid rgba(52, 211, 153, 0.4)",
              color: "#34d399",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#34d399",
              }}
            />
            <span>Available for Projects</span>
          </div>
        </div>

        {/* Center: Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "10px" }}>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#34d399",
            }}
          >
            Full-Stack & WordPress Engineer
          </div>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: "1000px",
            }}
          >
            Building High-Converting Web Products & Custom Plugins
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              maxWidth: "920px",
              lineHeight: 1.4,
            }}
          >
            Specialized in Next.js, WordPress, WooCommerce, custom PHP plugins, and automated CRM integrations.
          </div>
        </div>

        {/* Bottom Footer: Skills Tags & URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["Next.js", "WordPress", "WooCommerce", "Custom PHP Plugins", "CRM APIs"].map((skill) => (
              <div
                key={skill}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#e4e4e7",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {skill}
              </div>
            ))}
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
      </div>
    ),
    {
      ...size,
    }
  );
}
