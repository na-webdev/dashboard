/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#app",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": {
          500: "#0F152B",
          400: "#4E49C8",
        },
      },
    },
  },
  plugins: [],
};
