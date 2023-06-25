/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        mm: "800px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      colors: {
        boston: {
          50: "#f0fafb",
          100: "#d8f1f5",
          200: "#b5e3ec",
          300: "#83cedd",
          400: "#49b0c7",
          500: "#2f9ab5",
          600: "#287792",
          700: "#276277",
          800: "#275263",
          900: "#254454",
          950: "#132c39",
        },
        lavender: {
          50: "#fdf5fe",
          100: "#faebfc",
          200: "#f5d6f8",
          300: "#efb6f1",
          400: "#e378e4",
          500: "#d75dd8",
          600: "#bc3dba",
          700: "#9b3097",
          800: "#7f297b",
          900: "#692665",
          950: "#440e40",
        },
        dodger: {
          50: "#eefcff",
          100: "#d8f8ff",
          200: "#b9f3ff",
          300: "#8aedff",
          400: "#52e1ff",
          500: "#2ac9ff",
          600: "#14aefc",
          700: "#0d9af2",
          800: "#1175bc",
          900: "#146294",
          950: "#123b59",
        },
      },
    },
  },
  plugins: [],
};
