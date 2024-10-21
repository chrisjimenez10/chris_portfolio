// Aceternity UI - Configuration Setup
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        purple: "rgba(var(--purple))",
        textColor: "rgba(var(--textColor))",
        textAccent: "rgba(var(--textAccent))",
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
        shadow: "7px 7px rgba(var(--contrastBg))",
      }
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable --> NOTE: For Aceternity UI
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

