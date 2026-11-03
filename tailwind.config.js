/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: {
          DEFAULT: '#121215',
          elevated: '#18181B',
          highlight: '#27272A',
          border: '#27272A',
        },
        primary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          accent: '#A855F7',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        secondary: {
          DEFAULT: '#38BDF8',
          accent: '#60A5FA',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.12) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

