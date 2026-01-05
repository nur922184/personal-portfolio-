/** @type {import('tailwindcss').Config} */

const plugin = require('tailwind-scrollbar');
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["dark", "light", "cupcake"],
    extend: {
      fontFamily: {
        merienda: ['Merienda', 'cursive'],
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        }
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin({ nocompatible: true }),
    require('tailwind-scrollbar'),
  ],
}