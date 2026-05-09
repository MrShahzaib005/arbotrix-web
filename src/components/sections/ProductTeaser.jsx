"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";

export const ProductTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-black py-40 px-6 relative overflow-hidden flex flex-col items-center text-center border-y border-[#1A2332]">
      {/* Background Sonar Pulse */}
      <motion.div 
        animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/20 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-3xl">
        <div className="font-mono text-[#FF6B00] text-sm uppercase tracking-[0.2em] mb-6">
          [ Coming Soon ]
        </div>
        <h2 className="font-heading text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
          NEXUS DRIVES
        </h2>
        <p className="font-body text-gray-400 text-xl mb-12">
          The next evolution in high-torque, ultra-compact actuator technology.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-[#1A2332] h-2 mb-2 relative">
          <motion.div 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "60%" } : { width: "0%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="h-full bg-accent-cyan"
          />
        </div>
        <div className="flex justify-between font-mono text-xs text-gray-500 uppercase tracking-widest mb-12">
          <span>Development Progress</span>
          <span className="text-accent-cyan">60%</span>
        </div>

        {/* Email Capture */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-[#111820] border border-[#1A2332] text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-accent-cyan transition-colors"
          />
          <button className="bg-[#FF6B00] text-white font-bold uppercase tracking-wider px-8 py-3 text-sm hover:bg-[#e66000] transition-colors">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
};