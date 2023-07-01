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
        secondaryGreen: "#2BD0D0",
        secondaryRed: "#26C0AB",
        secondaryYellow: "#BFCF90",
        secondaryBlue: "#6D40CF",
        primaryGray: "#919191",
      },
      maxWidth: {
        app: "1320px",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "400px" },
        // => @media (max-width: 400px) { ... }
      },
    },
  },
  plugins: [],
};
