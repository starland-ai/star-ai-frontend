const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'md': {'min': '768px'},
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'},
      'sm': {'max' : '500px'},
   
    },
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'base-bg': 'rgb(13, 14, 19)',
        'base-bg-emphasized' : 'rgb(21, 23, 30)',
        'button': 'rgb(35, 39, 51)',
        'left-gradient': '#3F54ED',
        'right-gradient': '#D43BA6',
        'modal-bg': 'rgba(8, 9, 27, .74)'
      },
      maxWidth: {
        'container': '1440px'
      },
      boxShadow: {
        'custom': '0px 2px 12px 0px rgba(24,27,34,0.5)'
      },
      borderRadius: {
        '56': '3.5rem'
      },
      zIndex: {
        '80': '80'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
