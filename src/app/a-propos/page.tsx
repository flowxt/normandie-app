"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/Button";

export default function AProposPage() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      {/* Header avec parallaxe */}
      <section ref={headerRef} className="relative min-h-[70vh] overflow-hidden pt-32">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/normandie.jpg"
            alt="À propos - eXp Realty"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3771]/85 via-[#0d6c8a]/75 to-[#06465c]/90" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white font-semibold text-sm mb-6 border border-white/20">
                Qui sommes-nous
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Une expertise au service
                <br />
                <span className="bg-gradient-to-r from-[#2998a6] via-[#0d6c8a] to-[#2998a6] bg-clip-text text-transparent">
                  de votre projet
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                Proximité, expertise et innovation pour votre réussite immobilière
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0d6c8a] font-semibold text-sm uppercase tracking-wide mb-4 block">
              Notre histoire
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Une expertise au service de votre projet
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Après plus de dix ans passés dans différentes agences immobilières, nous avons
              choisi de créer une structure indépendante, à taille humaine, tout en nous
              appuyant sur la force du réseau <strong className="text-gray-900">eXp France</strong>.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cette alliance nous permet de proposer une approche moderne, digitale et réactive,
              tout en conservant la proximité et la disponibilité d'une agence locale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expert - Vincent Leclerc */}
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
              Notre équipe
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Un professionnel à votre écoute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue pour vous accompagner dans votre projet
            </p>
          </motion.div>

          {/* Card Vincent */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Photo */}
                <div className="md:col-span-2 relative h-80 md:h-auto">
                  <Image
                    src="/vincent.jpg"
                    alt="Vincent Leclerc"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3771]/60 to-transparent" />
                </div>

                {/* Info */}
                <div className="md:col-span-3 p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Vincent Leclerc
                      </h3>
                      <p className="text-lg text-[#0d6c8a] font-semibold mb-1">
                        Conseiller Immobilier
                      </p>
                      <p className="text-sm text-gray-500">
                        451 258 438 RSAC Versailles
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      Fort de plus de 10 ans d'expérience dans l'immobilier, je mets mon
                      expertise au service de vos projets. Basé à <strong className="text-gray-900">Gisors</strong>, j'interviens 
                      en collaboration avec Catherine Di Palma sur un secteur local cohérent.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Notre zone d'intervention couvre l'Eure (27), le Val-d'Oise (95), l'Oise (60) 
                      et certaines communes limitrophes de Seine-Maritime (76).
                    </p>
                  </div>

                  {/* Contact rapide */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+33662155757"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3771] to-[#2998a6] text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Appeler
                    </a>
                    <a
                      href="mailto:contact@ener-immo92.fr"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#2998a6] hover:text-[#0d6c8a] transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Citation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#1e3771]/5 to-[#2998a6]/10 rounded-2xl p-8 lg:p-12 border border-[#2998a6]/20">
              <svg className="w-12 h-12 text-[#0d6c8a] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
                "Ma passion pour l'immobilier et ma connaissance du marché normand me
                permettent de vous offrir un accompagnement personnalisé et des résultats
                concrets. Votre satisfaction est ma priorité."
              </p>
              <p className="text-gray-900 font-bold">— Vincent Leclerc</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#0d6c8a] font-semibold text-sm uppercase tracking-wide mb-4 block">
                Notre engagement
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Notre mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Offrir à chaque client un accompagnement personnalisé à chaque étape de son
                projet : estimation, conseil, mise en valeur, accompagnement technique et
                suivi administratif.
              </p>
              <p className="text-xl text-gray-900 font-semibold">
                Notre objectif : valoriser votre bien et vous aider à vendre dans les
                meilleures conditions.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/maison-energie.png"
                alt="Notre mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accompagnements personnalisés */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0d6c8a] font-semibold text-sm uppercase tracking-wide mb-4 block">
              Nos accompagnements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Un accompagnement{" "}
              <span className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] bg-clip-text text-transparent">
                sur-mesure
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Au-delà de la vente, nous vous accompagnons dans tous vos projets immobiliers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: "Division de terrain",
                description: "Études de faisabilité, démarches administratives et optimisation de votre parcelle pour maximiser sa valeur et créer de nouvelles opportunités.",
                gradient: "from-[#1e3771] to-[#2998a6]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Études techniques",
                description: "Analyse de votre projet, études d'urbanisme, diagnostic de constructibilité et conseil sur les possibilités d'aménagement.",
                gradient: "from-[#2998a6] to-[#0d6c8a]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Aides à la rénovation",
                description: "Accompagnement complet pour vos travaux de rénovation énergétique : panneaux solaires, pompes à chaleur, isolation. Aides de l'État jusqu'à 70%.",
                gradient: "from-[#0d6c8a] to-[#2998a6]",
                badge: "Partenaire ENRLUX",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Valorisation immobilière",
                description: "Conseils pour optimiser la valeur de votre bien avant la vente : home staging, petits travaux, optimisation fiscale.",
                gradient: "from-[#2998a6] to-[#06465c]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Accompagnement administratif",
                description: "Suivi complet de vos démarches : permis de construire, déclarations préalables, constitution de dossiers administratifs.",
                gradient: "from-[#1e3771] to-[#0d6c8a]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Mise en relation professionnels",
                description: "Accès à notre réseau de professionnels qualifiés : architectes, géomètres, artisans, notaires, experts en rénovation.",
                gradient: "from-[#0d6c8a] to-[#1e3771]",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
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
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#1e3771]/5 to-[#2998a6]/10 rounded-2xl p-8 border border-[#2998a6]/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Un projet en tête ?
              </h3>
              <p className="text-gray-600 mb-6">
                Quel que soit votre besoin, nous mettons notre expertise à votre service pour vous accompagner dans la réussite de votre projet.
              </p>
              <Button href="/contact" variant="accent" className="text-lg px-8 py-4">
                Parlons de votre projet
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos valeurs */}
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
              Nos engagements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui guide notre action au quotidien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Transparence",
                description: "Un suivi clair et honnête, sans surprise.",
                gradient: "from-[#1e3771] to-[#2998a6]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Exigence",
                description: "Chaque projet est mené avec rigueur et précision.",
                gradient: "from-[#2998a6] to-[#0d6c8a]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Proximité",
                description: "Une relation directe et humaine avec nos clients.",
                gradient: "from-[#0d6c8a] to-[#2998a6]",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Innovation",
                description: "Des outils digitaux performants pour une expérience fluide et efficace.",
                gradient: "from-[#2998a6] to-[#06465c]",
              },
            ].map((valeur, index) => (
              <motion.div
                key={valeur.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${valeur.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {valeur.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 bg-gradient-to-br from-[#1e3771] via-[#0d6c8a] to-[#06465c] overflow-hidden">
        {/* Bulles décoratives */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2998a6] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0c233c] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès maintenant pour une estimation gratuite et un
              accompagnement personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                variant="accent"
                className="w-full sm:w-auto text-lg px-12 py-6 shadow-2xl hover:shadow-accent-500/50"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Estimation gratuite
              </Button>
              <Button
                href="tel:+33662155757"
                variant="outline"
                className="w-full sm:w-auto text-lg px-12 py-6"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

