import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: "#5E1A48",
        magenta: "#D6127D",
        magentaDeep: "#A80E63",
        blush: "#FDF1F6",
        cream: "#FFFCFA",
        ink: "#2A1E28",
        gold: "#F0C8A0",
      },
      fontFamily: {
        display: ["Georgia", "Iowan Old Style", "Palatino Linotype", "serif"],
        body: [
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        blob: "62% 38% 55% 45% / 45% 55% 45% 55%",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(214,18,125,0.45)" },
          "70%": { boxShadow: "0 0 0 16px rgba(214,18,125,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(214,18,125,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
