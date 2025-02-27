/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './routes/**/*.{html,js}',
    './src/react/*.js'
  ],
  theme: {
    colors: {
      "medium-slate-blue": "#7b77f7",
      "pink-lace": "#FDE2FF",
      "background": "#171f36",
      "foreground": "#1f2947",
      "headers": "#1C2541",
      "text-1": "#CCD6F6",
      "text-2": "#A7B1D0",
      "text-3": "#8892B0",
      "copper-penny": "#B76D68"
    },
    fontFamily: {
      sans: [
        'Roboto'
      ],
      serif: [],
      mono: [
        'Roboto Mono'
      ]
    },
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeIn 0.75s ease-in-out',
        pulsate: 'pulsating 2s ease-in-out infinite',
        slideDown: 'slideDown 1s cubic-bezier(0, 0, 0.2, 1)',
        slideUp: 'slideUp 1s cubic-bezier(0, 0, 0.2, 1)'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulsating: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.75 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-1rem)'
          },
          '100%': { 
            transform: 'translateY(0)'
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(1rem)'
          },
          '100%': { 
            transform: 'translateY(0)'
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
