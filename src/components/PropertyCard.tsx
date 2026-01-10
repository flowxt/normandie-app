"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const dpeColors: Record<string, string> = {
  A: "bg-green-500",
  B: "bg-lime-500",
  C: "bg-yellow-400",
  D: "bg-amber-400",
  E: "bg-orange-500",
  F: "bg-red-500",
  G: "bg-red-700",
  "N/A": "bg-gray-400",
};

const typeLabels: Record<string, string> = {
  maison: "Maison",
  appartement: "Appartement",
  terrain: "Terrain",
  autre: "Bien",
};

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <Link href={`/biens-a-vendre/${property.slug}`} className="block">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.mainImage}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges en haut */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1e3771] text-white text-xs font-bold rounded-full shadow-lg">
              {typeLabels[property.type]}
            </span>
            {property.status === "sous-compromis" && (
              <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                Sous compromis
              </span>
            )}
            {property.status === "vendu" && (
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                Vendu
              </span>
            )}
          </div>

          {/* DPE Badge */}
          {property.dpe !== "N/A" && (
            <div className="absolute top-4 right-4">
              <div className={`w-10 h-10 ${dpeColors[property.dpe]} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {property.dpe}
              </div>
            </div>
          )}

          {/* Prix overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="text-2xl font-bold text-white">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6">
          {/* Titre et localisation */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3771] transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-500 mb-4">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{property.city} ({property.postalCode})</span>
          </div>

          {/* Caractéristiques principales */}
          {property.type === "terrain" ? (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#1e3771]">{property.surface}</div>
                <div className="text-xs text-gray-500">m² terrain</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#1e3771]">463</div>
                <div className="text-xs text-gray-500">m² construct.</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#1e3771]">{property.surface}</div>
                <div className="text-xs text-gray-500">m²</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#1e3771]">{property.rooms}</div>
                <div className="text-xs text-gray-500">pièces</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#1e3771]">{property.bedrooms}</div>
                <div className="text-xs text-gray-500">ch.</div>
              </div>
            </div>
          )}

          {/* Features rapides */}
          <div className="flex flex-wrap gap-2 mb-4">
            {property.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 bg-[#2998a6]/10 text-[#0d6c8a] text-xs font-medium rounded-full"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="px-2 py-1 text-gray-400 text-xs">
                +{property.features.length - 3}
              </span>
            )}
          </div>

          {/* Référence */}
          <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
            <span>Réf. {property.reference}</span>
            <span className="text-[#2998a6] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
              Voir le bien
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
