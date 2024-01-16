/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},
    screens: {
      sm:'250px',
      md: '450px',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

