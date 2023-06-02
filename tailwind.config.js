/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FF5100",
        primaryLightBlack: "#111111",
        primaryBlack: "#000000",
        primaryWhite: "#FFFFFF",
        secondaryGreen: "#60B653",
        secondaryRed: "#080808",
        secondaryYellow: "#050505",
        secondaryBlue: "#4D83F0",
      },
      maxWidth: {
        app: "1320px",
      },
    },
  },
  plugins: [],
};
