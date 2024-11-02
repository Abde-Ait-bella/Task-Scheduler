/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        nav: '#260701',
        body: '#532C1E',
        card: '#DEDEDE',
      },
      height:{
        height_nav: '3rem',
      },
      fontSize:{
        medium: '1.5rem',
      }
      
    },
  },
  plugins: [],
}

