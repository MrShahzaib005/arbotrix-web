"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FeaturedProject() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="bg-[#0B0D14] py-32 px-6 max-w-7xl mx-auto border-t border-gray-900">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: 3D Flip Container */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="w-full md:w-1/2 aspect-square relative cursor-pointer group"
          style={{ perspective: 1000 }} // CRITICAL: Gives the flip 3D depth
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Rotating Wrapper */}
          <motion.div
            className="w-full h-full relative rounded-3xl shadow-2xl transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(0,163,255,0.2)]"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            
            {/* Front Face */}
            <div 
              className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-gray-800 bg-[#131620]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img 
                src="/images/featured-vacuum.jpeg" 
                alt="Autonomous Vacuum Front"
                className="w-full h-full object-cover" 
              />
              {/* UI Hint */}
              <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" /> Click to flip
              </div>
            </div>

            {/* Back Face */}
            <div 
              className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-gray-800 bg-[#131620]"
              style={{ 
                backfaceVisibility: "hidden", 
                transform: "rotateY(180deg)" // CRITICAL: Prevents the back image from being mirrored
              }}
            >
              <img 
                src="/images/dodo-back.jpeg" // Ensure you have this file in your public/images folder
                alt="Autonomous Vacuum Back"
                className="w-full h-full object-cover" 
              />
              {/* UI Hint */}
              <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" /> Flip back
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4">Featured Work</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white leading-tight">Autonomous Floor Navigation Pipeline.</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            A complete hardware-software integration utilizing Raspberry Pi 5, OAK-D camera sensors, and ROS2 Humble. Built from scratch to detect floor types and navigate complex dynamic environments seamlessly.
          </p>
          <Link href="/portfolio" className="inline-flex items-center font-bold text-white hover:text-accent-blue transition-colors group">
            View Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}