/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	  ],
  theme: {
    extend: {
		colors:{
			"site": {
				"brightBlue": "#1355FF",
				"lightBlue": "#B9ECFF",
				"white": "#E1DFEC",
				"darkBlue": "#061237",
				"lightText":"#67718E",
				"waysCardSubtext":"#B6BCCE",
				"createSubText":"#37456C",
				"createButton":"#F7F9FC",
				"featureTickBG":"#F5F9FF",
				"stampsNav":"#F2F3F8"
			}
		},
		fontFamily:{
			"inter": ["Inter","sans-serif"]
		}
	},
  },
  plugins: [],
}
