"use client";
import { motion } from "framer-motion";
import { ArrowRight, Hammer } from "lucide-react";
import Link from "next/link";

const HARDWARE = [
  {
    id: "tera-x",
    name: "Tera-X",
    classification: "Unmanned Ground Vehicle (UGV)",
    description:
      "Inspired by industry-standard Husky architectures. A rugged, all-terrain mobile platform built for heavy payloads, outdoor spatial mapping, and advanced ROS2 navigation research.",
    status: "PROTOTYPING STAGE",
    image: "/images/tera-x.png",
    accent: "text-emerald-400",
    bgAccent: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: "omni-vac",
    name: "Autonomous Floor System",
    classification: "Smart Spatial Vacuum",
    description:
      "Next-generation indoor maintenance. Powered by OAK-D spatial perception and LIDAR to dynamically map rooms, avoid dynamic obstacles, and execute precise cleaning patterns.",
    status: "IN DEVELOPMENT",
    image: "/images/swipe-x.png",
    accent: "text-accent-blue",
    bgAccent: "bg-accent-blue/10 border-accent-blue/20",
  },
  {
    id: "aero-drone",
    name: "Aero-X Drone",
    classification: "Aerial Reconnaissance UAV",
    description:
      "Quad-rotor architecture integrated with edge AI. Designed for real-time object tracking, perimeter mapping, and autonomous flight path generation using lightweight ROS2 nodes.",
    status: "R&D PHASE",
    image: "/images/aero-x.png",
    accent: "text-amber-400",
    bgAccent: "bg-amber-400/10 border-amber-400/20",
  },
];

export const HardwareShowcase = () => {
  return (
    <section className="py-25 relative overflow-hidden bg-[#0B0D14]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
              <Hammer className="w-4 h-4 text-accent-blue" />
              Arbotrix Labs
            </div>
            <h2 className="font-black text-4xl md:text-5xl text-white uppercase tracking-tighter mb-6 leading-tight">
              Hardware <br />
              <span className="text-accent-blue">In Development.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just write software. We engineer the physical platforms
              that bring autonomous code into the real world. Here is a look at
              what is currently on our workbenches.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <Link
              href="/products"
              className="group flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-accent-blue transition-colors"
            >
              View All Specs
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HARDWARE.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative bg-[#131620] border border-gray-800 hover:border-gray-600 rounded-3xl overflow-hidden transition-colors duration-500 flex flex-col shadow-lg"
            >
              {/* Image Area */}
              {/* Image Area using transparent PNGs */}
              <div className="h-48 bg-[#0A0C11] border-b border-gray-800 relative overflow-hidden flex items-center justify-center p-4 shadow-lg">
                {/* Blueprint Grid Overlay (now flows seamlessly behind the transparent product) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] z-0" />

                {/* Transparent Product Image - seamlessly integrated! */}
                <img
                  src={item.image} // Make sure this path now points to your new transparent PNG file
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out z-10"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131620]/80 via-transparent to-[#131620]/40 z-10 pointer-events-none" />

                {/* Status Badge */}
                <div
                  className={`absolute top-5 left-5 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-[0.2em] ${item.bgAccent} ${item.accent} z-20 backdrop-blur-md`}
                >
                  {item.status}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="font-mono text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                  {item.classification}
                </p>
                <h3 className="font-black text-xl text-white uppercase tracking-tighter mb-3 group-hover:text-accent-blue transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                <div className="pt-5 border-t border-gray-800 mt-auto">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse" />
                    Internal Testing
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
