/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo2"],
      },
      colors: {
        primary: "#112949",
        title: "#3CC3F2",
        contact: "#EA7B2C",
      },
    },
  },
  plugins: [],
};
