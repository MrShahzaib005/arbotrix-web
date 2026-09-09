import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronRight, Battery, Crosshair, Shield, Layers, Cpu, Maximize, Activity } from "lucide-react";

export const metadata = {
  title: "Tera-X UGV | Arbotrix Engineering",
  description: "Industrial-grade autonomous mobile robot chassis featuring tab-and-slot sheet metal construction and ROS2 native integration.",
};

export default function TeraXProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      <div className="bg-[#0B0D14]">
        <Navbar />
      </div>

      {/* =========================================
          SECTION 1: THE CINEMATIC HERO (DARK)
          ========================================= */}
      <section className="relative bg-[#0B0D14] pt-24 pb-32 lg:pt-32 lg:pb-48 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Flagship UGV Platform
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter uppercase mb-4 leading-none">
              Tera-X
            </h1>
            
            <p className="text-2xl font-black text-cyan-400 tracking-tight mb-8">
              Industrial mobility. Zero payload compromise.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl font-medium">
              Engineered for volatile environments. The Tera-X is a heavily modified, autonomous-ready ground vehicle featuring laser-cut sheet metal architecture, native ROS2 integration, and real-time spatial mapping capabilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#technical-specs" className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                View Specifications
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-transparent border border-gray-700 text-white hover:border-gray-500 font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-2">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* TEMPORARY HERO IMAGE */}
          <div className="relative w-full aspect-square lg:h-[600px] bg-[#131620] border border-gray-800 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
            <Image 
              src="/public/images/tera-x.jpg" 
              alt="Tera-X UGV Chassis" 
              fill
              className="object-cover opacity-90"
              priority
            />
            {/* Grid overlay to make it look a bit more technical and hide AI artifacts */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 mix-blend-overlay pointer-events-none" />
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: THE "APPLE" SPEC RIBBON (WHITE)
          ========================================= */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center px-4">
              <Layers className="w-6 h-6 text-cyan-600 mb-3" />
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter">15<span className="text-lg">kg</span></h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Max Payload</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Battery className="w-6 h-6 text-emerald-500 mb-3" />
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter">8<span className="text-lg">hr</span></h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Operating Time</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Activity className="w-6 h-6 text-blue-500 mb-3" />
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter">ROS2</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Native Stack</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Maximize className="w-6 h-6 text-purple-500 mb-3" />
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter">45<span className="text-lg">mm</span></h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Ground Clearance</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: EXPLODED ENGINEERING VIEW
          ========================================= */}
      <section id="technical-specs" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
              Mechanical Integrity
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              We eliminated structural weak points. The Tera-X utilizes a custom tab-and-slot sheet metal architecture, eliminating the need for welded stress points and ensuring rapid component swapping in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* TEMPORARY CAD RENDER PLACEHOLDER */}
            <div className="bg-slate-100 border border-slate-200 rounded-3xl aspect-square flex items-center justify-center p-8 relative overflow-hidden shadow-inner group">
                <Image 
                  src="/public/images/tera-x.jpg" 
                  alt="Tera-X Engineering View" 
                  fill
                  className="object-cover mix-blend-multiply opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-color" />
            </div>

            {/* Engineering Features */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100 shadow-sm">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Tab-and-Slot Construction</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Precision laser-cut chassis plates interlock perfectly. This disperses kinetic payload weight across the entire frame rather than concentrating it on bolts and brackets.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100 shadow-sm">
                  <Cpu className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Modular Motor Cutouts</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Pre-engineered motor shaft mounting cutouts support high-torque DC motors. Easily scale from standard exploration drives to heavy-duty industrial pullers without modifying the base chassis.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100 shadow-sm">
                  <Crosshair className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Autonomy Ready</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Top-plate hardpoints are pre-drilled for RPLIDAR and OAK-D Lite stereoscopic cameras. Mount your Jetson Nano or Raspberry Pi 5 directly to the internal mounting rails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: BOTTOM CTA (DARK)
          ========================================= */}
      <section className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-6">
            Ready for Deployment
          </h2>
          <p className="text-slate-400 mb-10 font-medium">
            Stop fighting with brittle plastic prototypes. Upgrade to an industrial chassis built for actual computer vision and autonomous navigation tasks.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            Contact Engineering for Pricing <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}