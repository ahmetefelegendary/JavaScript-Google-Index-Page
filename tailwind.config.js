/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8f9fa",
          "200": "#f2f2f2",
          "300": "#eee",
        },
        dimgray: "#70757a",
        darkslategray: "#3c4043",
        white: "#fff",
        gainsboro: "#dfe1e5",
        royalblue: "#1a73e8",
        gray: {
          "100": "#202124",
          "200": "rgba(0, 0, 0, 0.87)",
        },
      },
      fontFamily: {
        roboto: "Roboto",
        arial: "Arial",
      },
    },
    fontSize: {
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
