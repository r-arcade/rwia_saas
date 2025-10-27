import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        dark: {
          background: '#0A0A0A',
          foreground: '#F5F5F5',
          card: '#1C1C1C',
          border: '#2F2F2F',
        },
        light: {
          background: '#FFFFFF',
          foreground: '#0A0A0A',
          card: '#F5F5F5',
          border: '#E5E5E5',
        },
        primary: '#6A82FB',
        secondary: '#FC5C7D',
        accent: '#00F5D4',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'fluid-h1': 'clamp(2rem, 1.25rem + 2.5vw, 3rem)',
        'fluid-h2': 'clamp(1.75rem, 1.1rem + 2vw, 2.5rem)',
        'fluid-h3': 'clamp(1.25rem, 1rem + 1.5vw, 2rem)',
        'fluid-body': 'clamp(1rem, 0.95rem + 0.25vw, 1.1rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.2vw, 0.95rem)',
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, 0.125rem + 0.5vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 0.25rem + 1vw, 1rem)',
        'fluid-3': 'clamp(0.75rem, 0.5rem + 1.5vw, 1.5rem)',
        'fluid-4': 'clamp(1rem, 0.5rem + 2vw, 1.75rem)',
        'fluid-5': 'clamp(1.25rem, 0.75rem + 2.5vw, 2.25rem)',
        'fluid-6': 'clamp(1.5rem, 0.75rem + 3vw, 2.75rem)',
        'fluid-8': 'clamp(1.75rem, 1rem + 3vw, 3rem)',
        'fluid-10': 'clamp(2rem, 1.25rem + 4vw, 4rem)',
        'fluid-12': 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
        'fluid-16': 'clamp(3.5rem, 2rem + 6vw, 6rem)',
        'fluid-20': 'clamp(4.5rem, 2.5rem + 8vw, 8rem)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
