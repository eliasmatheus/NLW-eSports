/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {},
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(to right, #9572fc, #0099ff, #00b5ff, #00cafa, #00d9e0, #17dfcb, #4be3b1, #77e592, #95e380, #b0df70, #c9db64, #e1d55d);',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      },
    },
  },
  plugins: [],
};
