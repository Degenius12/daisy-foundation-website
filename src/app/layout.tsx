import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Allura } from "next/font/google";
import "./globals.css";

// Montserrat - Primary sans-serif for body and headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Allura - Elegant script for logo and decorative text
const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

// Playfair Display - Accent serif for quotes and special text
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Daisy's Foundation | In Her Name",
  description:
    "Rooted in love. Growing in community. Honoring Grandmother Daisy's legacy through programs that nurture families and build thriving communities.",
  keywords: [
    "nonprofit",
    "early childhood education",
    "pre-K programs",
    "tuition assistance",
    "educational support",
    "Miami nonprofits",
    "family support services",
    "community programs",
    "grandmother daisy legacy",
  ],
  authors: [{ name: "Daisy's Foundation" }],
  creator: "Daisy's Foundation",
  publisher: "Daisy's Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daisysfoundation.com",
    title: "Daisy's Foundation | In Her Name",
    description:
      "Rooted in love. Growing in community. Honoring Grandmother Daisy's legacy through programs that nurture families and build thriving communities.",
    siteName: "Daisy's Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daisy's Foundation | In Her Name",
    description:
      "Rooted in love. Growing in community. Honoring Grandmother Daisy's legacy through programs that nurture families.",
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
    <html lang="en" className={`${montserrat.variable} ${allura.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
