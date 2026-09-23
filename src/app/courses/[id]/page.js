export const dynamic = 'force-dynamic';
import { NavbarClient } from "@/components/layout/NavbarClient"; // Using the Client Navbar
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

  return (
    // FIX: Purged the dark `#0B0D14` backgrounds completely
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white font-sans">
      <NavbarClient user={null} /> 
      <CourseDetailClient course={course} />
    </main>
  );
}