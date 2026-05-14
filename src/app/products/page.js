import { Navbar } from "@/components/layout/Navbar";
import ProductHeroWaitlist from "@/components/sections/ProductHeroWaitlist";
import ProductFeatures from "@/components/sections/ProductFeatures";
import FounderNote from "@/components/sections/FounderNote";

export const metadata = {
  title: "Project Tera-X | Arbotrix Robotics",
  description: "Join the waitlist for our next-generation autonomous platform.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent-blue selection:text-white flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 space-y-32">
        <ProductHeroWaitlist />
        <ProductFeatures />
        <FounderNote />
      </div>
    </main>
  );
}