/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      white:'#FFF',
      black:'#000',
      blue:'#DDEAFC',
      lblue:"#EEF5FF",
      dblue:'#1A73E8',
      grey:'#94A3B833'
    },
    screens: {
      xsm: '491px',
      sm: '540px',
      md: '768px',
      lg: '990px',
      xl: '1280px',
    },
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
}

