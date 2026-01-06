/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        midnight: {
          950: '#020408', // Deepest black
          900: '#0f0505', // Subtle red tint in dark background
          800: '#210b0c',
        },
        accent: {
          main: '#D2232A', // Custom Red RGB(210, 35, 42)
          glow: '#ff4d55', // Lighter red for hover/glow
        }
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'spotlight': 'spotlight 8s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          '0%': { opacity: '0.3', transform: 'scale(0.8) translate(-10%, -10%)' },
          '100%': { opacity: '0.5', transform: 'scale(1.2) translate(10%, 10%)' },
        }
      }
    }
  },
  plugins: [],
}
