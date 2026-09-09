"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Cpu, Crosshair, Network, Brain } from "lucide-react";
import TeamSection from "@/components/sections/home/TeamSection";

const FOUNDERS = [
  {
    name: "Muhammad Shahzaib",
    role: "Co-Founder & Lead Robotics Engineer",
    image: "/images/team/shahzaib.jpg",
    quote: "Simulations build false confidence. We founded Arbotrix because the industry needed a bridge between high-level ROS 2 logic and the physical realities of kinetic hardware. The future of autonomy isn't written in a terminal; it's proven in the dirt.",
    focus: "Full-Stack Autonomy, ROS 2 Navigation, Gazebo Environments"
  },
  {
    name: "Aqil Khan",
    role: "Co-Founder & Lead Hardware Engineer",
    image: "/images/team/aqil.jpg",
    quote: "Software is useless if the chassis shatters on impact. Our mandate is to engineer rugged, scalable physical platforms that allow advanced AI to operate in the real world without failure or hesitation.",
    focus: "Mechanical Chassis Architecture, Network Protocols, CAD"
  }
];

const ENGINEERING_TEAM = [
  {
    name: "Kashaf",
    role: "Computer Vision Engineer",
    icon: Crosshair,
    focus: "Spatial Perception & Object Tracking"
  },
  {
    name: "Hina",
    role: "Deep Learning Engineer",
    icon: Brain,
    focus: "Floor Classification & Edge AI Models"
  }
];

export default function AboutClient() {
  return (
    <>
      {/* =========================================
          SECTION 1: THE LAB MANIFESTO
          ========================================= */}
      <section className="relative pt-32 lg:pt-48 pb-20 px-6 border-b border-gray-200 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-600 mb-8">
              <Cpu className="w-4 h-4 text-blue-600" />
              Arbotrix Engineering HQ
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[1.05] mb-8">
              We Engineer <br />
              <span className="text-blue-600">Physical Reality.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Arbotrix is an industrial robotics firm and advanced engineering academy. We do not just write code; we design the sheet metal, wire the flight controllers, and train the deep learning models required to deploy true autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE CO-FOUNDERS
          ========================================= */}
      <section className="pt-24 px-6 max-w-[1400px] mx-auto">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Director's Log
          </h2>
          <div className="h-px bg-gray-200 flex-grow ml-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDERS.map((founder, i) => (
            <motion.div 
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-200 shrink-0 overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-black text-slate-300">
                    {founder.name.charAt(0)}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">{founder.name}</h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-4">{founder.role}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Network className="w-4 h-4 text-slate-400" />
                    {founder.focus}
                  </p>
                </div>
              </div>

              <div className="relative bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-100 -z-0" />
                <p className="relative z-10 text-slate-700 text-lg font-medium leading-relaxed italic">
                  "{founder.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          SECTION 3: CORE ENGINEERING TEAM
          ========================================= */}
      <section className="pt-24 px-6 max-w-[1400px] mx-auto">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Core Engineering
          </h2>
          <div className="h-px bg-gray-200 flex-grow ml-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_TEAM.map((engineer, i) => {
            const Icon = engineer.icon;
            return (
              <motion.div
                key={engineer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">{engineer.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    {engineer.role}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {engineer.focus}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <TeamSection/>
    </>
  );
}