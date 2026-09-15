import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "@/components/layout/NavbarClient"; // Assuming you are using the client navbar here
import { ChevronRight, Battery, Crosshair, Shield, Layers, Cpu, Maximize, Activity, Box } from "lucide-react";

export const metadata = {
  title: "Tera-X UGV | Arbotrix Engineering",
  description: "Industrial-grade autonomous mobile robot chassis featuring tab-and-slot sheet metal construction and ROS2 native integration.",
};

export default function TeraXProductPage() {
  return (
    // FIX: Unified under the light theme blueprint
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans">

      {/* FIX: Removed the bg-[#0B0D14] wrapper that was causing the black bar at the top */}
      <NavbarClient user={null} />

      {/* =========================================
          SECTION 1: THE CLINICAL HERO (LIGHT)
          ========================================= */}
      <section className="relative pt-30 pb-18 lg:pt-13 lg:pb-15 px-6 overflow-hidden">

        {/* Soft Blueprint Grid & Ambient Lab Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none transition-all duration-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />

        {/* FIX: Tightened mobile grid gap from gap-12 to gap-6 */}
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          <div className="flex flex-col">
            {/* Clinical Lab Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Flagship UGV Platform
            </div>

            {/* Heavy Slate Headline */}
            <h1 className="text-6xl lg:text-8xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-3 leading-none drop-shadow-sm">
              Tera-X
            </h1>

            <p className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 tracking-tight mb-4">
              Industrial mobility. Zero payload compromise.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-5 max-w-xl font-medium">
              Engineered for volatile environments. The Tera-X is a heavily modified, autonomous-ready ground vehicle featuring a laser-cut steel base frame, native ROS2 integration, and real-time spatial mapping capabilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#technical-specs" className="flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
                View Specifications
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 font-heading font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* HIGH-DEF PRODUCT RENDER */}
          {/* FIX: Removed 'aspect-square'. Added explicitly scaled heights: h-[280px] sm:h-[400px] lg:h-[550px] */}
          <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[550px] flex items-center justify-center group">
            {/* Soft floor shadow to ground the heavy machine on the white background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100/60 blur-[80px] rounded-full -z-10" />
            <Image
              src="/images/tera-x.png"
              alt="Tera-X UGV Chassis"
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
              <Layers className="w-6 h-6 text-blue-500 mb-3" />
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tighter">150<span className="text-lg text-slate-500">kg</span></h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Max Payload</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Battery className="w-6 h-6 text-cyan-500 mb-3" />
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tighter">8<span className="text-lg text-slate-500">hr</span></h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Operating Time</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Activity className="w-6 h-6 text-indigo-500 mb-3" />
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tighter">ROS2</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Native Stack</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Maximize className="w-6 h-6 text-slate-700 mb-3" />
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tighter">60<span className="text-lg text-slate-500">mm</span></h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ground Clearance</p>
            </div>
          </div>
        </div>
      </section>

    
      {/* =========================================
          SECTION 3: EXPLODED ENGINEERING VIEW
          ========================================= */}
      <section id="technical-specs" className="relative py-18 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-15">
            {/* FIX: Injected the clinical hardware tag with the pulsing blue indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Chassis Architecture
            </div>
            
            {/* FIX: Broke up the solid block with the Tera-X blue-to-cyan gradient */}
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-4 drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Mechanical
              </span>{" "}
              Integrity
            </h2>
            
            <p className="text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              We eliminated structural weak points. The Tera-X utilizes a 2D laser-cut steel base frame engineered in Autodesk Fusion 360, guaranteeing precision tolerances for heavy-load operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* FIX: Removed 'aspect-square' and replaced it with controlled heights (h-[350px] lg:h-[420px]) */}
            <div className="bg-white border border-slate-200 rounded-3xl w-full h-[350px] lg:h-[420px] flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-sm group">
                {/* Blueprint Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60" />
                
                <div className="relative z-10 flex flex-col items-center">
                    {/* Pulsing Core */}
                    <div className="w-24 h-24 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center mb-8 relative shadow-inner">
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20" />
                        <Box className="w-10 h-10 text-blue-600" />
                    </div>
                    
                    {/* System Status Tags */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        Awaiting CAD Render
                    </div>
                    
                    <p className="text-slate-400 text-xs font-mono tracking-wider">
                      FUSION_360_ASSET_PENDING
                    </p>
                </div>

                {/* Scanning Line Animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-[scan_3s_ease-in-out_infinite]" />
            </div>

            {/* Engineering Features */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Laser-Cut Steel Architecture</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Engineered from precision 2D laser-cut steel and reinforced with heavy-duty L-brackets. This modular construction disperses kinetic payload weight across the frame and allows for rapid component swapping.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Heavy-Load Wheel Assembly</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    The pre-engineered chassis plates feature reinforced wheel shaft locks and specialized fastener patterns to support high-torque DC motors without compromising or twisting the base frame.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                  <Crosshair className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Autonomy Ready</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Top-plate hardpoints are pre-drilled for RPLiDAR and OAK-D Lite stereoscopic cameras. Mount your Jetson Nano or Raspberry Pi 5 directly to the internal mounting rails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* =========================================
          SECTION 4: BOTTOM CTA (LIGHT THEME)
          ========================================= */}
      {/* FIX: Converted to bg-white with a sharp slate-200 top border */}
      <section className="bg-white py-24 px-6 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          {/* FIX: Inverted text to slate-900 */}
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-6 drop-shadow-sm">
            Ready for Deployment.
          </h2>
          <p className="text-slate-600 mb-10 font-medium text-lg leading-relaxed">
            Stop fighting with brittle plastic prototypes. Upgrade to an industrial chassis built for actual computer vision and autonomous navigation tasks.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
            Contact Engineering for Pricing 
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}