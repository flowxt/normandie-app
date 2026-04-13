import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Biens à vendre | Maisons & Appartements - eXp Realty Gisors",
  description:
    "Consultez nos biens immobiliers à vendre : maisons, appartements et terrains dans l'Eure (27), Val-d'Oise (95), Oise (60) et Seine-Maritime (76). Vincent Leclerc, conseiller eXp Realty.",
  alternates: {
    canonical: "https://www.immo-vexin-normandie.fr/biens-a-vendre",
  },
  openGraph: {
    title:
      "Biens à vendre | Maisons & Appartements - eXp Realty Gisors",
    description:
      "Découvrez nos biens immobiliers à vendre dans l'Eure, Val-d'Oise, Oise et Seine-Maritime.",
    url: "https://www.immo-vexin-normandie.fr/biens-a-vendre",
  },
};

export default function BiensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
