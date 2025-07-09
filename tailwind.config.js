// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
  plugins: [require('daisyui')],
};
