/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#d91e26',
        'primary-blue': '#1b2e51',
        'secondary-blue': '#2c4a7a',
        'light-gray': '#f8f9fa',
        'medium-gray': '#6c757d',
        'dark-gray': '#343a40',
      },
    },
  },
  plugins: [],
}
