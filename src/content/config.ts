import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Bostäder', 'Kommersiellt', 'Renovering']),
    location: z.string(),
    year: z.number(),
    image: z.string(),
    featured: z.boolean().default(false),
    client: z.string().optional(),
    area: z.string().optional(),
    duration: z.string().optional(),
    services: z.array(z.string()).optional(),
    gallery: z.array(z.object({
      url: z.string(),
      alt: z.string().optional()
    })).optional(),
    testimonials: z.array(z.object({
      quote: z.string(),
      name: z.string(),
      role: z.string(),
      avatar: z.string().optional()
    })).optional(),
  }),
});