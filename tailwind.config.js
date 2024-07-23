/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    prefix: "tw-",
    theme: {
      extend: {
        colors: {
          'custom-gray': '#eee8e8',
          'customBrown': '#8c3a29',
        },
        
      },
    },
    plugins: [],
  }