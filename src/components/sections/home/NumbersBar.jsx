"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Code2, Cpu, Users, Building2 } from "lucide-react";

const Stat = ({ end, label, suffix = "+", icon: Icon, iconColor, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      {/* 1. The Subtle Dark Icon Box */}
      <div className="w-14 h-14 bg-[#131620] border border-gray-800/80 rounded-[1rem] flex items-center justify-center mb-6 shadow-lg">
        {/* The Icon inherits the specific neon color passed via props */}
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      
      {/* 2. The Label (Moved ABOVE the number to match ZazaByte) */}
      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
        {label}
      </div>

      {/* 3. The Stark White Number */}
      <div className="text-4xl md:text-5xl font-black tracking-tight text-white">
        {count}{suffix}
      </div>
    </motion.div>
  );
};

export default function NumbersBar() {
  // We map specific Tailwind colors to each icon to match the ZazaByte multi-color look
  const statsData = [
    { end: 200, label: "Students", icon: GraduationCap, color: "text-cyan-400" },
    { end: 20, label: "Projects", icon: Code2, color: "text-blue-500" },
    { end: 100, label: "Hardware", icon: Cpu, color: "text-purple-400" },
    { end: 12, label: "Engineers", icon: Users, color: "text-emerald-400" },
    { end: 15, label: "Enterprise", icon: Building2, color: "text-indigo-400" },
  ];

  return (
    // Note: Changed border-y to border-b so we don't have a harsh gray line at the top anymore
    <section className="py-24 bg-[#0B0D14] relative border-b border-gray-900/50">
      
      {/* THE FIX: The Ambient Glowing Horizon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[3px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm" />
      {/* ----------------------------------------- */}

      <div className="max-w-7xl mx-auto px-6 mt-4">
        
        {/* No glass box, just the raw grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8">
          {statsData.map((stat, i) => (
            <Stat 
              key={i} 
              end={stat.end} 
              label={stat.label} 
              icon={stat.icon}
              iconColor={stat.color}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}