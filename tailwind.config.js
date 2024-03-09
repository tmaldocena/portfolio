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
          },
          loading: {
            '0%': {
              width: '0;'
            },
            '50%': {
              width: '50%;'
            },
            '100%': {
              width: '100%;'
            }
          },
          fadingOut: {
            '0%': {
              opacity: '1;'
            },
            '100%': {
              opacity: '0;',
              display: 'none;'
            }
          },
          fadingIn: {
            '0%': {
              opacity: '0;'
            },
            '100%': {
              opacity: '1;'
            }
          },
          goUp: {
            '0%': {
              bottom: '0px;',
              opacity: '1;'
            },
            '15%': {
              bottom: '-2em;'
            },
            '50%': {
              opacity: '0;'
            },
            '100%': {
                bottom: '50vh;'
            }
          }
      },
      animation:{
        float: 'floating 6s ease-in-out infinite',
        load: 'loading 800ms linear',
        fadeOut: 'fadingOut 1000ms ease-out;',
        fadeIn: 'fadingIn 500ms ease-in;',
        goingUp: 'goUp 900ms ease-out;'
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

