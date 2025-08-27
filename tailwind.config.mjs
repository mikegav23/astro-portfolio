/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji']
      },
      colors: {
        base: {
          bg: '#0b0d10',
          card: '#111418',
          border: '#1b1f24',
          text: '#e6eaf2',
          dim: '#a8b0bf',
          accent: '#8b5cf6'
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
}
