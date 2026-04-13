import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "À propos | Vincent Leclerc - Conseiller Immobilier eXp Realty Gisors",
  description:
    "Découvrez le parcours de Vincent Leclerc, conseiller immobilier eXp Realty basé à Gisors. Un accompagnement humain et stratégique pour votre projet immobilier dans l'Eure, Val-d'Oise, Oise et Seine-Maritime.",
  alternates: {
    canonical: "https://www.immo-vexin-normandie.fr/a-propos",
  },
  openGraph: {
    title:
      "À propos | Vincent Leclerc - Conseiller Immobilier eXp Realty",
    description:
      "Parcours, valeurs et engagement. Vincent Leclerc, votre conseiller immobilier de confiance à Gisors.",
    url: "https://www.immo-vexin-normandie.fr/a-propos",
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
