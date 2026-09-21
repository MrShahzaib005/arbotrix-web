"use client";
import { motion } from "framer-motion";
import { Hammer, ArrowRight } from "lucide-react";
import Link from "next/link"; // Added Link import

// Added 'link' property to route to the product page
const HARDWARE = [
  {
    id: "dodo-x",
    name: "Dodo Transport",
    classification: "Internal Logistics Robot",
    description:
      "Self-contained autonomous delivery vehicle engineered for secure, multi-tray transport. Controlled seamlessly via secure Tailscale remote networking and ROS bridge integration.",
    status: "DEPLOYMENT READY",
    image: "/images/dodo-x.png", // Ensure this image path is correct
    accent: "text-cyan-600",
    bgAccent: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600",
    link: "/products/dodo-bot",
  },
  {
    id: "tera-x",
    name: "Tera-X",
    classification: "Unmanned Ground Vehicle (UGV)",
    description:
      "Inspired by industry-standard Husky architectures. A rugged, all-terrain mobile platform built for heavy payloads, outdoor spatial mapping, and advanced ROS2 navigation research.",
    status: "PROTOTYPING STAGE",
    image: "/images/tera-x.png",
    accent: "text-yellow-500",
    bgAccent: "bg-yellow-500/10 border-yellow-500/20 text-yellow-500",
    link: "/products/tera-x",
  },
  {
    id: "optic-clean",
    name: "Optic-Clean",
    classification: "Smart Spatial Vacuum",
    description:
      "Next-generation indoor maintenance. Powered by OAK-D spatial perception and LiDAR to dynamically map rooms, avoid dynamic obstacles, and execute precise cleaning patterns.",
    status: "IN DEVELOPMENT",
    image: "/images/swipe-x.png",
    accent: "text-purple-600",
    bgAccent: "bg-purple-500/10 border-purple-500/20 text-purple-600",
    link: "/products/optic-clean",
  },
  {
    id: "aero-drone",
    name: "Aero-X Drone",
    classification: "Aerial Reconnaissance UAV",
    description:
      "Quad-rotor architecture integrated with edge AI. Designed for real-time object tracking, perimeter mapping, and autonomous flight path generation using lightweight ROS2 nodes.",
    status: "R&D PHASE",
    image: "/images/aero-x.png",
    accent: "text-orange-600",
    bgAccent: "bg-orange-100 border-orange-200",
    link: "/products/aero-drone",
  },
];
export const HardwareShowcase = () => {
  return (
    <section className="py-18 relative overflow-hidden bg-slate-50 font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-heading font-black uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
              <Hammer className="w-4 h-4 text-blue-600" />
              Arbotrix Labs
            </div>

            <h2 className="font-heading font-black text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-3 leading-[0.95]">
              Hardware <br />
              <span className="text-blue-600 drop-shadow-sm">
                In Development.
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We don't just write software. We engineer the physical platforms
              that bring autonomous code into the real world. Here is a look at
              what is currently on our workbenches.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HARDWARE.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative bg-white border border-gray-200 hover:border-blue-300 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              <div className="h-56 bg-slate-50 border-b border-gray-100 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] z-0" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out z-10 drop-shadow-xl"
                />
                <div
                  className={`absolute top-5 left-5 px-3 py-1 rounded-full border text-[9px] font-heading font-black uppercase tracking-[0.2em] ${item.bgAccent} ${item.accent} z-20 shadow-sm`}
                ></div>
              </div>

              <div className="p-8 flex-1 flex flex-col bg-white">
                <p className="font-sans text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                  {item.classification}
                </p>
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1 font-medium">
                  {item.description}
                </p>

                {/* THE ROUTING FIX: Conditionally render the link if it exists */}
                <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="w-full flex items-center justify-between text-[11px] font-heading font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors"
                    >
                      View Specifications
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" />
                      Internal Testing
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
