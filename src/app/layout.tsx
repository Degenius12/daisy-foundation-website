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
  title: "Daisy's Nonprofit | Supporting Early Childhood Education",
  description:
    "Helping families afford quality pre-kindergarten programs through tuition subsidies, educational enrichment, and job training. Every child deserves quality education.",
  keywords: [
    "nonprofit",
    "early childhood education",
    "pre-K programs",
    "tuition assistance",
    "educational support",
    "Jacksonville FL nonprofits",
    "family support services",
  ],
  authors: [{ name: "Daisy's Nonprofit" }],
  creator: "Daisy's Nonprofit",
  publisher: "Daisy's Nonprofit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daisysnonprofit.com",
    title: "Daisy's Nonprofit | Supporting Early Childhood Education",
    description:
      "Helping families afford quality pre-kindergarten programs through tuition subsidies, educational enrichment, and job training.",
    siteName: "Daisy's Nonprofit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daisy's Nonprofit | Supporting Early Childhood Education",
    description:
      "Helping families afford quality pre-kindergarten programs through tuition subsidies, educational enrichment, and job training.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Daisy's Nonprofit",
  url: "https://daisysnonprofit.com",
  logo: "https://daisysnonprofit.com/images/Logo-transparent.png",
  description:
    "Jacksonville, FL nonprofit supporting families through early childhood education tuition subsidies, enrichment programs, and job training.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@daisysfoundation.com",
    contactType: "customer support",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
