/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overallBack: "#FFFFFF80",
        text: "#000000",
        back: "#BBB6B6",
        logo: "#2BC283",
        titles: "#100D86"
      },
    },
  },
  plugins: [],
}