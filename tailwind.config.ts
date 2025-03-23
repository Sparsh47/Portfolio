import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00ff99",
        background: "#1c1b22",
        secondary: "#232229"
      }
    },
  },
  plugins: [],
};
export default config;
