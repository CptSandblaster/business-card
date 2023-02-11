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
        'text': '#5CC8FF',
        'secondary': '#307193',
        'background': '#031927',
        'highlight': '#A39BA8'
      },
      fontFamily: {
        'title': 'Alegreya Sans SC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};