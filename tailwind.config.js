/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "right":{
          "0%":{width:"0%"},
          "25%":{width:"25%"},
          "50%":{width:"50%"},
          "100%":{widht:"100%"}

        }
      },
      animation:{
         "right":"right 4s ease-in-out"
      },
      fontFamily:{
        "inter":['Inter', 'sans-serif']
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}