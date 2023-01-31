/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.{html,js}'],
	theme: {
		backgroundSize: {
			'50%': '50%',
		},
		extend: {
			backgroundImage: {
				arrow: 'url(./icons/arrow.svg)',
				'arrow-phone': 'url(./icons/arrow-phone.svg)',
			},
			colors: {
				h2: ' #8d6b5e',
				'main-bg': '#d1beaf',
			},
			transitionProperty: {
				height: 'height',
				width: 'width',
			},
		},
		fontFamily: {
			playfair: 'Playfair Display, serif',
			raleway: 'Raleway, sans-serif',
		},
	},
	plugins: [],
}
