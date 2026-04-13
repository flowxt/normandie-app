import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact | Vincent Leclerc - Conseiller Immobilier eXp Realty Gisors",
  description:
    "Contactez Vincent Leclerc, conseiller immobilier eXp Realty basé à Gisors. Estimation gratuite, accompagnement personnalisé pour votre projet immobilier dans l'Eure, Val-d'Oise, Oise et Seine-Maritime.",
  alternates: {
    canonical: "https://www.immo-vexin-normandie.fr/contact",
  },
  openGraph: {
    title:
      "Contact | Vincent Leclerc - Conseiller Immobilier eXp Realty",
    description:
      "Besoin d'un conseil immobilier ? Contactez-nous par téléphone ou via le formulaire. Réponse sous 24h.",
    url: "https://www.immo-vexin-normandie.fr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
