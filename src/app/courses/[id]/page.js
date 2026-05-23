export const dynamic = 'force-dynamic';
import { Navbar } from "@/components/layout/Navbar";
import CourseDetailClient from "@/components/sections/courses/CourseDetailClient";
import { notFound } from "next/navigation";
import prisma from "@/utils/prisma";

// Import your auth utility here (adjust the path/function based on your actual auth setup)
// import { getUser } from "@/utils/auth"; 

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  
  // Fetch just the title and tagline for SEO
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
  
  // 1. Fetch the live course data from your database
  const course = await prisma.course.findUnique({
    where: { id: resolvedParams.id }
  });
  
  if (!course) notFound();

  // 2. Check Authentication State 
  // (Uncomment and implement this based on your actual auth utility)
  // const user = await getUser();
  const isLoggedIn = false; // TEMPORARY: Replace with `!!user` once your auth is connected

  return (
    <main className="min-h-[100svh] bg-[#0B0D14] text-white selection:bg-accent-blue selection:text-white pb-24">
      {/* Pass user to Navbar if your NavbarClient requires it */}
      <Navbar /> 
      
      {/* 3. Pass the DB course AND the auth state to the Client Component */}
      <CourseDetailClient 
        course={course} 
        isLoggedIn={isLoggedIn} 
      />
    </main>
  );
}