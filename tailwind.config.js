/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        secondary: '#14171a',
        top: '#ffce00',
        header: '#000',
        social: '#ffce00'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        righteous: ['Righteous', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
