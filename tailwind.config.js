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
    extend: {},
  },
  plugins: [],
}
