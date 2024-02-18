/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*.{html, js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				Inter: 'Inter',
			},
			flexBasis: {
				97: '27rem',
				98: '30rem',
			},
			width: {
				48: '48%',
			},
			height: {
				53: '210px',
			},
		},
	},
	plugins: [],
};
