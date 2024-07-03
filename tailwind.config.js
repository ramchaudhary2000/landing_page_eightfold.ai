/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      'buuton-color-1': "#69C5AC",
      'button-color-2': "#1AB9CC",
      'button-color-3': "#2D8DC8",
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black' : '#0000',
      'mid-black' : '#626262',
      'hover-button' : "#69C5AC",
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('./src/assets/bg image.png')",
      },
      fontFamily:{
        Roboto:["Roboto", "sans-serif"],
      },
    }
  },
  plugins: [],
}
