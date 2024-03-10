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
      keyframes: {
        frameIn: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)'
          }
        }
      },
      animation: {
        frameIn: 'frameIn 2s forwards'
      }
    },
  },
  plugins: [],
};