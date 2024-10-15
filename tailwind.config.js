
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "rgba(var(--primary))",
        red: "rgba(var(--red))",
        green: "rgba(var(--green))",
        textColor: "rgba(var(--textColor))",
        textAccent: "rgba(var(--textAccent))",
        surface: "rgba(var(--surface))",
        background: "rgba(var(--background))",
        contrastBg: "rgba(var(--contrastBg))",
        hexBg: "rgba(var(--hexBg))",
      },
      zIndex: {
        king: "90",
        first: "80",
        second: "70",
        third: "60",
      },
      boxShadow: {
        shadow: "7px 7px rgba(var(--contrastBg))",
      }
    },
  },
  plugins: [],
}

