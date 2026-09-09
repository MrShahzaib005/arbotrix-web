import { Navbar } from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
// import NumbersBar from "@/components/sections/home/NumbersBar";
// import FeaturedProject from "@/components/sections/home/FeaturedProject";
// import HomeProductTeaser from "@/components/sections/home/HomeProductTeaser";
import TeamSection from "@/components/sections/home/TeamSection";
// import EcosystemOrbit from "@/components/sections/home/EcosystemOrbit";
import PreFooterCTA from "@/components/sections/home/PreFooterCTA";
import { HardwareShowcase } from "@/components/sections/home/HardwareShowcase";
// import RobotShowcaseGrid from "@/components/sections/RobotShowcaseGrid";
// import ProductTeaser from "@/components/sections/ProductTeaser";

export const metadata = {
  title: "Arbotrix | Engineering Autonomy",
  description: "Industrial autonomous systems and robotics engineering academy.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <HardwareShowcase />
      
      {/* <NumbersBar /> */}
      <WhatWeDo />
      {/* <FeaturedProject /> */}
      {/* <EcosystemOrbit /> */}
      {/* <RobotShowcaseGrid /> */}
      {/* <ProductTeaser /> */}
      {/* <HomeProductTeaser /> */}
      
      <TeamSection />
      <PreFooterCTA />
    </main>
  );
}