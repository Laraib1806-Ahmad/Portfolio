/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8', // Sky blue accent
        secondary: '#22c55e', // Green accent (alternative)
        dark: {
          bg: '#0f172a', // Main dark background
          bgSecondary: '#020617', // Secondary dark background
          text: '#f8fafc', // Main text
          textMuted: '#94a3b8', // Muted text
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #38bdf8, 0 0 10px #38bdf8' },
          '100%': { boxShadow: '0 0 10px #38bdf8, 0 0 20px #38bdf8, 0 0 30px #38bdf8' },
        },
      },
    },
  },
  plugins: [],
}

