"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fleet = [
  {
    id: "tera-x",
    name: "Tera-X",
    status: "In Development - 60%",
    desc: "Next-generation autonomous platform. High intelligence edge processing at a viable price point.",
    link: "/products/tera-x",
    imagePlaceholder: "Tera-X Silhouette Render"
  },
  {
    id: "dodox",
    name: "DodoX",
    status: "Prototyping - 30%",
    desc: "Agile logistics quadruped designed for uneven terrain and dynamic warehouse navigation.",
    link: "/products/dodox",
    imagePlaceholder: "DodoX Wireframe"
  },
  {
    id: "auto-vac",
    name: "A.V.C. Unit",
    status: "Testing - 85%",
    desc: "ROS2-powered autonomous floor cleaner featuring OAK-D spatial AI and custom floor detection.",
    link: "/products/auto-vac",
    imagePlaceholder: "Vacuum Top-Down Render"
  }
];

export default function FleetGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {fleet.map((robot, i) => (
        <Link href={robot.link} key={robot.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group block bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent-blue/50 transition-all duration-300"
          >
            {/* Image Area */}
            <div className="h-64 bg-gray-50 flex items-center justify-center relative overflow-hidden border-b border-gray-100">
              <div className="text-gray-400 font-bold tracking-widest uppercase text-xs z-10 relative">
                [{robot.imagePlaceholder}]
              </div>
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/5 transition-colors duration-500" />
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-2">
                {robot.status}
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{robot.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {robot.desc}
              </p>
              
              <div className="flex items-center text-sm font-bold text-black group-hover:text-accent-blue transition-colors">
                View Project Specs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}