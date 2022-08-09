/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "872px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
      'black': "#181818",
        'grey': '#6c757d',
        'dark-grey': '#343a40',
        'black': '#181818',
        'gold': '#ae946d',
        'flag-orange': '#ff7a01',
        'flag-blue': '#000080',
        'flag-green': '#138808',
        'border-gray': '#8c8c8c',
    },
    backgroundImage: {
      'image-one': "url('../images/image-1.webp')",
      'image-one-one': "url('../images/image-1-1.webp')",
      "image-two-one": "url('../images/image-2-1.webp')",
      "image-two": "url('../images/image-2.webp')",
    }
  },
  },
  plugins: [],
}
