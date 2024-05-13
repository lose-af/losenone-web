import { defineCollection } from 'astro:content';
import { customI18nSchema } from '@custom/i18n';
import { getI18nSchema } from '../lib/i18n/schema';
import { albumSchema } from '~/custom/schemas/album';

const i18nCollection = defineCollection({
	type: 'data',
	schema: getI18nSchema(customI18nSchema),
});

const albumsCollection = defineCollection({
	type: 'data',
	schema: albumSchema,
});

export const collections = {
	i18n: i18nCollection,
	albums: albumsCollection,
};
