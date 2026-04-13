import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nos Accompagnements | Estimation, Vente & Conseil Immobilier - eXp Realty Gisors",
  description:
    "Découvrez nos accompagnements personnalisés : estimation gratuite, mise en vente optimisée, conseil en investissement, division de terrain et aide à la rénovation. Vincent Leclerc, conseiller immobilier eXp Realty.",
  alternates: {
    canonical: "https://www.immo-vexin-normandie.fr/nos-services",
  },
  openGraph: {
    title:
      "Nos Accompagnements | Estimation, Vente & Conseil Immobilier - eXp Realty Gisors",
    description:
      "Estimation gratuite, mise en vente optimisée, conseil en investissement. Accompagnement sur-mesure dans l'Eure, Val-d'Oise, Oise et Seine-Maritime.",
    url: "https://www.immo-vexin-normandie.fr/nos-services",
  },
};

export default function NosServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
