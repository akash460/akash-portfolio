import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          bg: "#08080a",
          card: "#111115",
          border: "#1d1d24",
          hover: "#262630",
        },
        lime: {
          400: "#94e630",
          500: "#84d422",
        },
        accent: {
          lime: "#94e630",
          red: "#eb0b0b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Manrope", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(148, 230, 48, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
};
export default config;
