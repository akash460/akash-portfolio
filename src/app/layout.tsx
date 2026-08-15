import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akashagrahari.dev"),
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: `${PERSONAL_INFO.tagline} Experienced Full-Stack and WordPress Developer specializing in custom PHP plugins, WooCommerce, Elementor, and Next.js / React applications.`,
  keywords: [
    "Akash Agrahari",
    "Full-Stack Developer",
    "WordPress Developer",
    "Fullstack and WordPress Developer",
    "Next.js Developer",
    "Freelance Web Developer",
    "Custom WordPress Plugin Developer",
    "WooCommerce Specialist",
    "React Developer",
    "PostgreSQL",
    "Neon DB",
    "Supabase",
    "n8n Automation",
    "Skyvern",
    "Workflow Automation",
    "Elementor Expert",
    "PHP Developer",
    "CRM Integration",
    "Full-Stack Developer India",
    "Fatehpur Developer",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://akashagrahari.dev" }],
  creator: PERSONAL_INFO.name,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon.svg"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: `${PERSONAL_INFO.tagline} Full-Stack & WordPress Developer specializing in Next.js, WooCommerce, PostgreSQL, Supabase, n8n automations, custom PHP plugins, and CRM integrations.`,
    url: "https://akashagrahari.dev",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.tagline,
    creator: "@akashagrahari",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-emerald-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
