/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
      'bg-blue-100',
      'bg-blue-400',
      'bg-green-100',
      'text-green-500',
      'bg-yellow-100',
      'bg-yellow-400',
      'text-yellow-500',
      'text-blue-500',
      'bg-orange-100',
      'bg-orange-400',
      'bg-lime-500',
    ],
    theme: {
      extend: {
        fontFamily: {
          satoshi: ['Satoshi', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'primary-orange': '#FF5722',
        }
      },
    },
    plugins: [],
  }