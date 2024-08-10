/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  themes: [
    {
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        "base-100": "#ffffff", // This sets the main background color to white
      },
    },
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addBase, theme }) {
      addBase({
        "input:-webkit-autofill": {
          "box-shadow": "0 0 0 30px white inset !important",
          "-webkit-text-fill-color": "black !important",
        },
        "input:-webkit-autofill:hover": {
          "box-shadow": "0 0 0 30px white inset !important",
        },
        "input:-webkit-autofill:focus": {
          "box-shadow": "0 0 0 30px white inset !important",
        },
        "input:-webkit-autofill:active": {
          "box-shadow": "0 0 0 30px white inset !important",
        },
      });
    }),
  ],
};
