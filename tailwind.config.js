
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        textColor: "rgba(var(--textColor))",
        surface: "rgba(var(--surface))",
        background: "rgba(var(--background))",
        contrastBg: "rgba(var(--contrastBg))",
      },
      zIndex: {
        king: "90",
        first: "80",
        second: "70",
        third: "60",
      },
      boxShadow: {
        shadow: "7px 7px rgba(var(--onBackground))",
      }
    },
  },
  plugins: [],
}

