/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    require('tailwind-scrollbar'),
],
safelist: [{
  pattern: /(bg|text|border)-s2cond(Purple|Pink|Orange|Yellow|Lime|Mint|Test|Test2)/
}

]
}
