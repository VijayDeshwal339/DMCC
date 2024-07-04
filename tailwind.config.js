/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppin': ['Poppins'],
      'Inter':['Inter'],
      'Arial':['Arimo'], 
    },
    extend: {
      screens: {
        'xs':'0px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      lineHeight: {
        '22.69':'22.69px',
        '24': '24px',
        '26': '26px',
        '27': '27px',
        '28': '28px',
        '32': '32px',
        '35': '35px',
        '39': '39px',
        '40': '40px',
        '48': '48px',
        '50': '50px',
        '66': '66px',
      },
      fontSize: {
        '14':'14px',
        '15': '15px',
        '15.13':'15.13px',
        '15.25': '15.25px',
        '16': '16px',
        '17.16':'17.16px',
        '18': '18px',
        '18.75': '18.75px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '30': '30px',
        '35': '35px',
        '37.34': '37.34px',
        '55': '55px'
      }
    },
  },
  plugins: [],
}