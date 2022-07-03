module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "1/15": "15%",
      },
      height: {
        18: "4.5rem",
      },
      colors: {
        "neutral-830": "#161616",
        "neutral-840": "#111111",
        "neutral-850": "#0E0E0E",
        "thead-row": "#5F5F5F",
        "black-rgba": "rgba(55 , 65 , 81, 1)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
