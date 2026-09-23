// import { NavbarClient } from "@/components/layout/NavbarClient"; // Assuming you migrated to the Client Navbar
// import CatalogHero from "@/components/sections/courses/CatalogHero";
// import CourseSidebar from "@/components/sections/courses/CourseSidebar";
// import CourseGrid from "@/components/sections/courses/CourseGrid";
// import prisma from "@/utils/prisma"; 
// import { createClient } from '@/utils/supabase/server'; 

// export default async function CoursesPage() {

//   // 1. Fetch all active courses from the DB
//   const courses = await prisma.course.findMany({
//     where: { isActive: true }, 
//     orderBy: { price: 'asc' }
//   });

//   // 2. Safely determine the user's clearance level using Supabase & Prisma
//   let userClearance = 1; 
  
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();

//   if (user) {
//     const dbUser = await prisma.user.findUnique({
//       where: { id: user.id },
//       select: { clearanceLevel: true } 
//     });
    
//     if (dbUser?.clearanceLevel) {
//       userClearance = dbUser.clearanceLevel;
//     }
//   }

//   return (
//     // FIX: Purged the #0B0D14 wrapper. The entire page is now unified under the clinical slate theme.
//     <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans">
//       <NavbarClient user={null} />
//       <CatalogHero />

//       <section className="relative py-12 lg:py-24 border-t border-slate-200">
//         {/* Light Blueprint Grid Overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
//             <div className="col-span-1 lg:col-span-3">
//               <CourseSidebar courses={courses} />
//             </div>
            
//             <div className="col-span-1 lg:col-span-9">
//               <CourseGrid courses={courses} userClearance={userClearance} />
//             </div>
            
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

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