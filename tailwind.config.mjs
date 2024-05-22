/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'green': '#46D41F',
				'light-blue': '#00C2FF',
				'dark-blue': '#020F56'
			},
			fontFamily: {
				'Varien': ['Varien', 'sans-serif'],
				'VarienItalic': ['VarienItalic', 'sans-serif'],
				'UniNeue': ['UniNeue', 'sans-serif'],
			},
			aspectRatio: {
				'Default': 21/9,
			},
			animation: {
				fade: 'fadeIn .5s ease-in-out',
				fadeOut: 'fadeOut .5s ease-in-out',
			  },
			  keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
}
