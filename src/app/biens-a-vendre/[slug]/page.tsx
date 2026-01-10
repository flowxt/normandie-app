"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";
import { getPropertyBySlug, Property } from "@/data/properties";

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

const dpeLabels: Record<string, string> = {
  A: "Très performant",
  B: "Performant",
  C: "Assez performant",
  D: "Moyen",
  E: "Peu performant",
  F: "Passoire thermique",
  G: "Très énergivore",
  "N/A": "Non applicable",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

function PropertyDetail({ property }: { property: Property }) {
  return (
    <>
      {/* Header avec image principale */}
      <section className="relative pt-32 pb-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#0d6c8a] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/biens-a-vendre" className="hover:text-[#0d6c8a] transition-colors">
                  Biens à vendre
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-gray-900 font-medium truncate max-w-[200px]">
                {property.title}
              </li>
            </ol>
          </motion.nav>

          {/* Carrousel de photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <ImageCarousel images={property.images} alt={property.title} />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-3 z-20 pointer-events-none">
                <span className="px-4 py-2 bg-[#1e3771] text-white font-bold rounded-xl shadow-lg">
                  {property.type === "maison" ? "Maison" : property.type === "appartement" ? "Appartement" : property.type === "terrain" ? "Terrain" : "Bien"}
                </span>
                {property.status === "sous-compromis" && (
                  <span className="px-4 py-2 bg-amber-500 text-white font-bold rounded-xl shadow-lg">
                    Sous compromis
                  </span>
                )}
              </div>

              {/* Prix et DPE */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 md:px-8 md:py-4 shadow-xl">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1e3771]">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">Honoraires à la charge du vendeur</div>
                </div>

                {/* DPE/GES - uniquement si applicable */}
                {property.dpe !== "N/A" && (
                  <div className="flex gap-2">
                    <div className={`${dpeColors[property.dpe]} text-white font-bold px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg text-center`}>
                      <div className="text-xl md:text-2xl">{property.dpe}</div>
                      <div className="text-xs opacity-80">DPE</div>
                    </div>
                    <div className={`${dpeColors[property.ges]} text-white font-bold px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg text-center`}>
                      <div className="text-xl md:text-2xl">{property.ges}</div>
                      <div className="text-xs opacity-80">GES</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              {/* Titre et localisation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-600 text-lg">
                  <svg className="w-5 h-5 text-[#0d6c8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{property.address || `${property.city} (${property.postalCode})`}</span>
                </div>
              </motion.div>

              {/* Caractéristiques principales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-2 ${property.type === "terrain" ? "md:grid-cols-2" : "md:grid-cols-4"} gap-4 mb-10`}
              >
                {property.type === "terrain" ? (
                  <>
                    <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                      <svg className="w-6 h-6 mx-auto mb-3 text-[#0d6c8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <div className="text-2xl font-bold text-gray-900">{property.surface} m²</div>
                      <div className="text-sm text-gray-500">Surface totale</div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                      <svg className="w-6 h-6 mx-auto mb-3 text-[#0d6c8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div className="text-2xl font-bold text-gray-900">463 m²</div>
                      <div className="text-sm text-gray-500">Surface constructible</div>
                    </div>
                  </>
                ) : (
                  [
                    { value: `${property.surface} m²`, label: "Surface", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
                    { value: property.rooms, label: "Pièces", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                    { value: property.bedrooms, label: "Chambres", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { value: property.landSurface ? `${property.landSurface} m²` : "-", label: "Terrain", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
                    >
                      <svg className="w-6 h-6 mx-auto mb-3 text-[#0d6c8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                      <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                    </div>
                  ))
                )}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  {property.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Caractéristiques détaillées */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Caractéristiques</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.type === "terrain" ? (
                    <>
                      {[
                        { label: "Surface totale", value: `${property.surface} m²` },
                        { label: "Surface constructible", value: "463 m²" },
                        { label: "Emprise au sol", value: "116 m²" },
                        { label: "Type de terrain", value: "Constructible" },
                        { label: "Terrain plat", value: "Oui" },
                        { label: "Servitude", value: "Droit de passage" },
                        { label: "Viabilisé", value: "Presque" },
                        { label: "Permis de construire", value: "Non obtenu" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-semibold text-gray-900">{item.value}</span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {[
                        { label: "Surface habitable", value: `${property.surface} m²` },
                        { label: "Nombre de pièces", value: property.rooms },
                        { label: "Chambres", value: property.bedrooms },
                        { label: "Salle de bains", value: property.bathrooms },
                        { label: "Salle d'eau", value: property.showerRooms },
                        { label: "WC", value: property.toilets },
                        { label: "Surface terrain", value: property.landSurface ? `${property.landSurface} m²` : "-" },
                        { label: "Stationnement", value: property.parking },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-semibold text-gray-900">{item.value}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>

              {/* Équipements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Équipements</h2>
                <div className="flex flex-wrap gap-3">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2998a6]/10 text-[#0d6c8a] rounded-xl font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* DPE détaillé - uniquement si applicable */}
              {property.dpe !== "N/A" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnostic énergétique</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${dpeColors[property.dpe]} w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl font-bold`}>
                          {property.dpe}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">DPE - Classe {property.dpe}</div>
                          <div className="text-gray-500">{dpeLabels[property.dpe]}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Consommation énergétique
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${dpeColors[property.ges]} w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl font-bold`}>
                          {property.ges}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">GES - Classe {property.ges}</div>
                          <div className="text-gray-500">{dpeLabels[property.ges]}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Émissions de gaz à effet de serre
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-32"
              >
                {/* Card Contact */}
                <div className="bg-gradient-to-br from-[#1e3771] to-[#0d6c8a] rounded-3xl p-8 text-white shadow-xl mb-6">
                  <h3 className="text-2xl font-bold mb-4">Intéressé par ce bien ?</h3>
                  <p className="text-white/80 mb-6">
                    Contactez-nous pour organiser une visite ou obtenir plus d'informations.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <a
                      href="tel:+33662155757"
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-semibold">06 62 15 57 57</span>
                    </a>
                    <a
                      href="mailto:contact@exp-gisors.fr"
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">contact@exp-gisors.fr</span>
                    </a>
                  </div>

                  <Button
                    href={`/contact?bien=${property.reference}`}
                    variant="accent"
                    className="w-full justify-center text-lg py-4"
                  >
                    Demander une visite
                  </Button>
                </div>

                {/* Référence */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">Informations</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Référence</span>
                      <span className="font-semibold text-gray-900">{property.reference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Mandat</span>
                      <span className="font-semibold text-gray-900">N°{property.mandate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Statut</span>
                      <span className={`font-semibold ${property.status === "disponible" ? "text-green-600" : "text-amber-600"}`}>
                        {property.status === "disponible" ? "Disponible" : "Sous compromis"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Un accompagnement personnalisé pour votre projet
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre démarche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" className="text-lg px-8 py-4">
              Nous contacter
            </Button>
            <Button href="/biens-a-vendre" variant="outline-dark" className="text-lg px-8 py-4">
              Voir tous les biens
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetail property={property} />;
}
