/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        oswald: "'Oswald', sans-serif",
        zen: "'Zen Antique', serif",
        lora: "'Lora', serif",
        austin: "'Austin-web', serif",
      },
    },
  },
  plugins: [],
};
