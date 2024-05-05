// Astro config does not support path aliases: https://github.com/withastro/astro/issues/9782
import { defineConfig } from './lib/config';

export const Config = defineConfig({
	i18n: {
		defaultLocale: 'zh',
		locales: ['en', { path: 'zh', codes: ['zh', 'zh-CN', 'zh-TW'] }],
		fallback: {
			en: 'zh',
		},
	},
	site: {
		titleSeparator: ' | ',
		icon: {
			type: 'image/png',
			href: '/favicon.png',
		},
	},
	navbar: {
		common: {
			links: [
				{ labelI18nKey: 'custom.navbar.docs', href: '/docs' },
				{ labelI18nKey: 'custom.navbar.gallery', href: '/gallery' },
				{
					labelI18nKey: 'custom.navbar.ourmoe',
					href: 'https://www.our.moe',
				},
			],
		},
	},
});
