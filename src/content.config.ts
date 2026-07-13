import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    category: z.enum([
      'NFL',
      'College Football',
    ]),

    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),

    author: z.string().default('Average Sports Fan'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};