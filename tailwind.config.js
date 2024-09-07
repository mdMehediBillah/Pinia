/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "weather-primary": "#00668A",
          "weather-secondary": "#004E71",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      container: {
        padding: "1rem",
        center: true,
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
