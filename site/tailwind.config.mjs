import defaultTheme from "tailwindcss/defaultTheme.js";
import typoPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Averia Sans Libre", defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ee6767",
        "secondary-1": "#28348b",
        "secondary-2": "#09bcce",
      },
    },
  },
  plugins: [typoPlugin],
};
