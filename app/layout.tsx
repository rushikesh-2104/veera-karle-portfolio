import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veera Karle | Dancer • Actress • Fashion Model",

  description:
    "Official portfolio of Veera Karle — showcasing cinematic storytelling through dance, fashion, acting and editorial artistry.",

  keywords: [
    "Veera Karle",
    "Fashion Model",
    "Actress",
    "Dancer",
    "Portfolio",
    "Editorial Model",
    "Cinematic Portfolio",
    "Indian Fashion Model",
    "Creative Portfolio",
  ],

  authors: [
    {
      name: "Rushikesh Mhatre",
    },
  ],

  creator: "Rushikesh Mhatre",

  openGraph: {
    title: "Veera Karle | Official Portfolio",
    description:
      "Explore the cinematic portfolio of Veera Karle featuring fashion editorials, dance, acting and visual storytelling.",

    url: "https://veera-karle-portfolio.vercel.app",

    siteName: "Veera Karle",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Veera Karle Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veera Karle | Official Portfolio",
    description:
      "Fashion • Dance • Acting • Editorial Storytelling",

    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}