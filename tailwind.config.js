/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small devices
        'sm': '640px', // Small devices
        'md': '768px', // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // 2X extra large devices
        '3xl': '1920px', // 3X extra large devices (custom)
      },
      colors: {
        // Adding custom colors
        'custom-primary': '#C00000', // Replace with your color code
        'custom-secondary': '#22255c', // Replace with your color code
        'custom-alt': '#F7DCB9', // Replace with your color code
        'custom-alt2': '#B5C18E', // Replace with your color code
        // Add more custom colors as needed
      },
      fontFamily:{
        Gup: ['Gupter']
      }
    },
  },
  plugins: [],
}

