import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: `${PERSONAL_INFO.tagline} Full-Stack & WordPress Engineer specializing in Next.js, WooCommerce, custom PHP plugins, and CRM integrations.`,
  keywords: [
    "Akash Agrahari",
    "WordPress Developer",
    "Next.js Developer",
    "Freelance Web Developer",
    "Custom WordPress Plugin Developer",
    "WooCommerce Specialist",
    "React Developer",
    "Elementor Expert",
    "CRM Integration",
    "Full-Stack Developer India",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.tagline,
    url: "https://akashagrahari.dev",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.tagline,
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-black text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
