import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    oneLiner: z.string(),
    date: z.string().optional(),
    image: z.string().optional(), // /projects/xyz.png
    skills: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]), // quick bullets
    awards: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    paper: z.string().url().optional(),
    patent: z.string().url().optional(),
    photos: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
