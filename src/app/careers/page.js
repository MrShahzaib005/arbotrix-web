import { Navbar } from "@/components/layout/Navbar";
import CareersHeader from "@/components/sections/careers/CareersHeader";
import CourseCards from "@/components/sections/careers/CourseCards";
import WhyLearnWithUs from "@/components/sections/careers/WhyLearnWithUs";
import FAQ from "@/components/sections/careers/FAQ";

export const metadata = {
  title: "Learn Robotics | Arbotrix Education",
  description: "Learn robotics engineering, ROS2, and autonomous systems from industry professionals.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-black selection:bg-accent-blue selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 space-y-24 max-w-7xl mx-auto px-6">
        <CareersHeader />
        <WhyLearnWithUs />
        <CourseCards />
        <FAQ />
      </div>
    </main>
  );
}