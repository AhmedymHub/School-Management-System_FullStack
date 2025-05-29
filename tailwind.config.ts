import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        AmedSky: "#C3EBFA",
        AmedSkyLight: "#EDF9FD",
        AmedPurple: "#CFCEFF",
        AmedPurpleLight: "#F1F0FF",
        AmedYellow: "#FAE27C",
        AmedYellowLight: "#FEFCE8",
        // Add dark mode base colors:
        backgroundLight: "#ffffff",
        backgroundDark: "#1a1a1a",
        textLight: "#000000",
        textDark: "#f0f0f0",
      },
    },
  },
  plugins: [],
};

export default config;
