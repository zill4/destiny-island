const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired color palette
        primary: {
          ...colors.zinc, // For neutral grays
        },
        accent: {
          ...colors.blue, // Apple's signature blue
        },
        success: {
          ...colors.green,
        },
        warning: {
          ...colors.amber,
        },
        error: {
          ...colors.red,
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        'apple': '10px',
        'apple-sm': '6px',
        'apple-lg': '14px',
      },
      boxShadow: {
        'apple': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'apple-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'apple-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}