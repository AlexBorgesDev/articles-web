module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#101014",
        surface: "#16161E",
        "surface-two": "#1A1B26",
      },
    },
    fontFamily: {
      sans: ["Roboto", "-apple-system", "sans-serif"],
    },
  },
  plugins: [],
};
