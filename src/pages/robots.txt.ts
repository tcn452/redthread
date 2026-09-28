import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, '') : 'https://redthread-zeta.vercel.app';

  const body = `# Red Thread NPC - Robots.txt
User-agent: *
Allow: /
Disallow: /keystatic
Disallow: /api/

# Sitemap
Sitemap: ${siteUrl}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
