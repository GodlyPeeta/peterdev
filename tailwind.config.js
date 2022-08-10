/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './routes/**/*.{html,js}',
    './src/react/*.js'
  ],
  theme: {
    colors: {
      "medium-slate-blue": "#8884FF",
      "pink-lace": "#FDE2FF",
      "background": "#0B132B",
      "headers": "#1C2541",
      "text-1": "#A7B1D0",
      "text-2": "#424A66",
      "text-3": "#272C3D",
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
