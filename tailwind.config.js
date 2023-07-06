/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      colors: {
        'red-1': 'hsl(0, 100%, 74%)',
        'green-1': 'hsl(154, 59%, 51%)',
        'blue-1': 'hsl(248, 32%, 49%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'gray-blue': 'hsl(246, 25%, 77%)',
      }
    },
  },
  plugins: [],
}

