/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': 'hsl(184, 91%, 17%)',
        'primary-2': 'hsl(185, 84%, 25%)',
        'primary-3': 'hsl(185, 81%, 29%)',
        'primary-4': 'hsl(184, 77%, 34%)',
        'primary-5': 'hsl(185, 62%, 45%)',
        'primary-6': 'hsl(185, 57%, 50%)',
        'primary-7': 'hsl(184, 65%, 59%)',
        'primary-8': 'hsl(184, 80%, 74%)',
        'primary-9': 'hsl(185, 94%, 87%)',
        'primary-10': 'hsl(186, 100%, 94%)',
        'grey-1': 'hsl(209, 61%, 16%)',
        'grey-2': 'hsl(211, 39%, 23%)',
        'grey-3': 'hsl(209, 34%, 30%)',
        'grey-4': 'hsl(209, 28%, 39%)',
        'grey-5': 'hsl(210, 22%, 49%)',
        'grey-6': 'hsl(209, 23%, 60%)',
        'grey-7': 'hsl(211, 27%, 70%)',
        'grey-8': 'hsl(210, 31%, 80%)',
        'grey-9': 'hsl(212, 33%, 89%)',
        'grey-10': 'hsl(210, 36%, 96%)',
        white: '#fff',
      },
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
      },
      transition: {
        default: 'all 0.3s linear',
      },
      spacing: {
        default: '0.25rem',
      },
      borderRadius: {
        default: '0.5rem',
      },
      boxShadow: {
        light: '0 5px 15px rgba(0, 0, 0, 0.1)',
        dark: '0 5px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
