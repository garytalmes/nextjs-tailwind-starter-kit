/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'logo': [ 'ui-sans-serif' ],
      'headline': [ 'Tahoma', 'ui-sans-serif' ],
      'body': [ 'Verdana', 'ui-sans-serif' ],
      'sans': [ 'ui-sans-serif' ],
      'serif': [ 'DM Serif Text', 'ui-serif' ],
      'mono': [ 'courier', 'ui-monospace' ]
    },
    screens: {
      xs: '360px',
      sm: '520px',
      md: '830px',
      lg: '1150px',
      xl: '1380px',
      '2xl': '1600px',
      '3xl': '1920px',
      '4xl': '2200px'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
