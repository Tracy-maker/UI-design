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
