/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				blink: {
					'50%': { opacity: 0 },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				blink: 'blink 1s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
