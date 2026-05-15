// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const Stat = ({ end, label, suffix = "+" }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = end / (duration / 16);
      
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           setCount(end);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, end]);

//   return (
//     <div ref={ref} className="text-center">
//       <div className="text-4xl md:text-5xl font-black text-accent-blue mb-2">
//         {count}{suffix}
//       </div>
//       <div className="text-sm font-bold uppercase tracking-wider text-gray-400">{label}</div>
//     </div>
//   );
// };

// export default function NumbersBar() {
//   return (
//     <section className="py-20 border-y border-gray-900 bg-[#0B0D14]">
//       <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
//         <Stat end={15} label="Projects Deployed" />
//         <Stat end={500} label="Students Trained" />
//         <Stat end={24} label="Hardware Integrations" />
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Code2, Cpu, Users, Building2 } from "lucide-react";

// Reusable Animated Stat Component
const Stat = ({ end, label, suffix = "+", icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const increment = end / (duration / 16); // 60fps pacing
      
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
    <div ref={ref} className="flex flex-col items-center text-center group">
      {/* Icon Circle */}
      <div className="w-14 h-14 bg-gray-900/50 border border-gray-800 rounded-full flex items-center justify-center mb-5 group-hover:border-accent-blue/50 group-hover:bg-accent-blue/10 transition-all duration-300">
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-accent-blue transition-colors duration-300" />
      </div>
      
      {/* Animated Number */}
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">
        {count}{suffix}
      </div>
      
      {/* Label */}
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
        {label}
      </div>
    </div>
  );
};

export default function NumbersBar() {
  const statsData = [
    { end: 200, label: "Students", icon: GraduationCap },
    { end: 20, label: "Projects", icon: Code2 },
    { end: 100, label: "Hardware", icon: Cpu },
    { end: 12, label: "Team Members", icon: Users },
    { end: 15, label: "Enterprise Clients", icon: Building2 },
  ];

  return (
    <section className="py-24 border-y border-gray-900 bg-[#0B0D14] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Responsive 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8">
          {statsData.map((stat, i) => (
            <Stat 
              key={i} 
              end={stat.end} 
              label={stat.label} 
              icon={stat.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}