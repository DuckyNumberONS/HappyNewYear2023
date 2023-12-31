import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        violet: {
          neonPink: "#FF61D8",
        },
        blue: {
          mayaBlue: "#569CFA",
        },
        red: {
          roseBud: "#FFB399",
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-stop": "spin 0s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
