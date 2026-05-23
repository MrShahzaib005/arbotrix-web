import { notFound, redirect } from "next/navigation";
import prisma from "@/utils/prisma";
import EnrollFormClient from "./EnrollFormClient"; 
import { ShieldCheck, Package, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar"; 
import Link from "next/link"; 

// IMPORT YOUR AUTH FUNCTION HERE
// import { getSession } from "@/utils/auth"; 

export default async function EnrollPage({ params }) {
  const resolvedParams = await params;

  // 1. Fetch the course
  const course = await prisma.course.findUnique({
    where: { id: resolvedParams.id },
    select: { id: true, title: true, price: true } 
  });

  if (!course) notFound();

  // ==========================================
  // 2. THE AUTH & USER FETCHING LOGIC
  // ==========================================
  
  // A. Get the logged-in user's session
  // const session = await getSession();
  // if (!session) redirect(`/login?next=/courses/${course.id}/enroll`);
  
  // B. Query the Prisma database for this specific user to get their name
  /* const dbUser = await prisma.user.findUnique({
    where: { email: session.email } // Or filter by session.id depending on your auth setup
  });
  */

  // C. Determine the display name (Fallback to email if names are null)
  // const operatorName = dbUser?.firstName 
  //   ? `${dbUser.firstName} ${dbUser.lastName || ""}` 
  //   : session.email;

  // ⚠️ TEMPORARY MOCK DATA (Until you uncomment the auth logic above)
  const operatorName = "Syed Mirza Shahzaib"; 

  return (
    <main className="min-h-[100svh] bg-[#0B0D14] text-white selection:bg-accent-blue pb-24">
      <Navbar />

      <div className="pt-28 max-w-2xl mx-auto px-6">
        <Link 
          href={`/courses/${course.id}`} 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Course Details
        </Link>

        {/* Header section */}
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-8 h-8 text-accent-blue" />
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-white">Secure Enrollment</h1>
            
            {/* THE FIX: Injecting the dynamic operator name */}
            <p className="text-gray-500 text-sm">Operator: <span className="text-white font-medium">{operatorName}</span></p>
            
          </div>
        </div>

        <div className="bg-[#131620] border border-gray-800 rounded-3xl p-8 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-[#0B0D14] rounded-2xl border border-gray-800/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                <Package className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Target Course</p>
                <h2 className="text-lg font-bold text-white">{course.title}</h2>
              </div>
            </div>
            
            <div className="sm:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Total Fee</p>
              <h2 className="text-xl font-black text-emerald-400">{course.price} PKR</h2>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 mb-8" />

          <EnrollFormClient courseId={course.id} />
          
        </div>
      </div>
    </main>
  );
}