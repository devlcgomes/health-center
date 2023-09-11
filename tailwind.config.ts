import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1D5B79",
      secondary: "#2EC0BB",
      heading: "#233036",
      body: "#667074",
      light: "#F6F6F6",
      yellowlight: "#FFF3D9",
      greenlight: "#CCF0EE",
      purplelight: "#AEA3E1",
      white: "#FFF",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/hero.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
