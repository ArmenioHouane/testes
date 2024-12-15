import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			texto: '#263238',
  			backdarkdm: '#1C1B1E',
  			whitextdm: '#FFFFFF',
  			cardColorbm: '#1E293B',
  			innerTextColordm: '#575360',
  			darkbtncolordm: '#A688FA',
  			darklinkcolordm: '#BA9FFB',
  			dalordm: '#9394A5',
  			dropdm: '#DDE4E6',
  			dropMenudm: '#423F4D',
  			bgHoverlm: '#1F75FE',
  			bgHoverdm: '#87CEEB',
  			linkdm: '#1F71F3',
  			blacklg: '#171717',
  			blackbg: '#262626',
  			blackform: '#374151',
  			blackcard: '#1F2937',
  			graybg: '#f2f2f2',
  			backWhitelm: '#F5F4FE',
  			textWhitelm: '#000008',
  			cardColorlm: '#FFFFFF',
  			innerTextColorlm: '#000008',
  			darkbtncolorlm: '#221A90',
  			darklinkcolorlm: '#2341F8',
  			darkinnercolorlm: '#FFFFFF',
  			dropMenulbacklm: '#E1DFFD',
  			dropMenulm: '#D7D5FC'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
});

export default config;
