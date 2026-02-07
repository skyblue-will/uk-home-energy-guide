import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      maxWidth: {
        content: "645px",
        wide: "1340px",
      },
      colors: {
        primary: "#1a1a1a",
        accent: "#0073aa",
      },
    },
  },
  plugins: [],
};
export default config;
