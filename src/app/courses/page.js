import { Navbar } from "@/components/layout/Navbar";
import CatalogHero from "@/components/sections/courses/CatalogHero";
import CourseSidebar from "@/components/sections/courses/CourseSidebar";
import CourseGrid from "@/components/sections/courses/CourseGrid";

export const metadata = {
  title: "Academy | Arbotrix Robotics",
  description: "Enterprise-grade robotics and AI engineering courses.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* 1. The Hero */}
      <CatalogHero />

      {/* 2. The 12-Column Catalog Architecture */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* LEFT: 3 Columns for the Sidebar */}
          <div className="col-span-1 lg:col-span-3">
            <CourseSidebar />
          </div>

          {/* RIGHT: 9 Columns for the Course Cards */}
          <div className="col-span-1 lg:col-span-9">
            <CourseGrid />
          </div>

        </div>
      </section>

    </main>
  );
}