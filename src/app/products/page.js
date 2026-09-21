import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "@/components/layout/NavbarClient";
import { ArrowRight, Cpu } from "lucide-react";

export const metadata = {
  title: "Hardware Catalog | Arbotrix Engineering",
  description: "Explore our fleet of autonomous ground, aerial, and spatial maintenance platforms.",
};

const HARDWARE_CATALOG = [
  {
    id: "dodo",
    name: "Dodo",
    classification: "Internal Logistics Robot",
    description: "Self-contained autonomous delivery vehicle engineered for secure, multi-tray transport. Controlled seamlessly via secure Tailscale remote networking and ROS bridge integration.",
    image: "/images/dodo-x.png", // NOTE: Replace with your actual Dodo-X transparent PNG
    accent: "text-cyan-600",
    bg: "bg-cyan-50",
    link: "/products/dodo-bot"
  },
  {
    id: "tera-x",
    name: "Tera-X",
    classification: "Unmanned Ground Vehicle (UGV)",
    description: "Industrial-grade autonomous mobile robot chassis featuring laser-cut steel construction, heavy-load wheel assemblies, and ROS2 native integration.",
    image: "/images/tera-x.png",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    link: "/products/tera-x"
  },
  {
    id: "optic-clean",
    name: "Optic-Clean",
    classification: "Autonomous Floor System",
    description: "Next-generation indoor maintenance powered by OAK-D spatial perception, LiDAR mapping, and MobileNetV2 edge classification.",
    image: "/images/optic-clean.png",
    accent: "text-indigo-600",
    bg: "bg-indigo-50",
    link: "/products/optic-clean"
  },
  {
    id: "aero-x",
    name: "Aero-X Drone",
    classification: "Aerial Reconnaissance UAV",
    description: "Quad-rotor architecture designed for real-time object tracking and perimeter mapping utilizing Pixhawk controllers and ArduPilot SITL simulation.",
    image: "/images/aero-x.png",
    accent: "text-orange-600",
    bg: "bg-orange-50",
    link: "/products/aero-x"
  },
  
];

export default function ProductsCatalogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans pb-24">
      <NavbarClient user={null} />

      {/* CATALOG HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
        {/* Soft Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-6">
            <Cpu className="w-4 h-4 text-blue-600" />
            Hardware Division
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-6 drop-shadow-sm">
            Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Fleet</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
            We don't just write software. We engineer the physical platforms that bring autonomous code into the real world. Select a platform to view technical specifications.
          </p>
        </div>
      </section>

      {/* CATALOG GRID */}
      <section className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HARDWARE_CATALOG.map((product) => (
            <Link 
              href={product.link} 
              key={product.id}
              className="group relative bg-white border border-slate-200 hover:border-blue-300 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col shadow-sm hover:shadow-xl"
            >
              {/* Image Container */}
              <div className={`h-64 sm:h-80 w-full relative overflow-hidden flex items-center justify-center p-8 border-b border-slate-100 ${product.bg}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] z-0" />
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700 ease-out z-10 drop-shadow-lg"
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                  {product.classification}
                </p>
                <h3 className={`font-heading font-black text-3xl uppercase tracking-tighter mb-4 transition-colors ${product.accent}`}>
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1 font-medium">
                  {product.description}
                </p>

                <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <span className={`text-xs font-heading font-black uppercase tracking-widest transition-colors ${product.accent}`}>
                    View Specifications
                  </span>
                  <ArrowRight className={`w-5 h-5 transform group-hover:translate-x-2 transition-transform ${product.accent}`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}