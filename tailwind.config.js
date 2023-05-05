/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'Off-white': 'hsl(36, 100%, 99%)',
        'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'Very-dark-blue': 'hsl(240, 100%, 5%)',
        'Grayish-blue': 'hsl(233, 8%, 79%)'
    }
    },
    fonts: {
      'inter': ['inter']
    }
  },
  plugins: [],
}

