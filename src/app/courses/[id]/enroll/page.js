export const dynamic = 'force-dynamic';
import { NavbarClient } from "@/components/layout/NavbarClient"; 
import CourseDetailClient from "@/components/sections/courses/CourseDetailClient";
import { notFound } from "next/navigation";
import prisma from "@/utils/prisma";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  const course = await prisma.course.findUnique({
    where: { id: resolvedParams.id },
    select: { title: true, tagline: true }
  });
  
  if (!course) return { title: "Course Not Found" };
  
  return {
    title: `${course.title} | Arbotrix Academy`,
    description: course.tagline || "Advanced robotics and autonomy training.",
  };
}

export default async function IndividualCoursePage({ params }) {
  const resolvedParams = await params;
  
  const course = await prisma.course.findUnique({
    where: { id: resolvedParams.id }
  });
  
  if (!course) notFound();

  // 1. Dynamic Course Schema for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.tagline || course.description,
    "provider": {
      "@type": "Organization",
      "name": "Arbotrix Academy",
      "sameAs": "https://www.arbotrix.com"
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white font-sans">
      {/* 2. Inject the Schema into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavbarClient user={null} /> 
      <CourseDetailClient course={course} />
    </main>
  );
}