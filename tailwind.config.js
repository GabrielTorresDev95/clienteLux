/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Ibarra Real Nova"', 'Georgia', 'serif'],
      },
      colors: {
        abyss: {
          800: "#2b0000",
          900: "#180000",
        },
      },
      boxShadow: {
        redsoft: "0 12px 40px rgba(179,0,0,.25)",
      },
    },
  },
  plugins: [],
}
