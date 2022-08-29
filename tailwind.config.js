/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#007EBD",

          "secondary": "#6E0B75",

          "accent": "#F8860D",

          "neutral": "#1F2937",

          "base-100": "#E6E6E6",

          "info": "#67CBA0",

          "success": "#51A800",

          "warning": "#E9E92F",

          "error": "#EA5234",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
