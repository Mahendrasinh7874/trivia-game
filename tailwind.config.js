/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        green: {
          500: "#24AE7C",
          600: "#0D2A1F",
        }, blue: {
          500: "#79B5EC",
          600: "#152432",
        },
      }
    },
  },
  plugins: [],
};
