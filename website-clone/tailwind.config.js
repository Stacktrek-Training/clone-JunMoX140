/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['"STIX Two Text"', "serif"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
