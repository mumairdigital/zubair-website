import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A855F7",
        "primary-dark": "#7C3AED",
        "dark-bg": "#0a0a0a",
        "light-bg": "#FAF9F7",
        "card-dark": "#111111",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "orb-1": "orb-move-1 20s ease-in-out infinite",
        "orb-2": "orb-move-2 25s ease-in-out infinite",
        "orb-3": "orb-move-3 30s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168,85,247,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(168,85,247,0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "orb-move-1": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(30%, -20%) scale(1.1)" },
          "66%": { transform: "translate(-10%, 20%) scale(0.9)" },
        },
        "orb-move-2": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(-20%, 30%) scale(0.9)" },
          "66%": { transform: "translate(20%, -10%) scale(1.1)" },
        },
        "orb-move-3": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
