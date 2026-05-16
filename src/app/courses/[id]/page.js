import { Navbar } from "@/components/layout/Navbar";
import CourseHero from "@/components/sections/courses/CourseHero";
import CourseProjects from "@/components/sections/courses/CourseProjects";
import CourseSyllabus from "@/components/sections/courses/CourseSyllabus";
import CourseEnrollment from "@/components/sections/courses/CourseEnrollment";

export default function IndividualCoursePage({ params }) {
  // In the future, this 'params.id' will tell the database which course to load.
  // For example, if the URL is /courses/ros2-fundamentals, params.id = "ros2-fundamentals"
  
  return (
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* 1. The Hook & Logistics */}
      <CourseHero />

      {/* 2. The Hardware Proof */}
      <CourseProjects />

      {/* 3. The Technical Details */}
      <CourseSyllabus />

      {/* 4. The Conversion Engine */}
      <CourseEnrollment />

    </main>
  );
}