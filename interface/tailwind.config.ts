/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightGreen: "#E6FEF2",
        darkGreen: "#1A4530",
        redError: "#FF1708",

        eventDropLight: "#E6FEF2",
        eventDropDark: "#1A4530",
      },
      spacing: {
        'headerHeight': "50px"
      }
    },
  },
  plugins: [],
};