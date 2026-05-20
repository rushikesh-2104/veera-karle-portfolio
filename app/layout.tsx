import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://veera-karle-portfolio.vercel.app"),

  title: {
    default: "Veera Karle | Actress • Dancer • Fashion Model",
    template: "%s | Veera Karle",
  },

  description:
    "Official portfolio of Veera Karle showcasing fashion modeling, acting performances, dance artistry, cinematic storytelling and editorial visuals.",

  keywords: [
    "Veera Karle",
    "Veera Karle actress",
    "Veera Karle dancer",
    "Veera Karle fashion model",
    "Fashion model portfolio India",
    "Indian actress portfolio",
    "Editorial fashion model",
    "Cinematic storytelling",
    "Portfolio website",
    "Actress portfolio",
    "Dance artist portfolio",
  ],

  authors: [
    {
      name: "Rushikesh Mhatre",
      url: "https://veera-karle-portfolio.vercel.app",
    },
  ],

  creator: "Rushikesh Mhatre",

  publisher: "Rushikesh Mhatre",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Veera Karle | Actress • Dancer • Fashion Model",

    description:
      "Explore Veera Karle's official portfolio featuring cinematic visuals, fashion editorials, acting and dance artistry.",

    url: "https://veera-karle-portfolio.vercel.app",

    siteName: "Veera Karle",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Veera Karle Official Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Veera Karle | Actress • Dancer • Fashion Model",

    description:
      "Official cinematic portfolio of Veera Karle.",

    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}