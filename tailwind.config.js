module.exports = {
  darkMode: 'class', // Mantén esto
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados aquí si lo deseas
        dark: {
          background: '#1a202c',
          text: '#a0aec0',
        },
        light: {
          background: '#ffffff',
          text: '#2d3748',
        },
      },
    },
  },
  plugins: [require('daisyui'),],
};
