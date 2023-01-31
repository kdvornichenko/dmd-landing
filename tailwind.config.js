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
				'main-bg': '#d1beaf',
			},
			transitionProperty: {
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
