import { NavbarClient } from "@/components/layout/NavbarClient"; 
import CatalogHero from "@/components/sections/courses/CatalogHero";
import CourseGrid from "@/components/sections/courses/CourseGrid";
import prisma from "@/utils/prisma"; 
import { createClient } from '@/utils/supabase/server'; 

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    where: { isActive: true }, 
    orderBy: { price: 'asc' }
  });

  let userClearance = 1; 
  
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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans">
      <NavbarClient user={null} />
      <CatalogHero />

      <section className="relative py-12 lg:py-24 border-t border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* FIX: Removed the sidebar layout. CourseGrid now spans 100% width */}
          <CourseGrid courses={courses} userClearance={userClearance} />
        </div>
      </section>
    </main>
  );
}