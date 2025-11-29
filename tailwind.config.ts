import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        // Palette de la charte graphique - Couleurs exactes
        brand: {
          'nuit': '#1e3771',        // Bleu nuit principal
          'ocean': '#0d6c8a',       // Bleu-vert moyen
          'petrole': '#06465c',     // Bleu pétrole sombre
          'turquoise': '#2998a6',   // Turquoise lumineux
          'deep': '#0c233c',        // Bleu très foncé
        },
      },
    },
  },
  plugins: [],
};

export default config;

