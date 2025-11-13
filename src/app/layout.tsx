import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eXp France Normandie | Agent Immobilier - Estimation & Rénovation DPE",
  description:
    "Agent immobilier expert en Normandie : vente, achat, estimation gratuite. Spécialiste rénovation énergétique et valorisation DPE. Caen, Rouen, Le Havre, Deauville. Réseau eXp France.",
  keywords:
    "agent immobilier Normandie, immobilier Caen, vente maison Rouen, appartement Le Havre, estimation immobilière Calvados, rénovation énergétique, amélioration DPE, eXp France, Normandie immobilier, Deauville, Cherbourg, Évreux",
  authors: [{ name: "eXp France - Normandie" }],
  creator: "eXp France Normandie",
  publisher: "eXp France",
  metadataBase: new URL("https://exp-normandie.fr"),
  alternates: {
    canonical: "https://exp-normandie.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://exp-normandie.fr",
    siteName: "eXp France - Agent Immobilier Normandie",
    title: "eXp France Normandie | Expert Immobilier & Rénovation Énergétique",
    description:
      "Agent immobilier spécialisé Normandie : vente, achat, estimation gratuite. Expert rénovation énergétique et valorisation DPE. Caen, Rouen, Le Havre, Deauville.",
    images: [
      {
        url: "/interieur.png",
        width: 1200,
        height: 630,
        alt: "eXp France - Agent Immobilier Normandie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eXp France Normandie | Agent Immobilier & DPE",
    description:
      "Expert immobilier Normandie : vente, achat, estimation gratuite. Spécialiste rénovation énergétique. Réseau eXp France.",
    images: ["/interieur.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_code_here", // À remplacer par le code Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "eXp France - Normandie",
    image: "https://exp-normandie.fr/interieur.png",
    url: "https://exp-normandie.fr",
    telephone: "+33662155757",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Normandie",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Caen" },
      { "@type": "City", name: "Rouen" },
      { "@type": "City", name: "Le Havre" },
      { "@type": "City", name: "Cherbourg" },
      { "@type": "City", name: "Évreux" },
      { "@type": "City", name: "Alençon" },
      { "@type": "City", name: "Lisieux" },
      { "@type": "City", name: "Deauville" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    memberOf: {
      "@type": "Organization",
      name: "eXp France",
    },
    sameAs: ["https://www.expfrance.fr"],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
