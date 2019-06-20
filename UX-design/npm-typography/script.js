const Typography = require('typography');

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.67,
  headerFontFamily: ['Lato', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  // See below for the full list of options.
})

// Output CSS as string.


console.log(typography.toString());
