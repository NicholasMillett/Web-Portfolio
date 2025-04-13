import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/domain/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/application/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/infrastructure/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 0.4s ease',
      },
      colors: {
        blue: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        gray: {
          50:  '#f8f9fa',   // near white
          100: '#f1f2f3',   // paper
          200: '#e2e3e5',   // border light
          300: '#cfd1d4',   // subtle inputs
          400: '#adb0b4',   // neutral text
          500: '#8e9196',   // secondary text
          600: '#6e7176',   // subdued labels
          700: '#4f5257',   // heading gray
          800: '#383a3d',   // soft dark surface (complementing #2c2c2e)
          900: '#2c2c2e',   // main dark surface
        },
        brand: {             // Nicholas. Millett brand colors
          start: '#0F172A',  
          end: '#475569',    
          darkStart: '#EEE8E1',
          darkEnd: '#B2B2B2' , 
        },        
        mapPin: {
          light: '#005BC4', // Light mode color
          dark: '#EF4444',  // Dark mode color
        },
        accentBlue: {
          DEFAULT: '#60a5fa', // Tailwind's blue-400 — softer and balanced
          dark: '#3b82f6',     // Tailwind's blue-500 — rich but not harsh
        },        
        warmAccent: '#F59E0B', 
        // ✨ Semantic Tokens
        surface: {
          light: '#ffffff',
          dark: '#212121',
        },
        navbar: {
          light: '#ffffff',
          dark: '#2c2c2e', // softer dark gray (similar to macOS sidebar)
        },
        background: {
          light: '#ffffff',
          dark: '#2c2c2e', // softer dark gray 
        },
        foreground: {
          light: '#0F172A', // stays the same
          dark: '#EEE8E1',  // brighter text color for contrast
        },
        border: {
          dark: '#3a3a3d', // soft border for cards/navbar
        },        
      },
    },
  },
  plugins: [],
};

export default config;
