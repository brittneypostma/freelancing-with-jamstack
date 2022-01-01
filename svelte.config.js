/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@api': path.resolve('./src/lib/api'),
					'@components': path.resolve('./src/lib/components'),
					'@gql': path.resolve('./src/lib/utils/gql'),
					'@layout': path.resolve('./src/lib/layout'),
					'@lib': path.resolve('./src/lib'),
					'@utils': path.resolve('./src/lib/utils'),
					'@styles': path.resolve('./src/lib/styles'),
					'@stores': path.resolve('./src/lib/stores')
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;