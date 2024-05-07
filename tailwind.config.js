/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors: {
        inspectorDark: "#4C85FB",
        inspectorLight: "#94B5FC",
        minerLight: "#F5BC73",
        minerDark: "#F58853",
        creatorLight: "#D2F2A4",
        creatorDark: "#00C8A0",
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
      },
      animation: {
        fade: "fadeIn .25s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    // colors: {
    //   inherit: "inherit",
    //   transparent: "transparent",
    //   current: "currentColor",
    //   black: "rgb(0 0 0)",
    //   white: "rgb(255 255 255)",
    //   ["lavender-blue"]: {
    //     50: "#f2f3ff",
    //     100: "#e4e7ff",
    //     200: "#c9cfff",
    //     300: "#aeb8ff",
    //     400: "#93a0ff",
    //     500: "#7888ff",
    //     600: "#606dcc",
    //     700: "#485299",
    //     800: "#303666",
    //     900: "#181b33",
    //   },
    // },
  },
  plugins: [require("daisyui")],
};
