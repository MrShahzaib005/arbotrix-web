import { Navbar } from "@/components/layout/Navbar";
import FleetGrid from "@/components/sections/products/FleetGrid";

export const metadata = {
  title: "Our Fleet | Arbotrix Robotics",
  description: "Explore our lineup of autonomous kinetic platforms and industrial robotics.",
};

export default function ProductsHubPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-black selection:bg-accent-blue selection:text-white">
      <Navbar />
      <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-black">
            The <span className="text-accent-blue">Fleet.</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl">
            Our active R&D pipeline. Precision-engineered hardware built for specific industrial and commercial environments.
          </p>
        </div>
        <FleetGrid />
      </div>
    </main>
  );
}