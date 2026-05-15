import { Navbar } from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import NumbersBar from "@/components/sections/home/NumbersBar";
import FeaturedProject from "@/components/sections/home/FeaturedProject";
import HomeProductTeaser from "@/components/sections/home/HomeProductTeaser";
import TeamSection from "@/components/sections/home/TeamSection";
import EcosystemOrbit from "@/components/sections/home/EcosystemOrbit";
import PreFooterCTA from "@/components/sections/home/PreFooterCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0D14] text-white selection:bg-accent-blue selection:text-white">
      <Navbar />
      <Hero />
      {/* <WhatWeDo /> */}
      <NumbersBar />
      <FeaturedProject />
      {/* <EcosystemOrbit /> */}
      {/* <HomeProductTeaser /> */}
      <TeamSection />
      <PreFooterCTA />
    </main>
  );
}