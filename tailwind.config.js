/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'primary-foreground': '#FFFFFF',
        'secondary': '#FFFFFF',
        'secondary-foreground': '#000000',
        'destructive': '#FF0000',
        'background': '#FFFFFF',
        'muted': '#f3f4f6',
        'accent': '#d1d5db'
      },
    },
  },
  plugins: [],
};