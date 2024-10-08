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
        "secondary-text-color": "rgb(var(--secondary-text-color))",
        "color-splash": "rgb(var(--color-splash))"
      }
    },
    animation: {
      fadeIn: 'fadeIn 1s ease var(--slidein-delay, 0) forwards',
      dropIn: 'dropIn 300ms ease-out',
      scale: 'scale 1s ease-in-out forwards',
      bounceInFromAbove: 'bounceInAbove ease-out 150ms',
      bounceInFromBelow: 'bounceInBelow ease-out 150ms'
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translate(0px, -5px)'},
        '100%': { opacity: '1', transform: 'translate(0, 0)' }
      },
      dropIn: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' }
      },
      scale: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.2)' }
      },
      bounceInAbove: {
        '0%': { transform: 'translateY(-75%)'},
        '75%': { transform: 'translateY(15%)'},
        '100%': { transform: 'translateY(0)'}
      },
      bounceInBelow: {
        '0%': { transform: 'translateY(75%)' },
        '75%': { transform: 'translateY(-15%)' },
        '100%': { transform: 'translateY(0)' }
      }
    }
  },
  plugins: [],
};
export default config;
