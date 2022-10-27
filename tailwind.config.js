/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif'],
      },
      backgroundImage:{
        orange_border_gradient:"linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%);",
        dark_toggle:"linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%);",
      }
    },
  },
  plugins: [],
}
