module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      'caveat': ['Caveat', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      black: {
        100: '#000',
        200: '#212545',
      },
      white: '#fff',
      gray: '#f5f5f5',
      blue: {
        100: '#242d73',
        200: '#3b4594',
        300: '#d2d5ee',
      },
      yellow: {
        100: '#fde034',
        200: '#fdf1cc',
      },
    },
    extend: {
      zIndex: {
        '1': 1,
        '5': 5,
        '25': 25,
        '75': 75,
        '100': 100,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
