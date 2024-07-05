import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		svelte(),
		react(),
		import.meta.env.DEV ? keystatic() : undefined,
	],
	output: import.meta.env.DEV ? 'hybrid' : 'static',
})
