/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // bannerImage: "url('./assets/resort.jpg')",
        blackOverlay: "linear-gradient(to top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 100%)"
      },
      fontFamily:{
        Playfair: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}