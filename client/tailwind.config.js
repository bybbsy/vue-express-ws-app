/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwind-scrollbar'),
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    scollbar: ['rounded'],
    extend: {
      width: {
        'md': '1440px'
      }
    },
  },
}
