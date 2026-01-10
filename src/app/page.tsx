"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-32">
        {/* Image de fond avec parallaxe */}
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/normandie.jpg"
            alt="Paysage région Gisors"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Contenu Hero */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge animé */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2998a6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2998a6]"></span>
              </span>
              <span className="text-white font-semibold text-sm tracking-wide">
                eXp Realty • Conseiller immobilier basé à Gisors
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1]"
            >
              Vendez votre bien
              <br />
              <span className="bg-gradient-to-r from-[#2998a6] via-[#0d6c8a] to-[#2998a6] bg-clip-text text-transparent">
                plus vite, plus cher
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 max-w-4xl mx-auto font-light"
            >
              Accompagnement personnalisé • Estimation précise • Conseil sur-mesure
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
            >
              Basé à Gisors, j'interviens sur un secteur local couvrant{" "}
              <strong className="text-white">l'Eure, le Val-d'Oise, l'Oise</strong> et certaines communes limitrophes de Seine-Maritime.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                href="/contact"
                variant="accent"
                className="w-full sm:w-auto text-lg px-10 py-6 shadow-2xl hover:shadow-accent-500/50"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Estimation gratuite
              </Button>
              <Button
                href="#services"
                variant="outline"
                className="w-full sm:w-auto text-lg px-10 py-6"
              >
                Découvrir nos services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: "100%", label: "Clients satisfaits" },
                { number: "20", label: "Ans d'expérience" },
                { number: "24h", label: "Réponse garantie" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Section Rénovation Énergétique avec image maison solaire */}
      <ScrollRevealSection
        image="/maison-solaire.jpg"
        imageAlt="Maison avec panneaux solaires"
        title="Rénovation énergétique"
        subtitle="L'investissement qui valorise votre bien"
        description="Panneaux solaires, pompes à chaleur, isolation... Nos partenaires certifiés vous accompagnent pour transformer votre bien en modèle d'efficacité énergétique. Profitez des aides de l'État jusqu'à 70%."
        features={[
          "Certifié QualiPV & QualiPAC",
          "Aides de l'État jusqu'à 70%",
          "ROI garanti sur la vente",
          "Partenaire ENRLUX France",
        ]}
        ctaText="En savoir plus sur la rénovation"
        ctaHref="https://www.enrlux-france.fr/"
        ctaExternal
        theme="green"
      />

      {/* Section Zone d'intervention */}
      <ScrollRevealSection
        image="/maison-dpe.jpg"
        imageAlt="Maison traditionnelle"
        title="Zone d'intervention"
        subtitle="Un secteur local et cohérent"
        description="Basé à Gisors, j'interviens en collaboration avec Catherine Di Palma sur un périmètre géographique proche, à la jonction de plusieurs départements. Cette implantation locale garantit une connaissance fine du marché et un accompagnement de proximité."
        features={[
          "Eure (27)",
          "Val-d'Oise (95)",
          "Oise (60)",
          "Communes limitrophes de Seine-Maritime (76)",
        ]}
        ctaText="Me contacter"
        ctaHref="/contact"
        imagePosition="left"
        theme="blue"
      />

      {/* Section Services */}
      <section id="services" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#0d6c8a] font-semibold text-sm uppercase tracking-wide mb-4 block">
              Notre expertise
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Un accompagnement <span className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] bg-clip-text text-transparent">complet</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'estimation à la signature, nous vous guidons à chaque étape
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
                title: "Estimation gratuite",
                description:
                  "Analyse du marché local, visite sur place et estimation précise de votre bien.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                ),
                title: "Rénovation énergétique",
                description:
                  "Accompagnement complet avec nos partenaires certifiés pour maximiser la valeur de votre bien.",
                badge: "Partenaire ENRLUX",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Conseil personnalisé",
                description:
                  "Un accompagnement sur-mesure adapté à votre projet et vos objectifs.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Réseau eXp",
                description:
                  "Accès à un réseau international de 89 000 agents pour maximiser la visibilité de votre bien.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                ),
                title: "Diffusion maximale",
                description:
                  "Votre bien diffusé sur tous les portails majeurs et notre réseau international eXp.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Suivi personnalisé",
                description:
                  "Un agent dédié disponible 7j/7 pour répondre à vos questions et suivre votre projet.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  {service.badge && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{service.badge}</span>
                    </div>
                  )}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e3771] to-[#2998a6] text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
              </div>
            </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#1e3771] via-[#0d6c8a] to-[#06465c]">
        {/* Bulles décoratives floues pour plus de profondeur */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2998a6] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0c233c] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#2998a6]/50 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prêt à valoriser votre bien ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Obtenez une estimation gratuite et un conseil personnalisé. Découvrez
              comment valoriser votre propriété avec un accompagnement de proximité.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                variant="accent"
                className="w-full sm:w-auto text-lg px-12 py-6 shadow-2xl hover:shadow-accent-500/50"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Estimation gratuite
              </Button>
              <Button
                href="/nos-services"
                variant="outline"
                className="w-full sm:w-auto text-lg px-12 py-6"
              >
                Découvrir tous nos services
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center text-gray-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#2998a6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Réseau eXp France</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#2998a6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Partenaire ENRLUX France</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#2998a6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Aides de l&apos;État jusqu&apos;à 70%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Composant réutilisable pour les sections avec scroll reveal
function ScrollRevealSection({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaHref,
  ctaExternal = false,
  imagePosition = "right",
  theme = "blue",
}: {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  imagePosition?: "left" | "right";
  theme?: "blue" | "green";
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const themeColors = {
    blue: {
      gradient: "from-[#1e3771] to-[#2998a6]",
      text: "text-[#0d6c8a]",
      bg: "bg-[#2998a6]/10",
    },
    green: {
      gradient: "from-[#2998a6] to-[#0d6c8a]",
      text: "text-[#2998a6]",
      bg: "bg-[#2998a6]/10",
    },
  };

  const colors = themeColors[theme];

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image avec animation */}
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity }}
            className={`relative ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`} />
            </div>
            {/* Éléments décoratifs */}
            <div
              className={`absolute -z-10 top-10 ${
                imagePosition === "left" ? "right-10" : "left-10"
              } w-72 h-72 bg-gradient-to-br ${colors.gradient} opacity-20 rounded-full blur-3xl`}
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={imagePosition === "left" ? "lg:order-2" : "lg:order-1"}
          >
            <span
              className={`${colors.text} font-semibold text-sm uppercase tracking-wide mb-4 block`}
            >
              {title}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {subtitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            {ctaExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105`}
              >
                {ctaText}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <Button
                href={ctaHref}
                className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90`}
              >
                {ctaText}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
