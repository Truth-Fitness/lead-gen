/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/typography"),
  ],
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
        truth: {
          "dark-green": "#163029",
          "light-green": "#4C6548",
          "mid-green": "#294635",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Bebas Neue", "cursive"],
        impact: ["Oswald", "sans-serif"],
      },
    },
  },
  important: true,
};
