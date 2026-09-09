"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Wrench, GraduationCap, Package, ArrowRight } from "lucide-react";

const areas = [
  { title: "Build Robots", icon: Cpu, link: "/services", desc: "Custom ROS2 architectures & physical hardware platforms." },
  { title: "Solve Problems", icon: Wrench, link: "/contact", desc: "Drop-in engineering for complex automation pipelines." },
  { title: "Educate", icon: GraduationCap, link: "/courses", desc: "Practical workshops for the next generation of engineers." },
  // FATAL FLAW FIXED: Route directly to the flagship hardware page
  { title: "Our Product", icon: Package, link: "/products/tera-x", desc: "Project Tera-X. The future of autonomous navigation." }
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-gray-200">
      <div className="px-6 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Link href={area.link} key={i} className="block h-full group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }} // Triggers slightly before scrolling into view
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-[2rem] cursor-pointer h-full flex flex-col items-start shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:border-blue-200 group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* The Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 to-slate-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500 shadow-md">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-black mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                    {area.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                    {area.desc}
                  </p>

                  {/* Animated Interactive Text */}
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}