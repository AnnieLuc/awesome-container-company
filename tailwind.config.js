module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "public/**/*.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "18px",
      lg: "24px",
      xl: "44px",
    },
    extend: {
      colors: {
        primary: "#1c383c",
        secondary: {
          100: "#ffffff",
          200: "#f4f4f4",
          300: "#e3e3e3",
        },
        highlight: {
          100: "#ff9820",
          200: "#e78819",
        },
        gridLine: "#b6b6b6",
        chat: "#161616",
      },
      fontFamily: {
        serif: ["Spline Sans", "sans-serif"],
      },
      lineHeight: {
        3: "14.22px",
        4: "16.59px",
        5: "21.33px",
        6: "24px",
        7: "28.44px",
        8: "30px",
        9: "48px",
        10: "52.14px",
      },
      boxShadow: {
        sm: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        DEFAULT: "0px 2px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
