/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3x1': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
      
    },
  },
  plugins: [],
}

