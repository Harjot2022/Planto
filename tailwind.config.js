/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        planto: {
          bg: '#1a2d1a',
          dark: '#0f1f0f',
          card: '#1e3420',
          border: '#2e4e2e',
          muted: '#8aaa8a',
          accent: '#7cb87c',
          text: '#d4e8d4',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
