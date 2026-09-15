"use client";
import { motion } from "framer-motion";
import { ArrowRight, Server } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ServicesHero() {
  const [mounted, setMounted] = useState(false);

  // Ensure random particles only render on the client to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // FIX: Removed border-gray-900, enforced light theme transparent background so it inherits from the page wrapper
    <section className="relative pt-30 pb-20 px-6 flex items-center justify-center min-h-[70vh] border-b border-slate-200 overflow-hidden font-sans">
      
      {/* Background Ambient Glow (Sterile Lab Light) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none transition-all duration-700" />

      {/* Engineering Grid Texture (Light Blueprint) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* Code-Only Circuit/Particle Effect (Soft Blue Particles) */}
      {mounted && (
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400 rounded-full"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* FIX: Inverted to Light Theme Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm font-sans"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <Server className="w-4 h-4 text-blue-600" />
          <span>Enterprise Engineering</span>
        </motion.div>

        {/* FIX: Inverted to Heavy Slate Text + Font-Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-slate-900 mb-6 leading-[0.95] drop-shadow-sm"
        >
          Custom Hardware. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Flawless Autonomy.
          </span>
        </motion.h1>

        {/* FIX: Slate Text for Readability */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-10 font-sans"
        >
          From complex ROS2 integrations to full-scale warehouse robotics. We
          design, build, and deploy the physical infrastructure so you can focus
          on scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* FIX: Updated CTA Button to match the Light Theme gradient format */}
          <Link 
            href="/contact" 
            className="group relative flex items-center justify-center px-8 py-3.5 font-heading font-black text-xs uppercase tracking-widest text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full shadow-md hover:shadow-lg overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-3">
              Book a Consultation
            </span>
            <ArrowRight className="absolute right-5 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}