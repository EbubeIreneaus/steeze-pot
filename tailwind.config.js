/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#292D36",
        secondary: "#FFFFD6",
        info: "#007ed7",
        success: "#009b6f",
        warning: "#eab308",
        error: "#dc2626",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#292D36",

          secondary: "#FFFFD6",

          accent: "#2e00ff",

          neutral: "#f3e8ff",

          "base-100": "#f5f5f4",

          info: "#007ed7",

          success: "#009b6f",

          warning: "#eab308",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
