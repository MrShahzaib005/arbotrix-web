import { Navbar } from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import LabReportsSection from "@/components/sections/home/LabReportsSection";
import TeamSection from "@/components/sections/home/TeamSection";

import PreFooterCTA from "@/components/sections/home/PreFooterCTA";
import { HardwareShowcase } from "@/components/sections/home/HardwareShowcase";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import { CLIENT_TESTIMONIALS } from "@/data/testimonials";

export const metadata = {
  title: "Arbotrix | Engineering Autonomy",
  description:
    "Industrial autonomous systems and robotics engineering academy.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HardwareShowcase />
      <TestimonialGrid
        badge="Enterprise Proven"
        title="Trusted by Industry"
        subtitle="Our autonomous solutions and hardware chassis are actively accelerating R&D and operations for commercial partners."
        testimonials={CLIENT_TESTIMONIALS}
      />
      {/* <FeaturedCaseStudy /> */}
      <LabReportsSection />
      {/* <NumbersBar /> */}
      
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
