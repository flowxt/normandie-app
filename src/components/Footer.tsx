import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navigation = {
    services: [
      { name: "Estimation immobilière", href: "/nos-services" },
      { name: "Rénovation énergétique", href: "/nos-services" },
      { name: "Conseil personnalisé", href: "/nos-services" },
    ],
    pages: [
      { name: "Notre histoire", href: "/a-propos" },
      { name: "Biens à vendre", href: "/biens-a-vendre" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0c233c] via-[#1e3771] to-[#0c233c] overflow-hidden">
      {/* Bulles décoratives */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2998a6] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0d6c8a] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/eXp_Logo_Black.png"
                alt="eXp France"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <h3 className="text-lg font-bold text-white">Vincent Leclerc - eXp Realty</h3>
            <p className="text-sm text-gray-300/80 leading-relaxed">
              Conseiller immobilier basé à Gisors, intervenant sur l&apos;Eure, le Val-d&apos;Oise, 
              l&apos;Oise et les communes limitrophes de Seine-Maritime.
            </p>
            <div className="pt-2">
              <a
                href="https://www.expfrance.fr/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold group"
              >
                <span>Découvrir eXp France</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Nos accompagnements */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Nos Accompagnements</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300/80 hover:text-white transition-colors flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-[#2998a6] group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Partenaire ENRLUX */}
            <div className="mt-6 pt-6 border-t border-[#2998a6]/20">
              <h4 className="text-sm font-semibold text-white mb-3">Notre partenaire</h4>
              <a
                href="https://www.enrlux-france.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2998a6] hover:text-[#2998a6]/80 transition-colors text-sm font-semibold group"
              >
                <svg
                  className="w-4 h-4 text-[#2998a6]"
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
                <span>ENRLUX France</span>
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
              <p className="text-xs text-gray-400 mt-2">Rénovation énergétique</p>
            </div>

            {/* Autre réalisation */}
            <div className="mt-4 pt-4 border-t border-[#2998a6]/20">
              <h4 className="text-sm font-semibold text-white mb-3">Découvrir aussi</h4>
              <a
                href="https://www.ener-immo92.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold group"
              >
                <svg
                  className="w-4 h-4"
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
                <span>eXp Mont-Valérien (92)</span>
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
              <p className="text-xs text-gray-400 mt-2">Notre équipe dans les Hauts-de-Seine</p>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Liens rapides</h3>
            <ul className="space-y-3">
              {navigation.pages.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300/80 hover:text-white transition-colors flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-[#2998a6] group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-[#2998a6] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-300/80">
                    Basé à Gisors (27)
                    <br />
                    Eure, Val-d&apos;Oise, Oise, Seine-Maritime
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-[#2998a6] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@exp-gisors.fr"
                  className="text-sm text-gray-300/80 hover:text-white transition-colors"
                >
                  contact@exp-gisors.fr
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-[#2998a6] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+33662155757"
                  className="text-sm text-gray-300/80 hover:text-white transition-colors"
                >
                  06 62 15 57 57
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="mt-12 border-t border-[#2998a6]/20 pt-8">
          {/* Zone d'expertise */}
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-[#2998a6] mb-3">
              Zone d&apos;intervention - Basé à Gisors
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Gisors",
                "Eure (27)",
                "Val-d'Oise (95)",
                "Oise (60)",
                "Seine-Maritime (76)",
              ].map((zone) => (
                <span
                  key={zone}
                  className="inline-block px-4 py-2 bg-[#2998a6]/10 text-gray-300 text-xs font-medium rounded-full border border-[#2998a6]/30 hover:border-[#2998a6] hover:text-white hover:bg-[#2998a6]/20 transition-all cursor-default"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright et mentions */}
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-400">
              Vincent Leclerc - Conseiller immobilier indépendant eXp Realty
            </p>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Vincent Leclerc - eXp Realty. Tous droits
              réservés.
            </p>
            <p className="text-xs text-gray-400 mt-3">
              Site créé par{" "}
              <a
                href="https://www.atypikcode.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2998a6] hover:text-[#2998a6]/80 font-semibold transition-colors"
              >
                atypikCode
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
