/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAFAFA',
          dark: '#EBEBEB',
        },
        ink: {
          DEFAULT: '#1A1730',
          mid: '#3d3a5c',
          soft: '#6b6880',
          faint: '#b0aec4',
        },
        'brand-black': '#0f0d1f',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
