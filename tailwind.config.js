/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        "primary-color": "#00C397",
      },
    },
  },
  plugins: [require("daisyui")],
};
