// src/app/portfolio/page.js
import RobotShowcaseGrid from "@/components/sections/RobotShowcaseGrid";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Our Robotics Fleet</h1>
        <p className="mt-4 text-gray-400">Autonomous systems built for scale.</p>
      </section>

      {/* The Component she built */}
      <RobotShowcaseGrid />
      
      <Footer />
    </main>
  );
}