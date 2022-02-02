module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      'roboto-slab': ['Roboto Slab', 'serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      black: {
        100: '#000',
        200: '#0c0c0c',
        300: '#1c1a1a',
      },
      white: {
        100: '#fff',
      },
      gray: {
        100: '#3f3d3c',
      },
      blue: {
        100: '#173159',
        200: '#264a6a',
        300: '#697a91',
        400: '#182539',
      },
      gold: {
        100: '#b89a73',
      },
      transparent: 'transparent',
    },
    extend: {
      zIndex: {
        '1': 1,
        '5': 5,
        '25': 25,
        '75': 75,
        '100': 100,
      },
      boxShadow: {
        'gold-inset': 'inset 0 0 0 1px #b89a73',
      },
    },
  },
  plugins: [],
}
