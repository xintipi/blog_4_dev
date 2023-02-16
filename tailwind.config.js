// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/pages/**/*.js',
    './src/pages/**/*.ts',
    './src/layouts/**/*.tsx',
    './src/layouts/**/*.js',
    './src/layouts/**/*.ts',
    './src/components/**/*.tsx',
    './src/components/**/*.js',
    './src/components/**/*.ts',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      bodyBg: '#f5f8f9',
      code: '#f4f4f4',
      bodyColor: '#757575',
      primary: '#a6a9ac',
      secondary: '#212121',
      borderColor: '#eceff2',
      secondBorderColor: '#dee1e6',
      white: '#ffffff',
      bannerHover: 'rgba(0, 0, 0, 0.3)',
      bannerMobileBg: 'rgba(0, 0, 0, 0.15)',
      timeColor: '#f5f8f9',
      blueColor: '#38b7ea',
      redColor: '#ff7473',
      yellowColor: '#ffc952',
      greenColor: '#6dc8bf',
      socialIconsBgColor: '#cccfd3',
      sideSectionTitleBg: '#fafcfc',
      hoverColor: '#f5f8f9',
      title: '#cccfd3',
      portfolioGray: '#f0f0ee',
      portfoliotBlue: '#e4eff7',
      portfolioLigthGray: '#fbfbfb',
    },
    fontFamily: {
      'serif': ['Merriweather', 'serif'],
      'sans':  ['Lato', 'sans-serif'],
      'FA5Brands': ["'Font Awesome 5 Brands'"],
      'icons': ['Pe-icon-7-stroke'],
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      fontSize: {
        '2xl': '1.625rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        'paragraph': ['15px', {
          letterSpacing: '-0.05px',
          lineHeight: '24px',
        }],
        'paragraph-secondary': ['1rem', {
          letterSpacing: '-0.05px',
          lineHeight: '31px',
        }],
        'paragraph-secondary-mobile': ['15px', {
          letterSpacing: '-0.05px',
          lineHeight: '30px',
        }],
        'h2': ['1.5rem', {
          lineHeight: '32px',
        }],
        '15px': '15px',
        '17px': '17px',
        '13px': '13px',
        '24px': '24px',
        '27px': '27px',
        '30px': '30px',
        '36px': '36px',
        '38px': '38px',
        '42px': '42px',
      },
      flex: {
        '2': '0 0 calc(50% - 15px)',
      },
      flexBasis: {
        '27/100': '27%',
        '34/100': '34%',
        '66/100': '66%',
        '73/100': '73%',
      },
      borderRadius: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
      },
      padding: {
        '0.25': '1px',
        '5px': '5px',
        '9px': '9px',
        '4.5': '18px',
        '5.5': '22px',
        '7.5': '30px',
        '8.5': '34px',
        '7px': '7px',
        '19px': '19px',
        '25px': '25px',
        '29px': '29px',
        '45px': '45px',
        '50px': '50px',
        '70px': '70px',
        '75px': '75px',
      },
      spacing: {
        '0.25': '1px',
        '3px': '3px',
        '5px': '5px',
        '7px': '7px',
        '13px': '13px',
        '14px': '14px',
        '3.5': '15px',
        '4.5': '18px',
        '5.5': '22px',
        '6.5': '26px',
        '7.5': '30px',
        '27px': '27px',
        '29px': '29px',
        '34px': '34px',
        '35px': '35px',
        '38px': '38px',
        '42px': '42px',
        '54px': '54px',
        '60px': '60px',
        '75px': '75px',
        '82px': '82px',
        '190px': '190px',
        '200px': '200px',
        '243px': '243px',
        '340px': '340px',
        '488px': '488px',
      },
      maxWidth: {
        '750px': '750px',
      },
      letterSpacing: {
        light: '-0.05px',
      },
      lineHeight: {
        '22px': '22px',
        '23px': '23px',
        '25px': '25px',
        '27px': '27px',
        '30px': '30px',
        '34px': '34px',
        '46px': '46px',
        '62px': '62px',
      },
      boxShadow: {
        'header': '0px 3px 35px rgba(0, 0, 0, 0.04)',
        'block': '0px 0px 8px rgba(0, 0, 0, 0.05)',
        'dropdown': '0px 4px 20px rgb(0 0 0 / 5%)',
        'mobileNav': '0px 0px 25px rgb(0 0 0 / 8%)',
        'arrow': '0px 0px 8px rgb(0 0 0 / 10%)',
      },
      backgroundImage: {
        'portfolio-default': "url('./src/img/webp/portfolio-default@2x.webp')",
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 12px',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '940px',
          },
        }
      })
    }
  ]
}
