/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],   
      },
      colors: {
        primary: '#151515', 
        secondary: '#D99904', 
        extra: '#F3F3F3', 
        black : '#1F2937'
      },   
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

