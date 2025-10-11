import { defineCollection, z } from 'astro:content';

// Define content collections for external tutorial content
const externalHtmlCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    readTime: z.string(),
    category: z.literal('HTML'),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    date: z.date(),
  }),
});

export const collections = {
  'external-html-tutorials': externalHtmlCollection,
};
