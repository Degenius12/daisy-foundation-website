import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daisy Foundation | Supporting Early Childhood Education",
  description:
    "Helping families afford quality pre-kindergarten programs through tuition subsidies, educational enrichment, and job training. Every child deserves quality education.",
  keywords: [
    "nonprofit",
    "early childhood education",
    "pre-K programs",
    "tuition assistance",
    "educational support",
    "Miami nonprofits",
    "family support services",
  ],
  authors: [{ name: "Daisy Foundation" }],
  creator: "Daisy Foundation",
  publisher: "Daisy Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daisysfoundation.com",
    title: "Daisy Foundation | Supporting Early Childhood Education",
    description:
      "Helping families afford quality pre-kindergarten programs through tuition subsidies, educational enrichment, and job training.",
    siteName: "Daisy Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daisy Foundation | Supporting Early Childhood Education",
    description:
      "Helping families afford quality pre-kindergarten programs through tuition subsidies, educational enrichment, and job training.",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
