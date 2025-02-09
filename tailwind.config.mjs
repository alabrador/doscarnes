import animations from 'tailwindcss-animated'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			top: "var(--color-top)",
			header: "var(--color-header)",
			white: "var(--color-white)",
			black: "var(--color-black)",
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			righteous: ['Righteous', 'cursive'],
		}
	},
	plugins: [animations],
}
