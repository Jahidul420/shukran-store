/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        oswald: "'Oswald', sans-serif",
        zen: "'Zen Antique', serif",
        lora: "'Lora', serif",
      },
    },
  },
  plugins: [],
};
