import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,markdown}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    publishedDate: z.string(),
    author: z.string().default('Barbara Schreiner'),
    category: z.enum(['craftivism', 'coaching', 'governance', 'reflections']),
    excerpt: z.string(),
    metaDescription: z.string().optional(),
    coverImage: z.string().optional(),
    readTime: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,markdown}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(1),
    tagline: z.string().optional(),
    shortDescription: z.string().optional(),
    metaDescription: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blog, services };
