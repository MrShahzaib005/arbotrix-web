"use client";
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

// The Technical Pipeline: Upgraded from generic terms to robotics engineering protocols
const PIPELINE = [
  {
    phase: "01",
    title: "System Architecture",
    desc: "Defining payload limits, sensor arrays, and ROS 2 node topologies."
  },
  {
    phase: "02",
    title: "Digital Twin Simulation",
    desc: "Validating kinematic modeling and SLAM navigation in Gazebo environments."
  },
  {
    phase: "03",
    title: "Physical Prototyping",
    desc: "Custom sheet metal fabrication, PCB routing, and actuator integration."
  },
  {
    phase: "04",
    title: "Edge Deployment",
    desc: "Flashing AI perception models, tuning PID controllers, and field testing."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 w-full overflow-hidden font-sans">
      
      {/* Section Header */}
      <div className="mb-20 text-center max-w-2xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
        >
          <Workflow className="w-3.5 h-3.5" />
          <span>Deployment Protocol</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-slate-900 mb-4">
          Engineered for <br className="md:hidden" /> Predictability.
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
          We eliminate hardware risks by strictly separating digital simulation from physical assembly.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* DESKTOP: Horizontal Background Track */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-slate-200" />
        
        {/* MOBILE: Vertical Background Track */}
        <div className="md:hidden absolute top-0 left-6 w-[2px] h-full bg-slate-200" />

        {/* DESKTOP: Animated Fill Line */}
        <motion.div 
          className="hidden md:block absolute top-6 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* MOBILE: Animated Fill Line */}
        <motion.div 
          className="md:hidden absolute top-0 left-6 w-[2px] bg-gradient-to-b from-blue-600 to-cyan-500 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* The Pipeline Nodes */}
        <div className="relative flex flex-col md:flex-row justify-between w-full gap-10 md:gap-4">
          {PIPELINE.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.2) }}
              className="flex md:flex-col items-start md:items-center relative pl-16 md:pl-0"
            >
              {/* The Node Dot */}
              <div className="absolute left-2 md:left-auto md:relative top-0 md:top-auto w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-[0_8px_20px_rgba(0,0,0,0.05)] md:mb-6 group cursor-default">
                <div className="font-heading font-black text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                  {step.phase}
                </div>
                {/* Glowing ring that triggers on hover */}
                <div className="absolute inset-[-4px] border-2 border-cyan-500 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              </div>

              {/* The Text Content */}
              <div className="md:text-center w-full max-w-[220px]">
                <h3 className="font-heading font-black text-slate-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}