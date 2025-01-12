const { addIconSelectors } = require("@iconify/tailwind");
const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '30': "7.5rem",
      },
      colors: {
        mainbg: "#003060",
        textColor: "#ffffff",
        footerbg: "#dededf",
        footercolor: "#33363F",
        pfpcolor: "#68a4f1",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto as a font option
      },
    },
   
  },
  plugins: [addIconSelectors(['mdi', 'mdi-light',"vscode-icons"]),addDynamicIconSelectors(),],
}

