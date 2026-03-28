import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const menu = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/menu' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    column: z.union([z.literal(1), z.literal(2)]),
    items: z.array(
      z.object({
        name: z.string(),
        price: z.string(),
        description: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { menu };
