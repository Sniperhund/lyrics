// @ts-nocheck
import Icons from 'unplugin-icons/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/harlem"],
	devtools: {
		enabled: true
	},
	vite: {
		plugins: [
			Icons({
				// the feature below is experimental ⬇️
				autoInstall: true
			})
		]
	}
})
