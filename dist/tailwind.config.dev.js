"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'header-purple': '#030742',
        'secondary-purple': '#DF5BD3'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        'scroll-horizontal': 'scrollX 80s linear infinite'
      },
      keyframes: {
        scrollX: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};