import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author', defaultValue: 'Barbara Schreiner' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Craftivism & Creative Practice', value: 'craftivism' },
            { label: 'Coaching & Transformation', value: 'coaching' },
            { label: 'Water Governance & Consulting', value: 'governance' },
            { label: 'Stories & Reflections', value: 'reflections' },
          ],
          defaultValue: 'reflections',
        }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        coverImage: fields.text({ label: 'Cover Image URL or Path' }),
        readTime: fields.text({ label: 'Reading Time (e.g. 5 min read)' }),
        content: fields.mdx({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
    services: collection({
      label: 'Services & Practices',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        order: fields.integer({ label: 'Display Order', defaultValue: 1 }),
        tagline: fields.text({ label: 'Practice Tagline (e.g. Practice 01)' }),
        shortDescription: fields.text({ label: 'Summary Excerpt', multiline: true }),
        coverImage: fields.text({ label: 'Cover Image URL or Path' }),
        content: fields.mdx({
          label: 'Elaborated Practice Content',
          extension: 'md',
        }),
      },
    }),
  },
});
