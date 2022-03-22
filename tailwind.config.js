const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
