/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        iran:['iransans']
      },
      screens:{
        xs:'320px'
      },
      margin:{
        18:'4.5rem'
      },
      boxShadow:{
        xs: '0 0 5px'
      },
    },
  },
  plugins: [],
}
