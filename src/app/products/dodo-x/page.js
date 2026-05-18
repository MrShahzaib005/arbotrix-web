import { Navbar } from "@/components/layout/Navbar";
import ProductsHero from "@/components/sections/products/ProductsHero";

export const metadata = {
  title: "Products | Arbotrix Robotics",
  description: "Explore the Dodo-X autonomous service vehicle and our line of industrial hardware.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white overflow-hidden">
      <Navbar />

      {/* The Dodo-X Hero Showcase */}
      <ProductsHero />

      {/* You can add more product feature sections below this later */}
      
    </main>
  );
}