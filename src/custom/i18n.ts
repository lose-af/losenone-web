import { z } from 'astro/zod';
import type { CustomI18nSchema } from '~/lib/i18n/schema';

export const customI18nSchema: CustomI18nSchema = {
	'custom.navbar.docs': z.string(),
	'custom.navbar.gallery': z.string(),
	'custom.navbar.ourmoe': z.string(),
	'custom.footer.text': z.string(),
	'custom.page.home.title': z.string(),
	'custom.page.gallery.title': z.string(),
	'custom.page.gallery.desc': z.string(),
	'custom.page.gallery.back': z.string(),
	'custom.album.newyear2022.name': z.string(),
	'custom.album.newyear2022.desc': z.string(),
	'custom.album.newyear2022.image.1.alt': z.string(),
	'custom.album.newyear2022.image.1.caption': z.string(),
	'custom.album.newyear2022.image.2.alt': z.string(),
	'custom.album.newyear2022.image.2.caption': z.string(),
};
