"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useMemo, useEffect } from "react";
import Button from "@/components/Button";
import PropertyCard from "@/components/PropertyCard";
import { getAllProperties, Property } from "@/data/properties";

type PropertyType = "all" | "maison" | "appartement" | "terrain";
type PriceRange = "all" | "0-200000" | "200000-500000" | "500000-1000000" | "1000000+";
type SortOption = "price-asc" | "price-desc" | "surface-desc" | "newest";

const priceRanges = [
  { value: "all" as PriceRange, label: "Tous les prix" },
  { value: "0-200000" as PriceRange, label: "Moins de 200 000 €" },
  { value: "200000-500000" as PriceRange, label: "200 000 € - 500 000 €" },
  { value: "500000-1000000" as PriceRange, label: "500 000 € - 1 000 000 €" },
  { value: "1000000+" as PriceRange, label: "Plus de 1 000 000 €" },
];

const propertyTypes = [
  { value: "all" as PropertyType, label: "Tous les biens", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { value: "maison" as PropertyType, label: "Maisons", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { value: "appartement" as PropertyType, label: "Appartements", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { value: "terrain" as PropertyType, label: "Terrains", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

const sortOptions = [
  { value: "newest" as SortOption, label: "Plus récents" },
  { value: "price-asc" as SortOption, label: "Prix croissant" },
  { value: "price-desc" as SortOption, label: "Prix décroissant" },
  { value: "surface-desc" as SortOption, label: "Surface décroissante" },
];

export default function BiensAVendrePage() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const allProperties = getAllProperties();
  
  // États des filtres
  const [selectedType, setSelectedType] = useState<PropertyType>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>("all");
  const [sortBy, setSortBy] = useState<SortOption>("price-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [showBaremeModal, setShowBaremeModal] = useState(false);

  // Filtrage et tri des propriétés
  const properties = useMemo(() => {
    let filtered = [...allProperties];

    // Filtre par type
    if (selectedType !== "all") {
      filtered = filtered.filter((p) => p.type === selectedType);
    }

    // Filtre par prix
    if (selectedPriceRange !== "all") {
      filtered = filtered.filter((p) => {
        switch (selectedPriceRange) {
          case "0-200000":
            return p.price < 200000;
          case "200000-500000":
            return p.price >= 200000 && p.price < 500000;
          case "500000-1000000":
            return p.price >= 500000 && p.price < 1000000;
          case "1000000+":
            return p.price >= 1000000;
          default:
            return true;
        }
      });
    }

    // Tri
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "surface-desc":
        filtered.sort((a, b) => b.surface - a.surface);
        break;
      case "newest":
      default:
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }

    return filtered;
  }, [allProperties, selectedType, selectedPriceRange, sortBy]);

  const activeFiltersCount = (selectedType !== "all" ? 1 : 0) + (selectedPriceRange !== "all" ? 1 : 0);

  const resetFilters = () => {
    setSelectedType("all");
    setSelectedPriceRange("all");
    setSortBy("price-asc");
  };

  // Bloquer le scroll quand la modale est ouverte
  useEffect(() => {
    if (showBaremeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showBaremeModal]);

  const zones = [
    {
      name: "Gisors",
      description: "Notre point central d'intervention",
      properties: "Maisons et terrains",
      department: "27 - Eure",
      image: "/normandie.jpg",
    },
    {
      name: "Eure (27)",
      description: "Communes autour de Gisors",
      properties: "Résidentiel et rural",
      department: "Zone principale",
      image: "/normandie.jpg",
    },
    {
      name: "Val-d'Oise (95)",
      description: "Ouest de l'Île-de-France",
      properties: "Maisons et pavillons",
      department: "Communes limitrophes",
      image: "/normandie.jpg",
    },
    {
      name: "Oise (60)",
      description: "Secteur sud-ouest",
      properties: "Opportunités variées",
      department: "Communes limitrophes",
      image: "/normandie.jpg",
    },
    {
      name: "Seine-Maritime (76)",
      description: "Communes en continuité directe",
      properties: "Secteur rural préservé",
      department: "Zone limitrophe",
      image: "/normandie.jpg",
    },
    {
      name: "Vexin",
      description: "Territoire d'exception",
      properties: "Charme et authenticité",
      department: "Région naturelle",
      image: "/normandie.jpg",
    },
  ];

  return (
    <>
      {/* Header avec parallaxe */}
      <section ref={headerRef} className="relative min-h-screen overflow-hidden pt-32">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/normandie.jpg"
            alt="Biens à vendre"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3771]/80 via-[#0d6c8a]/60 to-[#06465c]/85" />
        </motion.div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white font-semibold text-sm mb-6 border border-white/20">
                {allProperties.length} bien{allProperties.length > 1 ? "s" : ""} disponible{allProperties.length > 1 ? "s" : ""} • Secteur Gisors
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
                Nos biens
                <br />
                <span className="bg-gradient-to-r from-[#2998a6] via-[#0d6c8a] to-[#2998a6] bg-clip-text text-transparent">
                  à vendre
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
                Découvrez notre sélection de propriétés sur le secteur de Gisors et ses environs
              </p>

              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  href="#biens"
                  variant="accent"
                  className="text-lg px-10 py-5 shadow-2xl hover:shadow-accent-500/50"
                >
                  Voir les annonces
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm font-medium">Scroll</span>
            <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Section Annonces */}
      <section id="biens" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0d6c8a] font-semibold text-sm uppercase tracking-wide mb-4 block">
              Notre sélection
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Biens <span className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] bg-clip-text text-transparent">disponibles</span>
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maisons de charme, appartements modernes et terrains exceptionnels sur le secteur de Gisors
            </p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              onClick={() => setShowBaremeModal(true)}
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#0d6c8a] hover:text-[#1e3771] font-semibold transition-colors group"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Voir notre barème d'honoraires
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Barre de filtres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* Filtres par type - toujours visible */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedType === type.value
                      ? "bg-[#1e3771] text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#2998a6] hover:text-[#0d6c8a]"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                  </svg>
                  {type.label}
                </button>
              ))}
      </div>

            {/* Filtres avancés et tri */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Bouton filtres avancés (mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 text-gray-700 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtres
                {activeFiltersCount > 0 && (
                  <span className="bg-[#2998a6] text-white text-xs px-2 py-0.5 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Filtres desktop / mobile expanded */}
              <div className={`${showFilters ? "flex" : "hidden"} sm:flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center`}>
                {/* Filtre prix */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value as PriceRange)}
                  className="px-5 py-3 bg-white rounded-xl border border-gray-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#2998a6] focus:border-transparent cursor-pointer"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>

                {/* Tri */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-5 py-3 bg-white rounded-xl border border-gray-200 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#2998a6] focus:border-transparent cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* Bouton reset */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 px-5 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                    Réinitialiser
                  </button>
                )}
              </div>
            </div>

            {/* Compteur de résultats */}
            <div className="text-center mt-6 text-gray-500">
              <span className="font-semibold text-[#1e3771]">{properties.length}</span> bien{properties.length > 1 ? "s" : ""} trouvé{properties.length > 1 ? "s" : ""}
              {activeFiltersCount > 0 && (
                <span> avec les filtres appliqués</span>
              )}
            </div>
          </motion.div>

          {properties.length > 0 ? (
            <>
              {/* Grille des annonces */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {properties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </div>

              {/* CTA Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1e3771]/5 via-[#2998a6]/10 to-[#2998a6]/15 rounded-3xl p-10 text-center border border-[#2998a6]/20"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Vous ne trouvez pas votre bonheur ?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Nous avons accès à des biens en avant-première et pouvons vous accompagner 
                  dans votre recherche personnalisée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="accent" className="text-lg px-8 py-4">
                    Contactez-nous
                  </Button>
                  <Button href="/nos-services" variant="outline-dark" className="text-lg px-8 py-4">
                    Nos services
                  </Button>
                </div>
              </motion.div>
            </>
          ) : (
            /* Message si aucun résultat */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-2xl mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Aucun bien ne correspond à vos critères
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Essayez de modifier vos filtres ou contactez-nous pour une recherche personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3771] text-white font-semibold rounded-xl hover:bg-[#0d6c8a] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Réinitialiser les filtres
                </button>
                <Button href="/contact" variant="outline-dark" className="px-6 py-3">
                  Nous contacter
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section Services Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e3771]/5 via-[#2998a6]/10 to-[#2998a6]/15 rounded-3xl p-10 lg:p-14 shadow-xl border border-[#2998a6]/20"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos services pour vous accompagner
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: "Accompagnement personnalisé",
                  description: "Un suivi sur-mesure adapté à votre projet et vos objectifs",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Estimation gratuite",
                  description: "Analyse précise de votre bien sous 48h",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Rénovation énergétique",
                  description: "Partenariat ENRLUX avec aides de l'État jusqu'à 70%",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Expertise locale",
                  description: "Plus de 20 ans d'expérience sur le marché local",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#2998a6]/20 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1e3771] to-[#2998a6] text-white rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="accent" className="text-lg px-10 py-4">
                Demander un accompagnement
              </Button>
              <Button href="/nos-services" variant="outline-dark" className="text-lg px-10 py-4">
                Découvrir nos services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos zones d'intervention */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0d6c8a] font-semibold text-sm uppercase tracking-wide mb-4 block">
              Notre territoire
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos secteurs <span className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] bg-clip-text text-transparent">d'intervention</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un secteur géographique cohérent à la jonction de 4 départements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={zone.image}
                      alt={zone.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3771]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{zone.name}</h3>
                      <span className="text-white/80 text-sm">{zone.department}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-3">{zone.description}</p>
                    <div className="flex items-center gap-2 text-[#0d6c8a] font-semibold text-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{zone.properties}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Zone d'intervention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-[#1e3771]/5 to-[#2998a6]/10 rounded-2xl p-8 border border-[#2998a6]/20"
          >
            <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Mon activité est volontairement concentrée autour de <strong className="text-[#0d6c8a]">Gisors</strong> et des départements voisins 
              (27, 95, 60 et communes limitrophes du 76), afin de garantir des interventions efficaces et des délais maîtrisés.
            </p>
            <div className="text-center mt-6">
              <Button href="/contact" variant="outline-dark">
                Contactez-nous pour votre projet
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section vous voulez vendre */}
      <section className="relative py-32 bg-gradient-to-br from-[#1e3771] via-[#0d6c8a] to-[#06465c] overflow-hidden">
        {/* Bulles décoratives */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2998a6] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0c233c] rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#2998a6]/50 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/maison-energie.png"
                  alt="Vendre votre bien"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Contenu */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Vous souhaitez vendre ?
          </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Confiez-nous la vente de votre propriété et bénéficiez
                de notre accompagnement personnalisé, notre réseau international eXp et nos
                solutions de rénovation énergétique.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Accompagnement personnalisé à chaque étape",
                  "Estimation gratuite sous 48h",
                  "Valorisation de votre bien",
                  "Diffusion sur 50+ portails",
                  "Réseau international de 89 000 agents",
                  "Suivi jusqu'à la signature",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#2998a6] to-[#0d6c8a] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  variant="accent"
                  className="text-lg px-10 py-5 shadow-2xl hover:shadow-accent-500/50"
                >
                  Estimation gratuite
                </Button>
                <Button
                  href="/nos-services"
                  variant="outline"
                  className="text-lg px-10 py-5"
                >
                  Nos services
          </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modale Barème d'honoraires */}
      <AnimatePresence>
        {showBaremeModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={() => setShowBaremeModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-[#1e3771] to-[#2998a6] text-white px-6 sm:px-8 py-6 rounded-t-3xl flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Barème d'honoraires</h3>
                    <p className="text-white/90 text-sm">Nos tarifs transparents</p>
                  </div>
                  <button
                    onClick={() => setShowBaremeModal(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Info importantes */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-blue-900 leading-relaxed">
                      Ces taux s'entendent hors frais de rédaction d'actes. Nos tarifs sont rédigés toutes taxes comprises au taux de TVA en vigueur inclus.
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      En dehors des forfaits, il conviendra d'appliquer le pourcentage correspondant à la tranche du prix de vente.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Nos honoraires sont à la charge du vendeur</strong> sauf convention contraire précisée dans le mandat.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Ils comprennent les prestations de visite, de négociation et de constitution du dossier de vente.
                    </p>
                  </div>

                  {/* Tableau des tarifs */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] text-white">
                          <th className="px-4 py-3 text-left rounded-tl-xl font-bold">Prix de vente</th>
                          <th className="px-4 py-3 text-left rounded-tr-xl font-bold">Honoraires TTC*</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 font-medium text-gray-900">de 0 à 100 000 €</td>
                          <td className="px-4 py-4 text-gray-700">10 000 €</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 font-medium text-gray-900">de 100 001 à 200 000 €</td>
                          <td className="px-4 py-4 text-gray-700">9 %</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 font-medium text-gray-900">de 200 001 à 300 000 €</td>
                          <td className="px-4 py-4 text-gray-700">8 %</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 font-medium text-gray-900">de 300 001 € à 400 000 €</td>
                          <td className="px-4 py-4 text-gray-700">7 %</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-4 font-medium text-gray-900">Supérieur à 400 000 €</td>
                          <td className="px-4 py-4 text-gray-700">6 %</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-gray-500 italic mt-4">
                    * Honoraires maximum et cumulables par tranche
                  </p>

                  {/* Note finale */}
                  <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Il est précisé que dans le cadre d'une délégation de mandat consentie par un autre professionnel de l'immobilier 
                      (agence, promoteur, etc.), le barème applicable reste celui de l'agence titulaire du mandat.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3771] to-[#2998a6] text-white font-semibold rounded-xl hover:from-[#0c233c] hover:to-[#0d6c8a] transition-all shadow-lg hover:shadow-xl"
                    >
                      Demander une estimation
                    </a>
                    <button
                      onClick={() => setShowBaremeModal(false)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#2998a6] hover:text-[#0d6c8a] transition-all"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
