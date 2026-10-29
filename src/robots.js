export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/admin', '/verify', '/api'],
    },
    sitemap: 'https://arbotrix.com/sitemap.xml',
  }
}