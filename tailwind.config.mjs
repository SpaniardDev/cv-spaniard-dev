/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        belleza: ["Belleza", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#333333",
        white: "#f2f2f2",
        accent: {
          50: "#fbf6ea",
          100: "#f8eceb",
          200: "#f1dbda",
          300: "#e5bebc",
          400: "#d59997",
          500: "#bb6060",
          600: "#ab5357",
          700: "#8f4147",
          800: "#78393f",
          900: "#68333a",
          950: "#38191d",
        },
        primary: {
          50: "#f4faf3",
          100: "#e4f5e3",
          200: "#c8eac8",
          300: "#9cd99c",
          400: "#60bb60",
          500: "#44a344",
          600: "#348534",
          700: "#2b6a2c",
          800: "#275428",
          900: "#214622",
          950: "#0e250f",
        },
        secondary: {
          50: "#f2f5fb",
          100: "#e7ecf8",
          200: "#d4dcf1",
          300: "#b9c4e8",
          400: "#9da7dc",
          500: "#848ad0",
          600: "#6060bb",
          700: "#5c5aa8",
          800: "#4c4b88",
          900: "#41426e",
          950: "#272640",
        },
      },
    },
  },
  plugins: [],
};
