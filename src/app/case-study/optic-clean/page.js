import Image from "next/image";
import { 
  Map, 
  Grid, 
  ShieldAlert, 
  Eye, 
  Cpu, 
  Maximize, 
  MapPin, 
  Factory, 
  Warehouse, 
  Briefcase, 
  Home, 
  Store, 
  Stethoscope 
} from "lucide-react";
import { NavbarClient } from "@/components/layout/NavbarClient"; 

export const metadata = {
  title: "Optic-Clean Case Study | Arbotrix",
  description: "AI-powered autonomous cleaning robot for homes, offices and factory floors.",
};

export default function OpticCleanCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <NavbarClient user={null} />

      {/* =========================================
          PAGE 1: HERO / COVER
          ========================================= */}
      <section className="relative pt-32 lg:pt-30 pb-18 px-6 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
                PROJECT CASE STUDY // AUTONOMOUS FLOOR SYSTEM
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-6">
                OPTIC-CLEAN. <br />
              </h1>
              
              <p className="text-lg md:text-md text-slate-600 font-medium leading-relaxed mb-8">
                AI-powered autonomous cleaning robot for homes, offices and factory floors[cite: 13]. Designed and built by Arbotrix Robotics Lab in H-13, Islamabad, Pakistan[cite: 13].
              </p>

              <div className="flex flex-col gap-3">
                <div className="bg-slate-100 rounded-2xl p-4 border-l-[6px] border-blue-500 shadow-sm">
                  <h4 className="text-xl font-heading font-black text-slate-900 leading-tight">LIDAR mapping</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">maps every room it cleans[cite: 13]</p>
                </div>
                <div className="bg-slate-100 rounded-2xl p-4 border-l-[6px] border-blue-500 shadow-sm">
                  <h4 className="text-xl font-heading font-black text-slate-900 leading-tight">OAK-D vision</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">3D spatial perception[cite: 13]</p>
                </div>
                <div className="bg-slate-100 rounded-2xl p-4 border-l-[6px] border-blue-500 shadow-sm">
                  <h4 className="text-xl font-heading font-black text-slate-900 leading-tight">Edge AI</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1">on-device classification[cite: 13]</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[400px] bg-white border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden flex items-center justify-center p-8">
               <div className="absolute bottom-10 w-3/4 h-20 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
               <Image 
                src="/images/optic-clean.png" 
                alt="Optic-Clean Robot"
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
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Optic-Clean Overview</h2>
            <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Overview
            </h3>
            <div className="w-16 h-1 bg-blue-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">What is Optic-Clean?</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Optic-Clean is a large autonomous cleaning robot built at Arbotrix. It maps its surroundings with LiDAR, understands them with a 3D camera and on-device AI, and follows precise cleaning patterns across homes, offices and factory floors[cite: 13].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">The Challenge</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Keeping large floors clean every day takes hours of repetitive manual work. Areas get missed, quality varies from shift to shift, and in factories people and forklifts are always moving. Small home robot vacuums cannot handle spaces of this size[cite: 13].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">Our Approach</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our team built a full-size cleaning robot that navigates on its own. It builds a map of the space, plans complete coverage, and uses 3D vision and AI to react to people and objects that move in its path[cite: 13].
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
              { num: "01", title: "Room mapping", desc: "LIDAR builds an accurate map of every room and area the robot cleans[cite: 13]." },
              { num: "02", title: "Precise cleaning patterns", desc: "Plans organised coverage paths so the whole floor is cleaned, not just random passes[cite: 13]." },
              { num: "03", title: "Dynamic obstacle avoidance", desc: "Sees and avoids people, furniture and moving equipment in real time[cite: 13]." },
              { num: "04", title: "3D spatial perception", desc: "OAK-D depth camera measures how far objects are, not just where they are[cite: 13]." },
              { num: "05", title: "Edge AI", desc: "MobileNetV2 classification runs on the robot itself, with no cloud needed[cite: 13]." },
              { num: "06", title: "Built for large spaces", desc: "A full-size body for whole houses, offices and factory areas[cite: 13]." }
            ].map((cap) => (
              <div key={cap.num} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-start shadow-sm">
                <span className="text-4xl font-heading font-black text-blue-500 mb-4">{cap.num}</span>
                <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-3">{cap.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Premium Dark "Built in Pakistan" Block */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 shadow-inner">
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Built in Pakistan</h4>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-300">
                Optic-Clean is designed, built and programmed in-house at our H-13 Islamabad lab, so it can be supported and customised locally[cite: 13].
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
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Optic-Clean Design & Build</h2>
            <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Design & Build
            </h3>
            <div className="w-16 h-1 bg-blue-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-4">Built for big floors</h4>
              <p className="text-slate-600 leading-relaxed font-medium mb-10">
                A rugged, full-size body with sensors at the front, so Optic-Clean can work through large open areas as well as rooms and corridors[cite: 13].
              </p>
              
              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-6">Design highlights</h4>
              <ul className="flex flex-col gap-4 text-slate-600 font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Front bumper with integrated sensors and cameras[cite: 13]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Full-width cleaning deck close to the floor[cite: 13]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Large enclosed body for long cleaning sessions[cite: 13]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Rear handlebar for manual driving when needed[cite: 13]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Rounded shape that moves easily around objects[cite: 13]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Tough, easy-to-clean outer shell[cite: 13]</li>
              </ul>
            </div>
            <div className="relative w-full h-[500px]">
              <Image src="/images/optic-clean.png" alt="Optic-Clean Architecture" fill className="object-contain drop-shadow-xl" />
            </div>
          </div>

          {/* How it cleans - 4 Step Process from Page 3 */}
          <div>
            <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-10 text-center">
              How it cleans
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Map", desc: "Drives the area once to build a LIDAR map[cite: 13]." },
                { step: "2", title: "Plan", desc: "Creates a precise path that covers the whole floor[cite: 13]." },
                { step: "3", title: "Clean", desc: "Follows the pattern and avoids anything in its way[cite: 13]." },
                { step: "4", title: "Repeat", desc: "Reuses the map for the next cleaning run[cite: 13]." }
              ].map((item) => (
                <div key={item.step} className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm relative overflow-hidden group hover:border-blue-400 transition-all">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-6">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PAGE 4: TECHNOLOGY & APPLICATIONS
          ========================================= */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Tech Stack */}
            <div>
              <div className="mb-10">
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Optic-Clean Technology</h2>
                <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                  Platform at a glance
                </h3>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="divide-y divide-slate-200">
                  {[
                    { label: "Robot type", val: "Autonomous floor-cleaning robot[cite: 13]" },
                    { label: "Environments", val: "Homes, offices, factories and other large indoor floors[cite: 13]" },
                    { label: "Mapping", val: "LiDAR-based room mapping[cite: 13]" },
                    { label: "Perception", val: "OAK-D spatial (3D depth) camera[cite: 13]" },
                    { label: "On-device AI", val: "MobileNetV2 edge classification[cite: 13]" },
                    { label: "Navigation", val: "Map-based coverage with precise cleaning patterns[cite: 13]" },
                    { label: "Obstacle handling", val: "Real-time dynamic obstacle avoidance[cite: 13]" },
                    { label: "Manual control", val: "Rear handlebar[cite: 13]" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center p-5 hover:bg-white transition-colors">
                      <span className="w-1/3 text-[11px] font-black text-blue-600 uppercase tracking-widest mb-1 sm:mb-0">
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
              <div className="mb-10">
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Applications</h2>
                <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                  Where Optic-Clean fits
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Factories", icon: Factory, desc: "Daily cleaning of production floors and aisles[cite: 13]." },
                  { title: "Warehouses", icon: Warehouse, desc: "Large open floors between racks and loading areas[cite: 13]." },
                  { title: "Offices", icon: Briefcase, desc: "Corridors, lobbies and open work areas after hours[cite: 13]." },
                  { title: "Homes", icon: Home, desc: "Whole-house cleaning for large residences[cite: 13]." },
                  { title: "Malls & retail", icon: Store, desc: "Busy floors that need cleaning while people move around[cite: 13]." },
                  { title: "Hospitals & schools", icon: Stethoscope, desc: "Consistent, repeatable cleaning of long corridors[cite: 13]." }
                ].map((app, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-400 transition-all flex flex-col items-center text-center">
                    <app.icon className="w-6 h-6 text-slate-400 mb-3" />
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