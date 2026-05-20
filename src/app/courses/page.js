// src/app/courses/page.js
import { Navbar } from "@/components/layout/Navbar";
import CatalogHero from "@/components/sections/courses/CatalogHero";
import CourseSidebar from "@/components/sections/courses/CourseSidebar";
import CourseGrid from "@/components/sections/courses/CourseGrid";
import prisma from "@/utils/prisma"; // 1. Import your prisma client

export default async function CoursesPage() {
  // 2. Fetch all courses from the DB
  const courses = await prisma.course.findMany({
    orderBy: { price: 'asc' }
  });

  return (
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white">
      <Navbar />
      <CatalogHero />

      <section className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          <div className="col-span-1 lg:col-span-3">
            <CourseSidebar />
          </div>
          <div className="col-span-1 lg:col-span-9">
            {/* 3. Pass the data as a prop */}
            <CourseGrid courses={courses} /> 
          </div>
        </div>
      </section>
    </main>
  );
}