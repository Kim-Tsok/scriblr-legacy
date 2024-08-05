/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [require("daisyui")],
};
