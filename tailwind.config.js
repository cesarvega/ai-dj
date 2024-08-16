/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#0D0D0D",
        gray: {
          DEFAULT: "#252525",
          300: "#D1D5DB", // Agrega esta línea para incluir `gray-300`
          // Puedes incluir más valores de la escala gris aquí si es necesario
        },
        white: "#ffffff",
        themeColor: "#077194",
      },
    },
  },
  plugins: [],
};
