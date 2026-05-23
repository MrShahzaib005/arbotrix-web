import { Navbar } from "@/components/layout/Navbar";
import CatalogHero from "@/components/sections/courses/CatalogHero";
import CourseSidebar from "@/components/sections/courses/CourseSidebar";
import CourseGrid from "@/components/sections/courses/CourseGrid";
import prisma from "@/utils/prisma"; 
import { createClient } from '@/utils/supabase/server'; // Required for auth

export default async function CoursesPage() {

  // 1. Fetch all active courses from the DB
  const courses = await prisma.course.findMany({
    where: { isActive: true }, // Good practice to only show active courses
    orderBy: { price: 'asc' }
  });

  // 2. Safely determine the user's clearance level using Supabase & Prisma
  let userClearance = 1; // Default to 1 if logged out
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { clearanceLevel: true } 
    });
    
    if (dbUser?.clearanceLevel) {
      userClearance = dbUser.clearanceLevel;
    }
  }

  // 3. Render your exact original UI
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
            {/* Pass the dynamic data as props */}
            <CourseGrid courses={courses} userClearance={userClearance} />
          </div>
          
        </div>
      </section>
    </main>
  );
}