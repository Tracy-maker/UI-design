/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1e3c72",
          DEFAULT: "#2a5298",
          dark: "#1a2a6c",
        },
        secondary: "#F6EBD9",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-primary-gradient": {
          background: "linear-gradient(90deg, #89CFF0, #6495ED, #1E90FF)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};