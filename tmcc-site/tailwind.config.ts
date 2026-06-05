import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#141C2B",
        "navy-mid": "#1E2A3E",
        "navy-deep": "#0C121D",
        gold: "#C8993A",
        "gold-light": "#E2B85A",
        cream: "#FAF6EE",
        "cream-mid": "#F0E8D8",
        ink: "#0D0D0D",
        grey: "#6B7280",
        "brand-border": "#E2DAC8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.22em",
      },
      keyframes: {
        ring: {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        ring: "ring 4s ease-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
