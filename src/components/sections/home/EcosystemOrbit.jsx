"use client";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, Wifi, Shield, Terminal } from "lucide-react";

const OrbitingNode = ({ icon: Icon, radius, duration, reverse = false, delay = 0 }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0B0D14] border border-gray-800 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,163,255,0.15)] text-gray-400"
        animate={{ rotate: reverse ? 360 : -360 }} // Counter-rotate so icons stay upright
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      >
        <Icon className="w-5 h-5 group-hover:text-accent-blue transition-colors" />
      </motion.div>
    </motion.div>
  );
};

export default function EcosystemOrbit() {
  return (
    <section className="py-32 bg-[#0B0D14] border-t border-gray-900 overflow-hidden relative flex flex-col items-center justify-center">
      
      <div className="text-center z-10 mb-16 relative">
        <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">
          The Architecture
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
          Complete Sensor Fusion.
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Seamlessly orchestrating hardware nodes, edge AI, and cloud teleoperation into a single, unified robotics pipeline.
        </p>
      </div>

      {/* The Orbit System */}
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center mt-10">
        
        {/* Core Center Node */}
        <div className="relative z-20 w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-full border border-gray-700 flex items-center justify-center shadow-[0_0_40px_rgba(0,163,255,0.2)]">
          <span className="font-heading text-xl font-black text-white tracking-tighter">
            arb<span className="text-accent-blue">O</span>trix
          </span>
        </div>

        {/* Ring 1 - Fast, inner orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border border-gray-800/50 rounded-full" />
        <OrbitingNode icon={Cpu} radius={120} duration={15} />
        <OrbitingNode icon={Terminal} radius={120} duration={15} delay={-7.5} />

        {/* Ring 2 - Medium orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-gray-800/50 rounded-full" />
        <OrbitingNode icon={Code2} radius={190} duration={25} reverse />
        <OrbitingNode icon={Wifi} radius={190} duration={25} reverse delay={-12.5} />

        {/* Ring 3 - Slow, outer orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-gray-800/50 rounded-full" />
        <OrbitingNode icon={Database} radius={260} duration={35} />
        <OrbitingNode icon={Shield} radius={260} duration={35} delay={-17.5} />

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}