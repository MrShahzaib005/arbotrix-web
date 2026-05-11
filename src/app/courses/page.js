import { Navbar } from "@/components/layout/Navbar";
import CoursesBoard from "@/components/sections/courses/CoursesBoard";
import Achievements from "@/components/sections/courses/acheivements";

export const metadata = {
  title: "Courses | Arbotrix Robotics",
  description: "Learn robotics engineering, ROS2, and autonomous systems from industry professionals.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-black selection:bg-accent-blue selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 flex flex-col gap-24">
        <CoursesBoard />
        <Achievements />
      </div>
    </main>
  );
}