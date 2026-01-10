"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Détecter le scroll pour l'effet glassmorphism
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos services", href: "/nos-services" },
    { name: "Biens à vendre", href: "/biens-a-vendre" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full top-0 z-[100] px-4 py-4"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(255, 255, 255, 0.9)",
          boxShadow: scrolled
            ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
            : "0 4px 20px -4px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ duration: 0.3 }}
        className={`backdrop-blur-xl rounded-2xl border ${
          scrolled ? "border-gray-200/50" : "border-gray-200/30"
        }`}
        style={{
          WebkitBackdropFilter: "blur(20px)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">eXp Realty</span>
            <Image
              src="/eXp_Logo_Black.png"
              alt="eXp France"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-[#2998a6] transition-colors"
            onClick={() => {
              console.log("Menu button clicked, current state:", mobileMenuOpen);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Ouvrir le menu"
          >
            <span className="sr-only">Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === item.href
                  ? "text-[#0d6c8a]"
                  : "text-gray-900 hover:text-[#2998a6]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-[#1e3771] to-[#2998a6] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-[#0c233c] hover:to-[#0d6c8a] transition-all"
          >
            Nous contacter
          </Link>
        </div>
        </nav>
      </motion.div>

      {/* Mobile menu avec animations - version glassmorphism */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] bg-gradient-to-b from-gray-900/90 to-gray-900/70 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu panel glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-24 left-4 right-4 z-[95] mx-auto max-w-md"
            >
              <div
                className="overflow-hidden rounded-3xl bg-white/90 backdrop-blur-2xl shadow-2xl border border-white/20"
                style={{
                  WebkitBackdropFilter: "blur(40px)",
                  backdropFilter: "blur(40px)",
                }}
              >
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Menu
                    </span>
                    <button
                      type="button"
                      className="rounded-full p-2 text-gray-500 hover:text-[#2998a6] hover:bg-gray-100/50 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Fermer le menu"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                            pathname === item.href
                              ? "bg-gradient-to-r from-[#1e3771] to-[#2998a6] text-white shadow-lg shadow-[#2998a6]/30"
                              : "text-gray-700 hover:bg-gray-100/70 hover:text-[#2998a6]"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                              pathname === item.href ? "text-white" : "text-gray-400"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-gray-200/50"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#1e3771] to-[#2998a6] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#2998a6]/30 hover:shadow-xl hover:shadow-[#2998a6]/40 transition-all hover:scale-[1.02]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Nous contacter</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

