import { z } from 'astro/zod';
import type { CustomI18nSchema } from '~/lib/i18n/schema';

export const customI18nSchema: CustomI18nSchema = {
	'custom.navbar.docs': z.string(),
	'custom.navbar.gallery': z.string(),
	'custom.navbar.ourmoe': z.string(),
	'custom.footer.text': z.string(),
};
