import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'top': '#ffce00',
			'header': '#000',
			'white': '#fff',
			'black': '#000',
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			righteous: ['Righteous', 'cursive'],
		}
	},
	plugins: [animations],
}
