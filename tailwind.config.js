/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tw-elements/dist/plugin"), require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#00a0a0",
          secondary: "#001932",
          accent: "#1FB2A6",
          neutral: "#D3D3D3",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "turq-dark": "#006d6d",
        turq: "#00a0a0",
        navy: "#001932",
        "navy-light": "#002c58",
        red: "#f1666a",
        "red-dark": "#a95457",
        green: "#70a482",
        blue: "#427c9c",
        orange: "#f7931d",
        yellow: "#cf9c45",
        purple: "#5d4c95",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Bebas Neue", "cursive"],
      },
    },
  },
};
