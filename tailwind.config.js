module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				background: {
					'primary-light': '#F7F8FC',
					'secondary-light': '#FFFFFF',
					'ternary-light': '#f6f7f8',
					'primary-dark': '#0D2438',
					'secondary-dark': '#102D44',
					'ternary-dark': '#1E3851',
				},
			},
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
};