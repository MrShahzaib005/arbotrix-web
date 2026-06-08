// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, CheckCircle2 } from "lucide-react";

// export default function PreFooterCTA() {
//   const benefits = [
//     "Project-based learning",
//     "Hardware kits included",
//     "ROS2 & CV focused",
//     "Industry certified"
//   ];

//   return (
//     <section className="relative py-32 px-6 overflow-hidden bg-[#0B0D14] border-t border-gray-900">
      
//       {/* Subtle Background Glow to draw the eye to the center */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
//         {/* Label */}
//         <motion.span 
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs mb-6"
//         >
//           Arbotrix Academy
//         </motion.span>

//         {/* Heading */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight"
//         >
//           Build the Robots of <br className="hidden md:block" />
//           <span className="text-accent-blue">Tomorrow.</span>
//         </motion.h2>

//         {/* Subtext */}
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
//         >
//           Stop watching tutorials and start building hardware. Join 500+ students mastering autonomous engineering through hands-on, industry-grade project pipelines.
//         </motion.p>

//         {/* Action Buttons */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12"
//         >
//           {/* Primary CTA with Slide-In Animation */}
//           <Link
//             href="/courses"
//             className="group relative flex items-center justify-center px-8 py-4 w-full sm:w-auto font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] overflow-hidden"
//           >
//             <span className="transition-transform duration-300 group-hover:-translate-x-3">
//               Explore Courses
//             </span>
//             <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
//           </Link>

//           {/* Secondary CTA */}
//           <Link
//             href="/register"
//             className="px-8 py-4 w-full sm:w-auto font-bold text-white transition-all duration-300 bg-[#131620] hover:bg-gray-800 border border-gray-800 hover:border-gray-600 rounded-full text-center"
//           >
//             Create Account
//           </Link>
//         </motion.div>

//         {/* Benefits Checklist */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400"
//         >
//           {benefits.map((benefit, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <CheckCircle2 className="w-4 h-4 text-emerald-500" />
//               <span>{benefit}</span>
//             </div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }


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
    // The Foundation: Soft Slate to match the previous sections
    <section className="relative py-32 px-6 overflow-hidden bg-slate-50 border-t border-gray-200">
      
      {/* THE ARCHITECTURAL CARD: This replaces the void and gives the section authority */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden">
        
        {/* Subtle Blueprint Grid inside the white card to maintain the hardware identity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />
        
        {/* The "Bit of Dark" Accent: A heavy slate corner slash */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-slate-900 rounded-full blur-[80px] opacity-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <Cpu className="w-4 h-4 text-cyan-500" />
            <span className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-xs">
              Arbotrix Academy
            </span>
          </motion.div>

          {/* Heavy Slate Heading with Electric Accent */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-tight"
          >
            Build the Robots of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Tomorrow.
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-medium"
          >
            Stop watching tutorials and start building hardware. Join 500+ students mastering autonomous engineering through hands-on, industry-grade project pipelines.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16"
          >
            {/* Primary CTA: Glowing Cyan to pop off the white background */}
            <Link
              href="/courses"
              className="group relative flex items-center justify-center px-8 py-4 w-full sm:w-auto font-black text-white uppercase tracking-widest text-sm transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 rounded-full shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.5)] overflow-hidden"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-2 relative z-10">
                Explore Courses
              </span>
              <ArrowRight className="absolute right-6 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 z-10" />
            </Link>

            {/* Secondary CTA: Heavy Slate Outline */}
            <Link
              href="/register"
              className="px-8 py-4 w-full sm:w-auto font-black text-slate-900 uppercase tracking-widest text-sm transition-all duration-300 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-900 rounded-full text-center"
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
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-slate-700"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}