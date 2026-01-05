"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/Button";

export default function BiensAVendrePage() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

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
            alt="Biens à vendre - Normandie"
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
                Biens disponibles autour de Gisors
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
                Trouvez votre bien
                <br />
                <span className="bg-gradient-to-r from-[#2998a6] via-[#0d6c8a] to-[#2998a6] bg-clip-text text-transparent">
                  dans notre secteur
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
                Maisons de charme, appartements modernes et terrains exceptionnels
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
                  Découvrir nos biens
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

      {/* Section Coming Soon Premium */}
      <section id="biens" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-[#1e3771] via-[#2998a6] to-[#0d6c8a] rounded-3xl shadow-2xl"
              >
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#2998a6] rounded-3xl blur-2xl"
              />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos biens arrivent{" "}
              <span className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] bg-clip-text text-transparent">
                très bientôt
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous préparons actuellement une sélection exceptionnelle de propriétés
              en Normandie. En attendant, profitez de nos services pour vendre votre bien.
            </p>
          </motion.div>

          {/* Avantages en attendant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e3771]/5 via-[#2998a6]/10 to-[#2998a6]/15 rounded-3xl p-10 lg:p-14 shadow-xl border border-[#2998a6]/20 mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              En attendant, profitez de nos services premium
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
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
                  title: "Conseil personnalisé",
                  description: "Un accompagnement adapté à votre projet et vos objectifs",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Estimation gratuite
              </Button>
              <Button href="/nos-services" variant="outline-dark" className="text-lg px-10 py-4">
                Découvrir nos services
              </Button>
            </div>
          </motion.div>

          {/* Notification badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 px-8 py-4 rounded-2xl border-2 border-amber-300 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </motion.div>
              <span className="font-bold">
                Contactez-nous pour être informé en priorité des nouvelles annonces
              </span>
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
                de notre expertise locale, notre réseau international eXp et nos
                solutions de rénovation énergétique.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Estimation gratuite sous 48h",
                  "Conseil personnalisé",
                  "Valorisation de votre bien",
                  "Diffusion sur 50+ portails",
                  "Réseau international de 89 000 agents",
                  "Accompagnement jusqu'à la signature",
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
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
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

    </>
  );
}
