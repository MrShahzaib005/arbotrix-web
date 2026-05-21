"use client";
import { motion } from "framer-motion";
import { ArrowRight, Server } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 flex items-center justify-center min-h-[70vh] border-b border-gray-900 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-accent-blue/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Engineering Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131620] border border-gray-800 text-gray-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-lg"
        >
          <Server className="w-4 h-4 text-accent-blue" />
          <span>Enterprise Engineering</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]"
        >
          Custom Hardware. <br />
          <span className="text-accent-blue">Flawless Autonomy.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          From complex ROS2 integrations to full-scale warehouse robotics. We design, build, and deploy the physical infrastructure so you can focus on scale.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] overflow-hidden w-full sm:w-auto">
<div className="flex justify-center">
  <Link href="/contact" className="...keep all existing classes...">
    Book a Consultation
  </Link>
</div>            <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
          
        </motion.div>
      </div>
    </section>
  );
}