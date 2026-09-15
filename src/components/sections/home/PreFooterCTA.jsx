"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export default function PreFooterCTA() {
  const benefits = [
    "Project-based learning",
    "Hardware kits included",
    "ROS2 & CV focused",
    "Industry certified"
  ];

  return (
    // FIX: Reduced py-32 to py-16 md:py-24 to stop the vertical bloat
    <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-slate-50 border-t border-gray-200">
      
      {/* FIX: Shrank max-w-6xl to max-w-5xl, reduced p-20 to p-10 lg:p-14, changed rounded-[3rem] to rounded-3xl */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 lg:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
        
        {/* Subtle Blueprint Grid inside the card */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />
        
        {/* The "Bit of Dark" Accent */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-slate-900 rounded-full blur-[80px] opacity-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-5"
          >
            <Cpu className="w-4 h-4 text-cyan-500" />
            <span className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-xs font-sans">
              Arbotrix Academy
            </span>
          </motion.div>

          {/* FIX: Reduced text-7xl to text-4xl md:text-5xl for a sleeker footprint */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-slate-900 mb-5 leading-tight"
          >
            Build the Robots of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Tomorrow.
            </span>
          </motion.h2>

          {/* FIX: Tightened margin mb-12 to mb-8 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed font-medium font-sans"
          >
            Stop watching tutorials and start building hardware. Join 500+ students mastering autonomous engineering through hands-on, industry-grade project pipelines.
          </motion.p>

          {/* Action Buttons - Tightened padding from py-4 to py-3.5 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-10"
          >
            <Link
              href="/courses"
              className="group relative flex items-center justify-center px-8 py-3.5 w-full sm:w-auto font-heading font-black text-white uppercase tracking-widest text-xs transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 rounded-full shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.5)] overflow-hidden"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-2 relative z-10">
                Explore Courses
              </span>
              <ArrowRight className="absolute right-5 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
            </Link>

            <Link
              href="/register"
              className="px-8 py-3.5 w-full sm:w-auto font-heading font-black text-slate-900 uppercase tracking-widest text-xs transition-all duration-300 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-900 rounded-full text-center"
            >
              Create Account
            </Link>
          </motion.div>

          {/* Benefits Checklist */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs md:text-sm font-bold text-slate-700 font-sans"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}