import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		watch: {
			usePolling: true
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use '$lib/scss/mixins' as *;
					@use '$lib/scss/variables' as *;
				`
			}
		}
	}
});
