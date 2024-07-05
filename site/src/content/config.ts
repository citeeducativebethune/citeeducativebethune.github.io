import { defineCollection, z } from 'astro:content'

export const collections = {
	actions: defineCollection({
		type: 'content',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				actors: z.array(z.string()),
				thumbnail: z.object({
					image: image(),
					alt: z.string().optional(),
				}),
				description: z.string(),
				date: z.date(),
				authors: z.string().optional(),
			}),
	}),
	actors: defineCollection({
		type: 'content',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string().optional(),
				location: z.string().optional(),
				site: z.string().optional(),
				image: image(),
				scholar: z.boolean(),
			}),
	}),
	about: defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				introduction: z.object({
					title: z.string(),
					content: z.string(),
				}),
				perimeter: z.object({
					title: z.string(),
					content: z.string(),
					image: image(),
				}),
				goals: z.object({
					title: z.string(),
					items: z.array(z.string()),
				}),
				contacts: z.array(
					z.object({
						name: z.string(),
						description: z.string(),
						mail: z.string().optional(),
					}),
				),
			}),
	}),
}
