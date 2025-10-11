import { defineCollection, z } from 'astro:content';

// Define content collections for different tutorial categories
const htmlCollection = defineCollection({
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

const cssCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    readTime: z.string(),
    category: z.literal('CSS'),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    date: z.date(),
  }),
});

const javascriptCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    readTime: z.string(),
    category: z.literal('JavaScript'),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    date: z.date(),
  }),
});

// External content collection (from GitHub repository)
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
  'html-tutorials': htmlCollection,
  'css-tutorials': cssCollection,
  'javascript-tutorials': javascriptCollection,
  'external-html-tutorials': externalHtmlCollection,
};
