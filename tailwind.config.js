/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // slate-900 for a deep dark background
        foreground: '#f8fafc', // slate-50
        primary: '#3b82f6', // blue-500
        secondary: '#1e293b', // slate-800
        accent: '#60a5fa', // blue-400
        card: '#1e293b',
        'card-foreground': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
