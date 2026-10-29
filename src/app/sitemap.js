import prisma from "@/utils/prisma";

export default async function sitemap() {
  const baseUrl = "https://arbotrix.com";

  // 1. Fetch active courses safely using only verified model fields
  const courses = await prisma.course.findMany({
    where: { isActive: true },
    select: { id: true }
  });

  const courseUrls = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 2. Define your static enterprise and case-study architecture
  const staticRoutes = [
    '',
    '/courses',
    '/register',
    '/case-study/tera-x',
    '/case-study/dodo-x',
    '/case-study/optic-clean',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 3. Return the fully combined payload to Google's crawler
  return [...staticRoutes, ...courseUrls];
}