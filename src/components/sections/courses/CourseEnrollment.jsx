"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Users, Award, Cpu } from "lucide-react";

export default function CourseEnrollment() {
  const benefits = [
    "Dedicated Arbotrix Dev Kit (Yours for the lab)",
    "Small cohort size (Max 15 students)",
    "1-on-1 architecture reviews with instructors",
    "Official Arbotrix Industry Certification"
  ];

  return (
    // FIX: Changed py-32 to py-16 to reduce massive vertical height
    <section className="bg-[#0B0D14] py-16 px-6 border-b border-gray-900 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-accent-blue/5 blur-[150px] rounded-full pointer-events-none" />

      {/* FIX: Reduced padding inside the main wrapper (p-6 md:p-8) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center bg-[#131620] border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl">
        
        {/* Left Side: Value Proposition */}
        <div className="w-full lg:w-3/5">
          <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Applications Open
          </span>
          {/* FIX: Slightly smaller text and tighter margins */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4 leading-tight">
            Secure Your Seat in the <br />
            <span className="text-accent-blue">Next Cohort.</span>
          </h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Physical lab space and hardware kits are strictly limited. Apply now to lock in Early Bird access and guarantee your spot on the workbench.
          </p>

          <div className="flex flex-col gap-3">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Conversion Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="w-full lg:w-2/5 bg-[#0B0D14] border border-gray-800 rounded-2xl p-6 flex flex-col relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/5 transition-colors duration-500 pointer-events-none" />

          {/* Scarcity Banner - More compact */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2.5 flex items-center gap-2 mb-6">
            <Users className="w-4 h-4 text-red-400 shrink-0" />
            <span className="text-xs font-bold text-red-400">Only 4 seats remaining for Oct 15</span>
          </div>

          <div className="mb-6">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Tuition Investment</div>
            <div className="text-3xl font-black text-white">Early Bird Access</div>
            <p className="text-xs text-gray-500 mt-1">One-time payment. Hardware included.</p>
          </div>

          <div className="w-full h-px bg-gray-800 mb-6" />

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <Cpu className="w-4 h-4 text-gray-500" /> <span>Lab hardware provided on-site</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <Award className="w-4 h-4 text-gray-500" /> <span>Certificate upon completion</span>
            </div>
          </div>

          {/* Primary CTA - Compact Button */}
          <button className="w-full group relative flex items-center justify-center px-6 py-3.5 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:shadow-[0_0_25px_rgba(0,163,255,0.5)] overflow-hidden">
            <span className="transition-transform duration-300 group-hover:-translate-x-3 text-sm">Apply Now</span>
            <ArrowRight className="absolute right-1/4 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
          
          <p className="text-center text-[10px] text-gray-600 mt-3 font-medium">
            Takes 2 minutes. No payment required today.
          </p>
        </motion.div>

      </div>
    </section>
  );
}