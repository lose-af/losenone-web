import type { RawFlintConfig } from '@miracle-box/flint/utils';
import flint from '@miracle-box/flint';
import { defineConfig } from 'astro/config';

const flintConfig: RawFlintConfig = {
	locales: {
		zh: {
			label: '中文',
		},
		en: {
			label: 'English',
		},
	},
	defaultLocale: 'en',
	redirects: {
		'/': {
			destination: '/zh/',
			status: 302,
		},
	},
	legacy: {
		logoImg: '/images/favicon.png',
	},
};

export default defineConfig({
	integrations: [flint(flintConfig)],
});
