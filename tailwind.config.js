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
    },
    extend: {
      spacing: {
        100: '25rem',
        108: '27rem',
        116: '29rem',
        132: '33rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
        240: '60rem',
        280: '70rem',
        320: '80rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
