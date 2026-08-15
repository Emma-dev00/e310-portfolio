/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-linear-to-b': {
          '--tw-gradient-position': 'to bottom',
          'background-image': 'linear-gradient(var(--tw-gradient-position), var(--tw-gradient-stops))',
        },
      });
    },
  ],
};
