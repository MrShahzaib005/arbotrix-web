export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/admin/', '/verify/', '/api/'], // Shields up
    },
    sitemap: 'https://arbotrix.com/sitemap.xml',
  }
}