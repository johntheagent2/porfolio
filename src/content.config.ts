import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const month = z.string().regex(/^\d{4}-\d{2}$/, 'Use the YYYY-MM format, e.g. 2025-03');

// One Markdown file per job/project. The body (bullet list) holds the responsibilities.
const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    project: z.string(),
    role: z.string().optional(),
    start: month,
    end: month.optional(), // leave out while you're still working on it
    order: z.number().default(0), // tie-breaker when two records share a start month
    stack: z.array(z.string()),
    summary: z.string(),
  }),
});

// Optional extra sections written in plain Markdown (projects, writing, talks...).
const sections = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/sections' }),
  schema: z.object({
    title: z.string(),
    command: z.string().regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers and dashes only'),
    order: z.number(),
  }),
});

export const collections = { experience, sections };
