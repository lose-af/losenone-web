import { defineCollection } from 'astro:content';
import { customI18nSchema } from '@custom/i18n';
import { getI18nSchema } from '../lib/i18n/schema';
import { gallerySchema } from '~/custom/schemas/gallery';

const i18nCollection = defineCollection({
	type: 'data',
	schema: getI18nSchema(customI18nSchema),
});

const galleryCollection = defineCollection({
	type: 'data',
	schema: gallerySchema,
});

export const collections = {
	i18n: i18nCollection,
	gallery: galleryCollection,
};
