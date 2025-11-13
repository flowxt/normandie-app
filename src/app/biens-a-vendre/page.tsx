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

  const villes = [
    {
      name: "Caen",
      description: "Capitale régionale dynamique",
      properties: "Maisons et appartements",
      image: "/normandie.jpg",
    },
    {
      name: "Rouen",
      description: "Ville historique prisée",
      properties: "Centres-villes et périphérie",
      image: "/normandie.jpg",
    },
    {
      name: "Le Havre",
      description: "Port maritime moderne",
      properties: "Bord de mer et centre",
      image: "/normandie.jpg",
    },
    {
      name: "Deauville",
      description: "Station balnéaire de prestige",
      properties: "Villas et appartements",
      image: "/normandie.jpg",
    },
    {
      name: "Cherbourg",
      description: "Cité maritime",
      properties: "Opportunités attractives",
      image: "/normandie.jpg",
    },
    {
      name: "Évreux",
      description: "Ville verte et accessible",
      properties: "Résidentiel calme",
      image: "/normandie.jpg",
    },
  ];

  return (
    <>
      {/* Header avec parallaxe */}
      <section ref={headerRef} className="relative min-h-screen overflow-hidden pt-24 sm:pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/normandie.jpg"
            alt="Biens à vendre - Normandie"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/60 to-blue-900/85" />
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
                Biens disponibles en Normandie
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
                Trouvez votre bien
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                  en Normandie
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
                  className="text-lg px-10 py-5 shadow-2xl hover:shadow-yellow-500/50"
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
                className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl shadow-2xl"
              >
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-blue-400 rounded-3xl blur-2xl"
              />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos biens arrivent{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
            className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-10 lg:p-14 shadow-xl border border-blue-100 mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              En attendant, profitez de nos services premium
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: "📊",
                  title: "Estimation gratuite",
                  description: "Analyse précise de votre bien en Normandie sous 48h",
                },
                {
                  icon: "⚡",
                  title: "DPE offert",
                  description: "Diagnostic énergétique complet pour valoriser votre bien",
                },
                {
                  icon: "🌿",
                  title: "Rénovation énergétique",
                  description: "Partenariat ENRLUX avec aides de l'État jusqu'à 70%",
                },
                {
                  icon: "🏆",
                  title: "Expertise locale",
                  description: "Plus de 10 ans d'expérience sur le marché normand",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
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
                Estimation + DPE Gratuit
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
              Notre territoire
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos secteurs <span className="text-blue-600">d'intervention</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des villes dynamiques et recherchées à travers toute la Normandie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villes.map((ville, index) => (
              <motion.div
                key={ville.name}
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
                      src={ville.image}
                      alt={ville.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{ville.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-3">{ville.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{ville.properties}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ajout d'autres villes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg mb-6">
              Et bien d'autres villes en Normandie : Lisieux, Alençon, Dieppe, Fécamp...
            </p>
            <Button href="/contact" variant="outline-dark">
              Contactez-nous pour votre secteur
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section vous voulez vendre */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Confiez-nous la vente de votre propriété en Normandie et bénéficiez
                de notre expertise locale, notre réseau international eXp et nos
                solutions de rénovation énergétique.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Estimation gratuite sous 48h",
                  "Diagnostic DPE offert",
                  "Valorisation jusqu'à +20%",
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
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
                  className="text-lg px-10 py-5 shadow-2xl hover:shadow-yellow-500/50"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Estimation + DPE Gratuit
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

      {/* CTA Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-10 lg:p-14 text-center text-white shadow-2xl"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Soyez informé en priorité
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Recevez les nouvelles annonces en avant-première et nos conseils
              exclusifs pour réussir votre projet immobilier en Normandie
            </p>
            <Button
              href="/contact"
              variant="accent"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
            >
              Je m'inscris gratuitement
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
