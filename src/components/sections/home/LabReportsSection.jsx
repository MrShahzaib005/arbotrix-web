"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

// Easily scalable array for future products
const REPORTS = [
    {
    id: "004",
    title: "Secure Logistics.",
    robot: "Dodo-X Transport",
    desc: "Managing multi-tray internal transport through secure Tailscale remote networking and ROS bridge integration.",
    image: "/images/dodo-x.png",
    link: "/case-study/dodo-x", // Create this route when ready
    accent: "text-cyan-600",
    bgAccent: "bg-cyan-50"
  },
  {
    id: "001",
    title: "Engineering the Tera-X.",
    robot: "Tera-X UGV",
    desc: "Bridging the gap between ROS2 simulation and physical reality with a 200kg-payload autonomous field unit.",
    image: "/images/tera-x.png",
    link: "/case-study/tera-x",
    accent: "text-amber-600",
    bgAccent: "bg-amber-50"
  },
  {
    id: "002",
    title: "Spatial Maintenance.",
    robot: "Optic-Clean",
    desc: "Mapping facilities and avoiding dynamic obstacles without human oversight using edge-computed spatial AI and LiDAR.",
    image: "/images/optic-clean.png", 
    link: "/case-study/optic-clean", // Create this route when ready
    accent: "text-purple-600",
    bgAccent: "bg-purple-50"
  },
  {
    id: "003",
    title: "Aerial Intelligence.",
    robot: "Aero-X Drone",
    desc: "Executing automated perimeter mapping and continuous object tracking via integrated Pixhawk flight controllers.",
    image: "/images/aero-x.png", 
    link: "/case-study/aero-x", // Create this route when ready
    accent: "text-orange-600",
    bgAccent: "bg-orange-50"
  },
];

export default function LabReportsSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 font-sans relative overflow-hidden">
      {/* Subtle blueprint texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-4">
              Lab Reports & <br />
              <span className="text-blue-600">Case Studies.</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-xl">
              From raw sheet metal to deployed ROS2 nodes. Read the technical documentation detailing how we engineer our physical platforms.
            </p>
          </div>
          {/* <Link 
            href="/case-study" 
            className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors"
          >
            View All Reports <ArrowRight className="w-4 h-4" />
          </Link> */}
        </div>

        {/* Scalable Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REPORTS.map((report, i) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link 
                href={report.link} 
                className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Image Header with specific background accent */}
                <div className={`w-full h-48 ${report.bgAccent} relative flex items-center justify-center p-6 overflow-hidden`}>
                   <Image 
                     src={report.image} 
                     alt={report.robot} 
                     fill 
                     className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-md" 
                   />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                     <FileText className={`w-3 h-3 ${report.accent}`} />
                     <span className={`text-[9px] font-black uppercase tracking-widest ${report.accent}`}>
                       Report // {report.id}
                     </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">
                    {report.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-500 leading-relaxed mb-8 flex-1 line-clamp-3">
                    {report.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {report.robot}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only view all button */}
        <Link 
          href="/case-study" 
          className="md:hidden mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 uppercase tracking-widest hover:bg-slate-200 transition-colors"
        >
          View All Reports <ArrowRight className="w-4 h-4" />
        </Link>
        
      </div>
    </section>
  );
}