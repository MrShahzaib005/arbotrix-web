"use client";
import { motion } from "framer-motion";
import { Cpu, Eye, ShieldCheck } from "lucide-react";

const features = [
  { icon: Cpu, title: "Edge Processing", desc: "No cloud latency. All kinematic math happens on-board." },
  { icon: Eye, title: "Spatial AI", desc: "True depth perception. Navigates dynamic environments instantly." },
  { icon: ShieldCheck, title: "Industrial Grade", desc: "Built for warehouses, not living rooms. 24/7 uptime." }
];

export default function ProductFeatures() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      
      {/* Problem Statement */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl font-black mb-4">The Problem It Solves</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Current industrial robots are either too dumb to adapt to changing environments, or too expensive to deploy at scale. We are building the bridge: high-intelligence autonomy at a viable price point.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Line Trace Animation */}
              <div className="relative w-16 h-16 mb-6 flex justify-center items-center">
                <motion.svg className="absolute inset-0 w-full h-full text-accent-blue" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50" cy="50" r="48"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.2 }}
                  />
                </motion.svg>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}