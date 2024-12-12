/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // You can add custom dark mode colors here if needed
      },
      backgroundColor: {
        dark: {
          primary: '#1a202c', // Dark background
          secondary: '#2d3748', // Slightly lighter dark background
        }
      },
      textColor: {
        dark: {
          primary: '#e2e8f0', // Light text for dark mode
          secondary: '#cbd5e0', // Slightly lighter text
        }
      }
    },
  },
  plugins: [],
}
