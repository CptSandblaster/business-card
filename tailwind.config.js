module.exports = {
  content: [
    'docs/*.html'
    ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Inconsolata',

    },
    extend: {
      colors: {
        'primary': '#2F4550',
        'text': '#5CC8FF',
        'background': '#031927',
        'light': '#5CC8FF',
        'accent': '#AF9164'
      },
      fontFamily: {
        'title': 'Pacifico'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};