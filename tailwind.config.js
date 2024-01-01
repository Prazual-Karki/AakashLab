/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '850px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1536px',
      '4xl': '2000px',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      PlayFair: ['Playfair Display SC', 'serif'],
    },
  },
  plugins: [],
}

