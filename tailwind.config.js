module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'public/**/*.html',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '18px',
      lg: '24px',
      xl: '44px'
    },
    extend: {
      colors: {
        primary: '#1c383c',
        secondary: {
          100: '#ffffff',
          200: '#f4f4f4',
        },
        highlight: {
          100: '#ff9820',
          200: '#e78819',
        },
      },
      fontFamily: {
        serif: ['Spline Sans', 'sans-serif']
      },
      lineHeight: {
        '3': '14.22px',
        '4': '16.59px',
        '5': '21.33px',
        '6': '24px',
        '7': '28.44px',
        '8': '30px',
        '9': '48px',
        '10': '52.14px'
      },
      boxShadow: {
        DEFAULT: '0px 2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
