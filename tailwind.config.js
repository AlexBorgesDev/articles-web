module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#101014',
        accent: '#449DAB',
        primary: '#374F8F',
        surface: '#16161E',
        'blue-dark': '#2A2B3A',
        'surface-two': '#1A1B26',
      },
      fontSize: {
        '4.5xl': ['2.5rem', { lineHeight: '3.438rem' }],
      },
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', '-apple-system', 'sans-serif'],
    },
  },
  plugins: [],
};
