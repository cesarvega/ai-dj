/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
<<<<<<< HEAD
=======
    colors: {
      blue: {
        DEFAULT: "#00FFFC",
        300: "#D1D5DB", // Agrega esta línea para incluir `gray-300`
        // Puedes incluir más valores de la escala gris aquí si es necesario
        
      },
      
      
      black: "#222222",
      white: "#FFFFFF",
      gray: "#F4F4F4",
      yellow: "#00FFFC",
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
>>>>>>> fc01c9e (fix audios sample from card audio books)
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
