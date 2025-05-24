/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        yellow: {
          frame: '#FFD700',
        },
        pink: {
          frame: '#FF4081',
        },
        blue: {
          frame: '#2196F3',
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse': 'pulse 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'frame': '0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};