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
  title: "eXp Realty Gisors | Conseiller Immobilier - Vincent Leclerc",
  description:
    "Conseiller immobilier eXp Realty basé à Gisors. Accompagnement personnalisé pour vente et achat de biens dans l'Eure (27), Val-d'Oise (95), Oise (60) et Seine-Maritime (76).",
  keywords:
    "conseiller immobilier Gisors, immobilier Eure, vente maison Val-d'Oise, appartement Oise, estimation immobilière Gisors, eXp Realty, Vincent Leclerc, immobilier 27 95 60 76",
  authors: [{ name: "Vincent Leclerc - eXp Realty" }],
  creator: "Vincent Leclerc - eXp Realty",
  publisher: "eXp Realty",
  metadataBase: new URL("https://immo-vexin-normandie.fr"),
  alternates: {
    canonical: "https://immo-vexin-normandie.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://immo-vexin-normandie.fr",
    siteName: "Vincent Leclerc - Conseiller Immobilier eXp Realty",
    title: "eXp Realty Gisors | Vincent Leclerc - Conseiller Immobilier",
    description:
      "Conseiller immobilier basé à Gisors. Accompagnement personnalisé pour vos projets immobiliers dans l'Eure, Val-d'Oise, Oise et Seine-Maritime.",
    images: [
      {
        url: "/interieur.png",
        width: 1200,
        height: 630,
        alt: "Vincent Leclerc - Conseiller Immobilier eXp Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eXp Realty Gisors | Vincent Leclerc",
    description:
      "Conseiller immobilier basé à Gisors. Accompagnement personnalisé. Réseau eXp Realty.",
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
    name: "Vincent Leclerc - eXp Realty",
    image: "https://immo-vexin-normandie.fr/interieur.png",
    url: "https://immo-vexin-normandie.fr",
    telephone: "+33662155757",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gisors",
      addressRegion: "Eure",
      postalCode: "27140",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Gisors" },
      { "@type": "AdministrativeArea", name: "Eure (27)" },
      { "@type": "AdministrativeArea", name: "Val-d'Oise (95)" },
      { "@type": "AdministrativeArea", name: "Oise (60)" },
      { "@type": "AdministrativeArea", name: "Seine-Maritime (76)" },
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
