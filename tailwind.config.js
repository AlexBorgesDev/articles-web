module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#101014',
        primary: '#374F8F',
        surface: '#16161E',
        'blue-dark': '#2A2B3A',
        'surface-two': '#1A1B26',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', '-apple-system', 'sans-serif'],
    },
  },
  plugins: [],
};
