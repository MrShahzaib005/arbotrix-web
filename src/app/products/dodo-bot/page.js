import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "@/components/layout/NavbarClient";
import { ChevronRight, Smartphone, Network, Server, Layers, Quote } from "lucide-react";

export const metadata = {
  title: "Dodo Delivery Robot | Arbotrix Engineering",
  description: "Self-contained autonomous vehicle engineered for secure, intelligent, multi-tray transport via Tailscale networking.",
};

export default function DodoBotProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white font-sans">
      
      <NavbarClient user={null} />

      {/* =========================================
          SECTION 1: THE CLINICAL HERO (LIGHT)
          ========================================= */}
      <section className="relative pt-24 pb-16 lg:pt-20 lg:pb-28 px-6 overflow-hidden">
        
        {/* Soft Blueprint Grid & Ambient Lab Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-cyan-100/50 blur-[120px] rounded-full pointer-events-none transition-all duration-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          <div className="flex flex-col">
            {/* Clinical Lab Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Internal Logistics
            </div>

            <h1 className="text-6xl lg:text-8xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-3 leading-[0.95] drop-shadow-sm">
              Dodo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Transport
              </span>
            </h1>

            <p className="text-2xl font-heading font-black text-slate-700 tracking-tight mb-2 uppercase">
              Autonomy, Uncompromised.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-xl font-medium">
              Meet the future of internal logistics. Dodo is a self-contained autonomous vehicle engineered for secure, intelligent, multi-tray transport. No simulators, just relentless, production-ready autonomy.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#tech-specs" className="flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
                View Specifications
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 font-heading font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow">
                Reserve Dodo <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* HIGH-DEF PRODUCT RENDER */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-100/60 blur-[80px] rounded-full -z-10" />
            <Image
              src="/images/dodo-x.png" // FIX: Ensure your image is named correctly in the public/images folder
              alt="Dodo Delivery Robot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] z-10 relative hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: THE "APPLE" SPEC RIBBON
          ========================================= */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center px-4">
              <Network className="w-6 h-6 text-cyan-600 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">Tailscale</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Encrypted Routing</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Smartphone className="w-6 h-6 text-blue-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">Flutter</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mobile UI</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Server className="w-6 h-6 text-indigo-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">ROS Bridge</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Telemetry Socket</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Layers className="w-6 h-6 text-slate-700 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">Multi-Tray</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Payload Config</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: ARCHITECTURE & FEATURES
          ========================================= */}
      <section id="tech-specs" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              System Architecture
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-4 drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Production
              </span>{" "}
              Ready
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Current industrial robots are either too rudimentary to adapt to changing environments, or too expensive to deploy at scale. We built the bridge: high-intelligence autonomy connected securely to edge devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 border border-cyan-100">
                <Network className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-heading font-black text-slate-900 mb-3 uppercase tracking-tight">Tailscale Integration</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                No local network vulnerability. Dodo routes all telemetry and command payloads through a secure Tailscale VPN, allowing remote access and fleet monitoring from anywhere in the world.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-black text-slate-900 mb-3 uppercase tracking-tight">Flutter Mobile Command</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Control the fleet directly from your pocket. We engineered a highly responsive Flutter mobile application that connects seamlessly to the robot's ROS bridge for real-time overrides and status checks.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 border border-slate-200">
                <Layers className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-heading font-black text-slate-900 mb-3 uppercase tracking-tight">Industrial Grade</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Built for warehouses and hospitality, not living rooms. Features true depth perception and spatial AI to navigate dynamic environments and execute precise delivery protocols with zero oversight.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: FOUNDER NOTE (BLOCKQUOTE)
          ========================================= */}
      <section className="py-24 px-6 bg-slate-100 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-cyan-300 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-8 uppercase tracking-tighter">
            Why we are building this.
          </h2>
          <p className="text-slate-600 text-xl italic leading-relaxed mb-10 font-medium">
            "At Arbotrix, I am building Dodo Bot to make advanced, autonomous robotics accessible and practical for the hospitality industry. My goal is to bridge the gap between expensive, imported technology and local business needs by engineering a smart, reliable service solution. I want to prove that cutting-edge AI and robotics can be developed locally to solve real-world operational challenges efficiently. Ultimately, Dodo Bot is our foundational step toward a broader vision of revolutionizing commercial automation and advancing into humanoid robotics."
          </p>
          <div className="inline-flex flex-col items-center">
            <h4 className="font-heading font-black text-slate-900 tracking-widest uppercase">Aqil Khan</h4>
            <p className="text-xs font-bold text-cyan-600 tracking-widest uppercase mt-1">CEO - Arbotrix</p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: BOTTOM CTA
          ========================================= */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-6 drop-shadow-sm">
            Deploy Dodo Today.
          </h2>
          <p className="text-slate-600 mb-10 font-medium text-lg leading-relaxed">
            Integrate intelligent internal logistics into your operations and eliminate workflow bottlenecks.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
            Reserve Hardware 
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}