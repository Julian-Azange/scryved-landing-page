/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Habilitar el modo oscuro manual
  theme: {
    extend: {
      colors: {
        // He cambiado 'primary' a un color más oscuro para que funcione
        // mejor como fondo principal de un tema oscuro.
        primary: '#02020A',        // Un gris oscuro casi negro para el fondo
        'primary-dark': '#010105',    // Un tono ligeramente más oscuro
        secondary: '#a3e635',       // Verde lima vibrante (reemplaza al amarillo)
        'secondary-dark': '#84cc16',   // Verde lima más oscuro para hover
        accent: '#7bcb3b',           // Tu verde principal
        'accent-dark': '#68a932',   // Verde principal más oscuro para hover
        devil: '#0c0d0c',           // Tu devil principal
        'devil-dark': '#0c0d0c',   // devil principal más oscuro para hover
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}