import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Map, Cpu, Truck, HardHat, Factory, ShieldCheck, GraduationCap, Wrench, Weight, Mountain, MapPin } from "lucide-react";
import { NavbarClient } from "@/components/layout/NavbarClient"; 

export const metadata = {
  title: "Tera-X Case Study | Arbotrix",
  description: "Engineering a rugged all-terrain UGV for heavy payloads and long-distance off-road work.",
};

export default function TeraXCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      <NavbarClient user={null} />

      {/* =========================================
          PAGE 1: HERO / COVER
          ========================================= */}
      <section className="relative pt-32 lg:pt-30 pb-18 px-6 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-sm font-bold uppercase tracking-widest transition-colors mb-2 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Base
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
                Project Case Study
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-6">
                TERA-X <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  UGV Platform.
                </span>
              </h1>
              
              <p className="text-lg md:text-md text-slate-600 font-medium leading-relaxed mb-8">
                Rugged all-terrain robot for heavy payloads and long-distance off-road work[cite: 11]. Designed and built by Arbotrix Robotics Lab in H-13, Islamabad, Pakistan[cite: 11].
              </p>

              <div className="flex flex-col gap-3">
                <div className="bg-slate-100 rounded-2xl p-4 border-l-[6px] border-amber-500 shadow-sm">
                  <h4 className="text-xl font-heading font-black text-slate-900 leading-tight">Up to ~200 kg</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">payload capacity[cite: 11]</p>
                </div>
                <div className="bg-slate-100 rounded-2xl p-4 border-l-[6px] border-amber-500 shadow-sm">
                  <h4 className="text-xl font-heading font-black text-slate-900 leading-tight">All-terrain</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">long-distance off-road[cite: 11]</p>
                </div>
                <div className="bg-slate-100 rounded-2xl p-4 border-l-[6px] border-amber-500 shadow-sm">
                  <h4 className="text-xl font-heading font-black text-slate-900 leading-tight">ROS2</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">navigation & mapping ready[cite: 11]</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[400px] bg-white border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden flex items-center justify-center p-8">
               <div className="absolute bottom-10 w-3/4 h-20 bg-amber-400/20 blur-[50px] rounded-full pointer-events-none" />
               <Image 
                src="/images/tera-x.png" 
                alt="Tera-X UGV"
                fill
                className="object-contain p-8 drop-shadow-2xl hover:scale-105 transition-transform duration-700 relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PAGE 2: OVERVIEW
          ========================================= */}
      <section className="py-20 px-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Tera-X Overview</h2>
            <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Overview
            </h3>
            <div className="w-16 h-1 bg-amber-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">What is Tera-X?</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Tera-X is a rugged, all-terrain unmanned ground vehicle (UGV) designed and built at Arbotrix. Inspired by industry-standard Husky-class architectures, it is a mobile platform for heavy payloads, outdoor spatial mapping and advanced ROS2 navigation research[cite: 11].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">The Challenge</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Moving heavy material across farms, construction sites, industrial yards and rough outdoor ground is slow, tiring and often unsafe for people. Most indoor robots cannot handle uneven terrain, and imported field robots are expensive and hard to service locally[cite: 11].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">Our Approach</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our team engineered Tera-X end to end: mechanical chassis, electronics, drive system and software. The result is a locally built, serviceable platform that can carry serious loads over long distances off-road and be extended with sensors and autonomy for each customer[cite: 11].
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Key Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { num: "01", title: "Heavy Payload", desc: "Built to carry loads of up to around 200 kg on its rugged frame and roof cargo rack[cite: 11]." },
              { num: "02", title: "Off-Road Mobility", desc: "Large lug-tread tyres and a low, wide stance for dirt, gravel, grass and uneven ground[cite: 11]." },
              { num: "03", title: "Long-Distance Operation", desc: "Designed for extended outdoor runs rather than short indoor trips[cite: 11]." },
              { num: "04", title: "Outdoor Mapping", desc: "A stable base for spatial mapping and sensor experiments in real outdoor environments[cite: 11]." },
              { num: "05", title: "ROS2 Ready", desc: "Built for ROS2-based navigation research and custom autonomy development[cite: 11]." },
              { num: "06", title: "Safety First", desc: "Emergency-stop button, front bumper, LED light bars and a front status display[cite: 11]." }
            ].map((cap) => (
              <div key={cap.num} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-start shadow-sm">
                <span className="text-4xl font-heading font-black text-amber-500 mb-4">{cap.num}</span>
                <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-3">{cap.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* FIX: Built in Pakistan Block - Shifted to Dark Slate for a premium look */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 shadow-inner">
              <MapPin className="w-8 h-8 text-amber-500" />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Built in Pakistan</h4>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-300">
                Tera-X shows what a local team can deliver: a field-ready robotic platform designed, fabricated, wired and programmed in-house at our H-13 Islamabad lab[cite: 11].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PAGE 3: DESIGN & BUILD
          ========================================= */}
      <section className="py-20 px-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Tera-X Design & Build</h2>
            <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Design & Build
            </h3>
            <div className="w-16 h-1 bg-amber-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-4">Built for the real world</h4>
              <p className="text-slate-600 leading-relaxed font-medium mb-10">
                Every Tera-X is designed in CAD, then fabricated, assembled and tested by our team at the Arbotrix lab[cite: 11].
              </p>
              
              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-6">Design highlights</h4>
              <ul className="flex flex-col gap-4 text-slate-600 font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Roof cargo rack with mesh deck for bulky loads[cite: 11]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Four large lug-tread tyres for grip on loose ground[cite: 11]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Enclosed chassis that keeps electronics protected[cite: 11]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Front status display and LED light bars[cite: 11]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Red emergency-stop button and front bumper[cite: 11]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Modular top deck for sensors, compute and tools[cite: 11]</li>
              </ul>
            </div>
            <div className="relative w-full h-[500px]">
              <Image src="/images/tera-x.png" alt="Tera-X Platform Architecture" fill className="object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PAGE 4: SPECIFICATIONS & APPLICATIONS
          ========================================= */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Specs */}
            <div>
              <div className="mb-10">
                <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Tera-X Specifications</h2>
                <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                  Specifications
                </h3>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">Platform at a glance</p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="divide-y divide-slate-200">
                  {[
                    { label: "Platform type", val: "Unmanned Ground Vehicle (UGV), all-terrain[cite: 11]" },
                    { label: "Architecture", val: "Husky-class rugged mobile platform[cite: 11]" },
                    { label: "Payload capacity", val: "Up to ~200 kg[cite: 11]" },
                    { label: "Operating terrain", val: "Off-road: dirt, gravel, grass, uneven outdoor ground[cite: 11]" },
                    { label: "Operating range", val: "Long-distance outdoor operation[cite: 11]" },
                    { label: "Wheels", val: "4 x large lug-tread off-road tyres[cite: 11]" },
                    { label: "Software", val: "ROS2-based navigation and mapping[cite: 11]" },
                    { label: "Cargo", val: "Roof rack with mesh deck[cite: 11]" },
                    { label: "Safety", val: "Emergency-stop button, front bumper, LED indicators[cite: 11]" },
                    { label: "Interface", val: "Front status display[cite: 11]" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center p-5 hover:bg-white transition-colors">
                      <span className="w-1/3 text-[11px] font-black text-amber-600 uppercase tracking-widest mb-1 sm:mb-0">
                        {spec.label}
                      </span>
                      <span className="w-2/3 text-sm font-bold text-slate-900">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Applications Grid */}
            <div>
              <div className="mb-20">
                <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Applications</h2>
                <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                  Where Tera-X fits
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Agriculture", desc: "Hauling crops, feed and tools across fields and farms[cite: 11]." },
                  { title: "Construction sites", desc: "Moving materials and equipment over rough ground[cite: 11]." },
                  { title: "Industrial yards", desc: "Outdoor logistics between sheds, stores and loading areas[cite: 11]." },
                  { title: "Security & patrol", desc: "A base for perimeter monitoring with cameras and sensors[cite: 11]." },
                  { title: "Research & education", desc: "A real ROS2 platform for navigation, SLAM and autonomy studies[cite: 11]." },
                  { title: "Field support", desc: "Carrying supplies and equipment in remote or difficult areas[cite: 11]." }
                ].map((app, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:border-amber-400 transition-all">
                    <h4 className="text-sm font-heading font-black text-slate-900 uppercase mb-2">{app.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}