/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        'rose-white': 'hsl(330, 100%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Eggshell': 'hsl(30, 54%, 90%)',
        'Light-Grey': 'hsl(30, 18%, 87%)',
        'Wenge-Brown': 'hsl(30, 10%, 34%)',
        'Dark-Charcoal': 'hsl(24, 5%, 18%)',
        'Nutmeg': 'hsl(14, 45%, 36%)',
      },
      fontFamily: {
        'young-serif': ['"Young Serif"', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}