/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'markazi': ['markazi'],
				'karla': ['karla'],
			},
			colors: {
				littleGreen: '#495E57',
				littleYellow: '#F4CE14',
				littleOrange: '#EE9972',
				littleLightOrange: '#FBDABB',
			},
			backgroundImage: {
				
			}
		},
	},
	plugins: [],
};
