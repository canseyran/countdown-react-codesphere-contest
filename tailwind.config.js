/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offBlack: '#0F1219',
        darkGrey: '#1E212B',
      },
    },
  },
  plugins: [],
};
