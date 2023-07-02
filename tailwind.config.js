/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2563eb",
        dark: "#172554",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
