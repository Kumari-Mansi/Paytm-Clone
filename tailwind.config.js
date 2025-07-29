/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        nilla: '#00baf2',
        lightnilla: '#00afe3', 
        bgc: '#f5f7fa',
      },
      screens: {
        'verysmall': { 'max': '399px' },
        'small': { 'max': '520px' },
        'medium': { 'max': '768px' },
        'large': { 'max': '1070px' }, 
      },
    },
  },
  plugins: [],
}
