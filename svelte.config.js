import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
 
    kit: {
        adapter: adapter({
									pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
								}),
								paths: {
									base: process.env.NODE_ENV === 'production' ? '/gni-kpp' : '',
								}
    }
};
 
export default config;