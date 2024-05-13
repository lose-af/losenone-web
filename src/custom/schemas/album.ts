import { z } from 'astro/zod';

export const imageSchema = z.object({
	src: z.string().url(),
	altI18nKey: z.string(),
	captionI18nKey: z.string(),
});

export const albumSchema = z.object({
	order: z.number(),
	nameI18nKey: z.string(),
	descI18nKey: z.string(),
	images: z.array(imageSchema).nonempty(),
});
