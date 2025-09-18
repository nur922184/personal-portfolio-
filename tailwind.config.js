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
        scrollbar: ['rounded']
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin({ nocompatible: true }),
    require('tailwind-scrollbar'),
  ],
}

