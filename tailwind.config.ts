import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        texto: '#263238',
        backdarkdm: '#1C1B1E', // Dark Mode Background
        whitextdm: '#FFFFFF', // Dark Mode Text and Title
        cardColorbm: '#1E293B', // Dark Mode Card Color
        innerTextColordm: '#575360', // Dark Mode Inner Card Text Color
        darkbtncolordm: '#A688FA', // Dark Mode Button Color
        darklinkcolordm: '#BA9FFB', // Dark Mode Link Color
        dalordm: '#9394A5', // Dark Mode Button Inner Text Color
        dropdm: '#DDE4E6', // Dark Mode DropDown Background Color
        dropMenudm: '#423F4D', // Dark Mode DropDown Item Color
        bgHoverlm: '#1F75FE', // Hover button
        bgHoverdm: '#87CEEB', // Hover button
        linkdm: '#1F71F3',
        blacklg: '#171717',
        blackbg: '#262626',
        blackform: '#374151',
        blackcard: '#1F2937',
        graybg:'#f2f2f2',
       
       
        // Light Mode Colors
        backWhitelm: '#F5F4FE', // Light Mode Background
        textWhitelm: '#000008', // Light Mode Text and Title
        cardColorlm: '#FFFFFF', // Light Mode Card Color
        innerTextColorlm: '#000008', // Light Mode Inner Card Text Color
        darkbtncolorlm: '#221A90', // Light Mode Button Color
        darklinkcolorlm: '#2341F8', // Light Mode Link Color
        darkinnercolorlm: '#FFFFFF', // Light Mode Button Inner Text Color
        dropMenulbacklm: '#E1DFFD', //  Light Mode DropDown Background Color
        dropMenulm: '#D7D5FC', // Light Mode DropDown Item Color
       
      },
    },
  },
  plugins: [],
});

export default config;
