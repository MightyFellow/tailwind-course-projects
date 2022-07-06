const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    'postcss-preset-env', //converts modern-css into something browser can understand
    tailwindcss
  ],
};
