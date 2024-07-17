import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg-color": "rgb(var(--primary-bg-color))",
        "secondary-bg-color": "rgb(var(--secondary-bg-color))",
        "primary-text-color": "rgb(var(--primary-text-color))",
        "secondary-text-color": "rgb(var(--secondary-text-color))"
      }
    }
  },
  plugins: [],
};
export default config;
