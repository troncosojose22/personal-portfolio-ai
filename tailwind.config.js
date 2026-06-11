/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '20%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(4px)' },
          '80%': { transform: 'translateY(-2px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        shake: 'shake 0.35s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      colors: {
        accent: {
          DEFAULT: '#22d3ee',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [],
}
