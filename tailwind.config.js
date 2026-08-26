/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Arial", "Helvetica", "sans-serif"],
        display: ["Space Grotesk", "DM Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};