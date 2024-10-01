/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        surface: "rgba(var(--surface))",
        onBackground: "rgba(var(--onBackground))",
        onSurface: "rgba(var(--onSurface))",
        primary: "rgba(var(--primary))",
      },
      zIndex: {
        first: "80",
        second: "70",
        third: "60",
      }
    },
  },
  plugins: [],
}

