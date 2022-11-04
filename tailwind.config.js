/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto"],
        Bold: ["Robotbold"]
      },
    },
  },
  plugins: [],
}
