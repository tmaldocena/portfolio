/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
            '0%, 100%': {
              transform: 'translatey(0px);'
            },
            '50%': {
              transform: 'translatey(-20px);'
            }
          }
      },
      animation:{
        float: 'floating 6s ease-in-out infinite'
      },
      fontFamily:{
        climate: ['Climate Crisis', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors:{
        "black": '#101014',
        "white": '#E6E6EB',
        "main": '#EEB902',
        "second": '#2D7DD2'
      },
    }
  },
  plugins: [require("daisyui")],
}

