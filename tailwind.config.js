/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {

    extend: {
      colors: {
        blue: {
          DEFAULT: "#00FFFC",
          300: "#D1D5DB",
          500: "#6B7280",
        },
        red: {
          500: "#EF4444",
        },
        gray: {
          300: "#D1D5DB",
          500: "#6B7280",
        },
        themeColor: "#077194",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
      backgroundImage: {
        wCollection: "url('/assets/images/women-collections.webp')",
        mCollection: "url('/assets/images/mens-collections.webp')",
      },
    },
    // No necesitas duplicar colores como `black`, `white`, `yellow`, etc.
  },
  plugins: [],
};
