/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#00FFFC",
        300: "#D1D5DB", // Agrega esta línea para incluir `gray-300`
        // Puedes incluir más valores de la escala gris aquí si es necesario
        500: "#6B7280",
      },
      
      
      black: "#222222",
      white: "#FFFFFF",
      gray: "#F4F4F4",
      yellow: "#F1FF72",
      bgColor: "#0D0D0D",
      gray: {
        DEFAULT: "#252525",
        300: "#D1D5DB", // Agrega esta línea para incluir `gray-300`
        // Puedes incluir más valores de la escala gris aquí si es necesario
        500: "#6B7280",
      },
      white: "#FFFFFF",
      themeColor: "#077194",
      
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
      backgroundImage: {
        wCollection: "url('/assets/images/women-collections.webp')",
        mCollection: "url('/assets/images/mens-collections.webp')",
      },
    },
  },
  plugins: [],
};
