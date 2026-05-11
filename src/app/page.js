import { Navbar } from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import NumbersBar from "@/components/sections/home/NumbersBar";
import FeaturedProject from "@/components/sections/home/FeaturedProject";
import HomeProductTeaser from "@/components/sections/home/HomeProductTeaser";
import FooterCTA from "@/components/sections/home/FooterCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-black selection:bg-accent-blue selection:text-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <NumbersBar />
      <FeaturedProject />
      <HomeProductTeaser />
      <FooterCTA />
    </main>
  );
}