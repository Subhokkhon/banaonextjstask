/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-white": "#fff",
        "blue-1": "#0096c8",
        "grey-darkest": "#08090a",
        red: "#c0504d",
        green: "#77933c",
        "purple-1": "#8064a2",
        "grey-hover": "#f8f9fa",
        black: "#000",
        "grey-dark": "#939ca3",
        "grey-lighter": "#ebedf0",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      xl: "20px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
