import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPropertyBySlug, getAllProperties } from "@/data/properties";
import PropertyDetailClient from "./PropertyDetailClient";

const baseUrl = "https://www.immo-vexin-normandie.fr";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Bien introuvable" };
  }

  const title = `${property.title} | ${formatPrice(property.price)} | eXp Realty Gisors`;
  const description = property.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/biens-a-vendre/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/biens-a-vendre/${slug}`,
      images: [
        {
          url: property.mainImage,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [property.mainImage],
    },
  };
}

export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}
