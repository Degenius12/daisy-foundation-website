import type { Metadata } from "next";
import { Playfair_Display, Lora, Parisienne } from "next/font/google";
import "./globals.css";

// Vintage typography system
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
  display: "swap",
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
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${parisienne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
