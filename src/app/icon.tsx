import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: "8px",
          border: "1.5px solid #10b981",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 19L12 4L17 19"
            stroke="#34d399"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 14.2H14.8"
            stroke="#34d399"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="7.5" r="1.5" fill="#34d399" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
