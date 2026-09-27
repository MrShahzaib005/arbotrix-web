import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Zap, Navigation, Eye, Layers, Lock, LayoutDashboard, Smile } from "lucide-react";
import { NavbarClient } from "@/components/layout/NavbarClient"; 

export const metadata = {
  title: "Dodo Case Study | Arbotrix",
  description: "Autonomous delivery robot for restaurants and indoor service spaces.",
};

export default function DodoCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      <NavbarClient user={null} />

      {/* =========================================
          PAGE 1: HERO / COVER
          ========================================= */}
      <section className="relative pt-32 lg:pt-30 pb-18 px-6 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
                Project Case Study
              </div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-6">
                DODO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
                  Service Robot.
                </span>
              </h1>
              
              <p className="text-lg md:text-md text-slate-600 font-medium leading-relaxed mb-8">
                Autonomous delivery robot for restaurants and indoor service spaces[cite: 11]. Dodo is a self-contained autonomous delivery robot built at Arbotrix for secure, multi-tray transport[cite: 11].
              </p>
            </div>

            <div className="relative w-full h-[400px] bg-white border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden flex items-center justify-center p-8">
               {/* Ambient glow to match Dodo's LED base */}
               <div className="absolute bottom-10 w-3/4 h-20 bg-cyan-400/20 blur-[50px] rounded-full pointer-events-none" />
               <Image 
                src="/images/dodo-x.png" 
                alt="Dodo Service Robot"
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
            <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2">Dodo Overview</h2>
            <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Overview
            </h3>
            <div className="w-16 h-1 bg-cyan-500 mt-4" />
          </div>

          {/* 3-Column Split exactly like PDF Page 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">What is Dodo?</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Dodo is a self-contained autonomous delivery robot built at Arbotrix for secure, multi-tray transport. It maps its surroundings, plans its own path to each table and avoids people on the way[cite: 10].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">The Challenge</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                In a busy restaurant, staff spend much of their shift walking between the kitchen and tables carrying heavy trays. At peak hours this slows service and tires the team. Imported service robots are costly and hard to repair or customise locally[cite: 10].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-4">Our Approach</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                We built Dodo end to end in our lab, from the drive system and electronics to the navigation software. It runs on a modern ROS2 stack with LIDAR mapping and on-camera AI, and is designed to be easy to service in Pakistan[cite: 10].
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Key Capabilities
            </h3>
          </div>

          {/* Numbered Grid matching PDF Page 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { num: "01", title: "Autonomous Navigation", desc: "LIDAR SLAM mapping, AMCL localisation and Nav2 path planning to reach each table[cite: 10]." },
              { num: "02", title: "AI Obstacle Detection", desc: "OAK-D camera runs spatial object detection on its own chip, so people and objects are seen in 3D[cite: 10]." },
              { num: "03", title: "Multi-Tray Delivery", desc: "Four trays carry several orders in one trip from kitchen to tables[cite: 10]." },
              { num: "04", title: "Secure Remote Control", desc: "Monitored and controlled over encrypted Tailscale networking with ROS bridge integration[cite: 10]." },
              { num: "05", title: "Live Dashboard", desc: "Robot status, map and detections shown live on a tablet dashboard[cite: 10]." },
              { num: "06", title: "Friendly Interface", desc: "Expressive face display and an order-status screen that guests understand at a glance[cite: 10]." }
            ].map((cap) => (
              <div key={cap.num} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-start shadow-sm">
                <span className="text-4xl font-heading font-black text-cyan-500 mb-4">{cap.num}</span>
                <h4 className="text-lg font-heading font-black text-slate-900 uppercase mb-3">{cap.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Engineering Insight Block */}
          <div className="bg-cyan-900 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-cyan-800 flex items-center justify-center shrink-0 border border-cyan-700">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">Engineering Insight</h4>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Object detection runs on the OAK-D camera's own chip, keeping the main computer free for navigation and mapping[cite: 10].
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
            <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2">Dodo Design & Build</h2>
            <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Design & Build
            </h3>
            <div className="w-16 h-1 bg-cyan-500 mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-4">Designed for busy service floors</h4>
              <p className="text-slate-600 leading-relaxed font-medium mb-10">
                Dodo combines a compact round body with a tall tray tower, so it can move through narrow aisles between tables while carrying several orders at once[cite: 10].
              </p>
              
              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-6">Design highlights</h4>
              <ul className="flex flex-col gap-4 text-slate-600 font-medium mb-10">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> 4-tier tray tower for multiple orders per trip[cite: 10]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Expressive face display that makes guests comfortable[cite: 10]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Order-status touchscreen showing order number and progress[cite: 10]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Front depth camera (OAK-D) for 3D obstacle detection[cite: 10]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> 2D LIDAR for mapping and localisation[cite: 10]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> LED light ring so people can see the robot moving[cite: 10]</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Compact round footprint (about 45-50 cm) for tight spaces[cite: 10]</li>
              </ul>

              <h4 className="text-xl font-heading font-black text-slate-900 uppercase mb-4">Built for reliability</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                We wrote a custom USB watchdog that automatically power-cycles the LiDAR if it stops responding, so the robot recovers on its own instead of stopping mid-shift[cite: 10].
              </p>
            </div>
            <div className="relative w-full h-[600px]">
              <Image src="/images/dodo-x.png" alt="Dodo Architecture" fill className="object-contain drop-shadow-xl" />
            </div>
          </div>

          {/* How a delivery works - 4 Step Process from Page 3 */}
          <div>
            <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-10 text-center">
              How a Delivery Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Load", desc: "Kitchen staff place orders on the trays[cite: 10]." },
                { step: "2", title: "Assign", desc: "Staff choose the table from the screen or dashboard[cite: 10]." },
                { step: "3", title: "Navigate", desc: "Dodo drives itself to the table, avoiding people and chairs[cite: 10]." },
                { step: "4", title: "Serve & return", desc: "Guests pick up their food and Dodo returns to base[cite: 10]." }
              ].map((item) => (
                <div key={item.step} className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm relative overflow-hidden group hover:border-cyan-400 transition-all">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-6">
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
                <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2">Dodo Technology</h2>
                <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                  Technology Stack
                </h3>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">Under the hood</p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="divide-y divide-slate-200">
                  {[
                    { label: "Robot type", val: "Autonomous indoor delivery / service robot[cite: 10]" },
                    { label: "Software framework", val: "ROS2 Humble[cite: 10]" },
                    { label: "Navigation", val: "Nav2 with AMCL localisation and MPPI controller[cite: 10]" },
                    { label: "Mapping sensor", val: "RPLidar 2D LIDAR (SLAM)[cite: 10]" },
                    { label: "Vision & AI", val: "Luxonis OAK-D with on-chip Mobile Net-SSD spatial detection[cite: 10]" },
                    { label: "Remote access", val: "Tailscale secure networking + ROS bridge[cite: 10]" },
                    { label: "Trays", val: "4 tiers[cite: 10]" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center p-5 hover:bg-white transition-colors">
                      <span className="w-1/3 text-[11px] font-black text-cyan-600 uppercase tracking-widest mb-1 sm:mb-0">
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
                <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2">Applications</h2>
                <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
                  Where Dodo fits
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Restaurants & cafés", desc: "Delivering food and collecting empty dishes[cite: 10]." },
                  { title: "Hotels", desc: "Room service and lobby deliveries[cite: 10]." },
                  { title: "Hospitals & clinics", desc: "Moving meals and supplies between wards[cite: 10]." },
                  { title: "Office cafeterias", desc: "Serving staff in large corporate canteens[cite: 10]." },
                  { title: "Banquets & events", desc: "Serving guests during large functions[cite: 10]." },
                  { title: "Malls & food courts", desc: "Delivering orders across busy seating areas[cite: 10]." }
                ].map((app, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:border-cyan-300 transition-all">
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