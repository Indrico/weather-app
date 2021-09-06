module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './src/Components/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'muli': ['muli', 'sans-serif']
      },
  
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1232px',
        '2xl': '1488px',
        '3xl': '1872px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
