'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-24">
      {/* Dégradé de fond inspiré de la charte */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3771] via-[#0d6c8a] to-[#06465c]" />
      
      {/* Bulles décoratives floues pour plus de profondeur */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2998a6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0c233c] rounded-full blur-3xl" />
      </div>

      {/* Contenu */}
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Titre */}
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Prêt à valoriser votre bien ?
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            className="mt-4 text-lg leading-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Bénéficiez de notre expertise pour maximiser la valeur de votre propriété et réussir votre vente.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Bouton primaire */}
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-2xl hover:shadow-amber-500/50 border-0 transition-all duration-300 hover:scale-105"
            >
              Démarrer mon projet
            </a>
            
            {/* Bouton secondaire */}
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#2998a6] backdrop-blur-sm transition-all duration-300"
            >
              Estimation gratuite
            </a>
          </motion.div>

          {/* Indicateurs de confiance */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Experts locaux */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2998a6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Experts locaux</span>
            </div>

            {/* Accompagnement sur mesure */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2998a6]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Accompagnement sur mesure</span>
            </div>

            {/* Réponse rapide */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2998a6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Réponse rapide</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
