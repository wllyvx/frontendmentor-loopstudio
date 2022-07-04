/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray':'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
    },
    fontFamily: {
      'alata': ['Alata', 'Sans Serif'],
      'josefin': ['Josefin Sans']
    },
    backgroundImage: {
      'header-mobile': "url('/public/images/mobile/image-hero.jpg')",
      'header-desktop': "url('/public/images/desktop/image-hero.jpg')"
    }
    },
  },
  plugins: [],
}
