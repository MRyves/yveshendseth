/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        // light color palette: https://colorhunt.co/palette/fefbf6a6d1e67f52833d3c42
        // dark color palette: https://colorhunt.co/palette/151515301b3f3c415cb4a5a5
        primary: {
          light: '#3D3C42',
          dark: '#B4A5A5',
        },
        secondary: {
          light: '#A6D1E6',
          dark: '#3C415C'
        },
        accent: {
          light: '#7F5283',
          dark: '#301B3F'
        }
      },
      fontFamily: {
        rokkitt: ['"Rokkitt"'],
      }
    },
  },
  plugins: [],
}

