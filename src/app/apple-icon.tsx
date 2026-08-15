import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #000000 100%)",
          borderRadius: "38px",
          border: "3px solid rgba(52, 211, 153, 0.4)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "28px",
            background: "linear-gradient(180deg, #18181b 0%, #09090b 100%)",
            border: "2px solid rgba(52, 211, 153, 0.6)",
            boxShadow: "0 0 30px rgba(52, 211, 153, 0.3)",
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
          >
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
      </div>
    ),
    {
      ...size,
    }
  );
}
