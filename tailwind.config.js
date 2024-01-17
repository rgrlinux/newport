/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'primary': ['Roboto',],
      'secondary': ['Saira'],
    },
    extend: {
      backgroundImage:{
        'hero': 'url("../assets/img/background-banner.png")'
      }

    },
  },
  plugins: [],
}

