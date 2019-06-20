const Typography = require('typography');

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 2.0,
  headerFontFamily: ['Lato', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  
})

console.log(typography.toString());
