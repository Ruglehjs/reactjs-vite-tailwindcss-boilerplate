/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Viraleate brand colors
        brand: {
          yellow: '#D8FF00', // Bright lime-yellow from logo
          pink: '#FF1493',   // Vibrant magenta-pink from logo
          white: '#FFFFFF',  // Pure white for accents
        },
        primary: {
          50: '#f7ffe0',
          100: '#edffa6',
          200: '#dcff6b',
          300: '#c8ff30',
          400: '#b8ff00',
          500: '#D8FF00', // Main brand yellow
          600: '#c2e600',
          700: '#a8cc00',
          800: '#8fb300',
          900: '#769900',
        },
        secondary: {
          50: '#ffe4f1',
          100: '#ffb8dd',
          200: '#ff8cc8',
          300: '#ff60b3',
          400: '#ff349e',
          500: '#FF1493', // Main brand pink
          600: '#e6127d',
          700: '#cc1067',
          800: '#b30e51',
          900: '#990c3b',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
      },
      aspectRatio: {
        '15/8': '15 / 8',
      },
      height: {
        '10.5': '2.625rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'var(--font-system)'],
        'display': ['Montserrat', 'var(--font-system)'],
        'body': ['Montserrat', 'var(--font-system)'],
        'mono': ['var(--font-mono)'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neon-yellow': '0 0 20px rgba(216, 255, 0, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 20, 147, 0.5)',
        'glow': '0 0 40px rgba(216, 255, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
