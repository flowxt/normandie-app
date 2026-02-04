"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/Button";

export default function NosServicesPage() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Estimation immobilière gratuite",
      description: "Bénéficiez d'une analyse approfondie du marché local et d'une estimation précise de votre bien. Notre expertise du marché normand nous permet de vous proposer un prix juste et attractif.",
      features: [
        "Visite sur place personnalisée",
        "Analyse comparative du marché",
        "Rapport détaillé sous 48h",
        "Conseils de valorisation inclus",
      ],
      color: "blue",
      image: "/interieur.png",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rénovation énergétique",
      description: "En partenariat avec ENRLUX France, transformez votre passoire énergétique en atout majeur. Passez de F à C et augmentez la valeur de votre bien jusqu'à 20%.",
      features: [
        "Panneaux solaires & pompes à chaleur",
        "Aides de l'État jusqu'à 70%",
        "ROI garanti sur la vente",
        "Partenaires certifiés",
      ],
      color: "green",
      image: "/maison-solaire.jpg",
      badge: "Partenaire ENRLUX",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Conseil personnalisé",
      description: "Chaque projet est unique. Nous analysons votre situation et vos objectifs pour vous proposer un plan d'action adapté et maximiser vos chances de réussite.",
      features: [
        "Analyse complète de votre bien",
        "Stratégie de vente personnalisée",
        "Conseils en valorisation",
        "Accompagnement sur-mesure",
      ],
      color: "cyan",
      image: "/maison-dpe.jpg",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Diffusion maximale",
      description: "Votre bien mérite une visibilité exceptionnelle. Nous le diffusons sur tous les portails majeurs et notre réseau international eXp.",
      features: [
        "Publication sur 50+ portails",
        "Réseau international eXp (89 000 agents)",
        "Partage avec les collaborateurs du groupe",
        "Base de données qualifiée",
      ],
      color: "orange",
      image: "/normandie.jpg",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Accompagnement juridique",
      description: "Toutes les démarches administratives sont prises en charge de A à Z. Vous n'avez qu'à vous concentrer sur votre projet.",
      features: [
        "Constitution du dossier de vente",
        "Diagnostics obligatoires coordonnés",
        "Suivi des offres et négociations",
        "Accompagnement jusqu'à la signature",
      ],
      color: "indigo",
      image: "/normandie.jpg",
    },
  ];

  const colorSchemes = {
    blue: {
      gradient: "from-[#1e3771] to-[#2998a6]",
      light: "from-[#1e3771]/5 to-[#2998a6]/10",
      text: "text-[#0d6c8a]",
      border: "border-[#2998a6]/20",
    },
    green: {
      gradient: "from-[#2998a6] to-[#0d6c8a]",
      light: "from-[#2998a6]/10 to-[#0d6c8a]/10",
      text: "text-[#2998a6]",
      border: "border-[#2998a6]/20",
    },
    cyan: {
      gradient: "from-[#0d6c8a] to-[#2998a6]",
      light: "from-[#2998a6]/10 to-[#0d6c8a]/5",
      text: "text-[#2998a6]",
      border: "border-[#2998a6]/20",
    },
    purple: {
      gradient: "from-[#1e3771] to-[#0d6c8a]",
      light: "from-[#1e3771]/5 to-[#0d6c8a]/10",
      text: "text-[#1e3771]",
      border: "border-[#2998a6]/20",
    },
    orange: {
      gradient: "from-[#2998a6] to-[#0d6c8a]",
      light: "from-[#2998a6]/10 to-[#2998a6]/5",
      text: "text-[#2998a6]",
      border: "border-[#2998a6]/20",
    },
    indigo: {
      gradient: "from-[#0c233c] to-[#1e3771]",
      light: "from-[#1e3771]/5 to-[#0c233c]/10",
      text: "text-[#1e3771]",
      border: "border-[#1e3771]/20",
    },
  };

  return (
    <>
      {/* Header avec parallaxe */}
      <section ref={headerRef} className="relative min-h-[70vh] overflow-hidden pt-32">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/normandie.jpg"
            alt="Services immobiliers"
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
                Notre expertise à votre service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Des services complets
                <br />
                <span className="text-[#5eead4]">pour votre réussite</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                De l&apos;estimation à la signature, nous vous accompagnons à chaque étape
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pb-16">
                <Button
                  href="/contact"
                  variant="accent"
                  className="text-lg px-10 py-4 shadow-2xl hover:shadow-accent-500/50"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                  Estimation gratuite
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Un accompagnement <span className="bg-gradient-to-r from-[#1e3771] to-[#2998a6] bg-clip-text text-transparent">360°</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chez eXp Realty, nous ne nous contentons pas de vendre des biens.
              Nous vous accompagnons dans chaque aspect de votre projet immobilier avec des
              solutions innovantes et personnalisées.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const colors = colorSchemes[service.color as keyof typeof colorSchemes];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`} />
                    </motion.div>

                    {/* Badge si présent */}
                    {service.badge && (
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#2998a6] to-[#0d6c8a] text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 font-bold">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>{service.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.gradient} text-white rounded-2xl mb-6 shadow-lg`}>
                      {service.icon}
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      href="/contact"
                      className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90`}
                    >
                      En savoir plus
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section process */}
      <section className="relative py-32 bg-gradient-to-br from-[#1e3771] via-[#0d6c8a] to-[#06465c] overflow-hidden">
        {/* Bulles décoratives */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2998a6] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0c233c] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Notre méthode en 4 étapes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un processus éprouvé pour maximiser vos chances de réussite
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Estimation",
                description: "Visite gratuite et analyse complète de votre bien",
              },
              {
                number: "02",
                title: "Valorisation",
                description: "Conseils personnalisés pour maximiser la valeur",
              },
              {
                number: "03",
                title: "Diffusion",
                description: "Publication sur tous les portails et notre réseau",
              },
              {
                number: "04",
                title: "Signature",
                description: "Accompagnement jusqu'à la vente chez le notaire",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full hover:bg-white/15 transition-all">
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>

                {/* Connecteur */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Prêt à commencer votre projet ?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès maintenant pour une estimation gratuite et découvrez
              comment nous pouvons valoriser votre bien.
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
                href="tel:+33123456789"
                variant="outline-dark"
                className="w-full sm:w-auto text-lg px-12 py-6"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appelez-nous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
