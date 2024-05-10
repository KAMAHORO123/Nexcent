/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          'smallest': '0px', // Wrap screen size value in quotes
        }
      },
    },
    plugins: [
      require('tailwindcss'), // Add tailwindcss plugin
      require('autoprefixer'), // Add autoprefixer plugin
      require('postcss-custom-media')(),
    ],
  }
  