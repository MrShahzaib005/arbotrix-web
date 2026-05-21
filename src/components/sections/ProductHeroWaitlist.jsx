"use client";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductsHero() {
  // Simple glitch effect for the terminal text
  const [glitchText, setGlitchText] = useState("SYSTEM.NOMINAL");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const texts = ["SYSTEM.NOMINAL", "AWAITING.COMMAND", "SENSORS.ACTIVE", "UPLINK.SECURE"];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-0 pb-16 px-6 border-b border-gray-900 bg-[#0B0D14] overflow-hidden">
      
      {/* Subtle Ambient Glow behind the text */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Engineering Grid (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
     <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 h-full lg:-mt-16">
        {/* LEFT SIDE: Typography & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center z-20 mt-10 lg:mt-0 text-center lg:text-left items-center lg:items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col mb-8 items-center lg:items-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <Crosshair className="w-4 h-4 text-accent-blue" />
              <span className="text-accent-blue font-mono text-xs uppercase tracking-[0.2em] font-bold">
                Codename: Dodo-X
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05]">
              Autonomy, <br />
              <span className="text-gray-500">Uncompromised.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-md leading-relaxed mb-10 lg:border-l-2 lg:border-gray-800 lg:pl-4"
          >
            Meet the future of internal logistics: Dodo-X. A self-contained autonomous vehicle engineered for secure, intelligent, multi-tray transport. No simulators, just relentless, production-ready autonomy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-6"
          >
            <button className="group relative flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] overflow-hidden">
              <Link href="/contact" className="...keep all existing classes...">
  Reserve Dodo-X
</Link>
              <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The Stealth HUD Asset (Curiosity Generator) */}
        <motion.div 
          initial={{ opacity: 0, x: 150 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end z-10 relative group"
        >
          {/* HUD Container */}
          <div className="relative w-full max-w-[400px] lg:max-w-[550px] xl:max-w-[650px] flex justify-center aspect-[3/4] items-center">
            
            {/* 1. The Silhouette: Deeply crushed brightness so the robot is just a dark ghost */}
            <img 
              src="/images/dodo-front.png" 
              alt="Arbotrix Dodo-X Classified" 
              className="w-full object-contain brightness-[0.1] contrast-[1.5] saturate-0 opacity-80 relative z-10 pointer-events-none"
            />

            {/* 2. The Animated Scanline: Sweeps up and down the silhouette */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              className="absolute left-0 w-full h-[2px] bg-accent-blue/50 shadow-[0_0_15px_rgba(0,163,255,0.8)] z-20 pointer-events-none"
            />

            {/* 3. The Tech Grid Overlay: Gives it that digital schematic feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

            {/* 4. Focused Glows: Only the eyes and the base show life */}
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[18%] left-1/2 -translate-x-1/2 w-20 h-20 bg-red-500/40 blur-[40px] z-30 mix-blend-screen" 
            />
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-56 h-8 bg-accent-blue/60 blur-[30px] z-30 mix-blend-screen" />

            {/* 5. Floating Terminal Data: Random tech UI to build the "Classified" vibe */}
            <div className="absolute top-[10%] right-[10%] z-40 flex flex-col gap-1 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-2 text-[10px] font-mono text-accent-blue">
                <Terminal className="w-3 h-3" /> [ LIVE FEED ]
              </div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                ID: ARB-X99-2
              </div>
            </div>

            <div className="absolute bottom-[20%] left-[5%] z-40 bg-black/40 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded text-[10px] font-mono text-gray-400 opacity-70">
              STATUS: <span className="text-emerald-400 animate-pulse">{glitchText}</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Massive Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 0.03, y: 0 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0"
      >
        <span className="text-[18vw] font-black tracking-tighter text-white leading-none translate-y-1/4 select-none whitespace-nowrap">
          DODO-X
        </span>
      </motion.div>

    </section>
  );
}