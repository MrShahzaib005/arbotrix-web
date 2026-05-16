// import { Navbar } from "@/components/layout/Navbar";
// import CourseCards from "@/components/sections/courses/CourseCards";
// import Achievements from "@/components/sections/courses/acheivements";

// export const metadata = {
//   title: "Courses | Arbotrix Robotics",
//   description: "Learn robotics engineering, ROS2, and autonomous systems from industry professionals.",
// };

// export default function CoursesPage() {
//   return (
//     <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent-blue selection:text-white">
//       <Navbar />

//       {/* Hero — full bleed */}
//       <CoursesHero />

//       {/* Rest — constrained */}
//       <div className="pb-24 max-w-7xl mx-auto px-6 flex flex-col gap-24">
//         <CourseCards />
//         <Achievements />
//       </div>
//     </main>
//   );
// }

// // Inline hero so we don't need a separate file
// function CoursesHero() {
//   return (
//     <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop"
//         alt="Robot background"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/40" />

//       {/* Orbs */}
//       <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 pb-20">
//         <div className="inline-flex items-center gap-2 border border-accent-blue/40 bg-accent-blue/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
//           <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
//           <span className="font-mono text-xs uppercase tracking-widest text-accent-blue font-bold">
//             Now Enrolling
//           </span>
//         </div>

//         <h1 className="font-heading text-5xl md:text-7xl font-black text-white leading-none uppercase mb-6">
//           Learn Real <br />
//           <span className="text-accent-blue">Robotics.</span>
//         </h1>

//         <p className="font-body text-gray-300 text-xl leading-relaxed max-w-xl mb-8">
//           Industry-led courses on ROS2, autonomous navigation, and spatial AI.
//           Built by engineers who ship real hardware.
//         </p>

//         <div className="origin-left w-16 h-1 bg-accent-blue rounded-full" />
//       </div>
//     </section>
//   );
// }

import { Navbar } from "@/components/layout/Navbar";
import CatalogHero from "@/components/sections/courses/CatalogHero";
import CourseGrid from "@/components/sections/courses/CourseGrid";
import PreFooterCTA from "@/components/sections/home/PreFooterCTA"; 
// import { Footer } from "@/components/layout/Footer"; // Assuming you have this

export const metadata = {
  title: "Arbotrix Academy | Premium Robotics Courses",
  description: "Master ROS2, Autonomous Navigation, and Spatial AI in our intensive, physical lab cohorts.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* Hero Section - Imported cleanly from components */}
      <CatalogHero />

      {/* Content Grid */}
      <div className="pb-24 max-w-7xl mx-auto px-6 flex flex-col gap-24">
        <CourseGrid />
        
        {/* We can redesign your old Achievements block later if needed */}
        {/* <Achievements /> */}
      </div>

      {/* High-Converting Exit Intent */}
      <PreFooterCTA />
      
      {/* <Footer /> */}
    </main>
  );
}