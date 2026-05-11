"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Wrench, GraduationCap, Package } from "lucide-react";

const areas = [
  { title: "Build Robots", icon: Cpu, link: "/services", desc: "Custom ROS2 architectures & hardware." },
  { title: "Solve Problems", icon: Wrench, link: "/services", desc: "Drop-in engineering for complex pipelines." },
  { title: "Educate", icon: GraduationCap, link: "/courses", desc: "Practical workshops for the next generation." },
  { title: "Our Product", icon: Package, link: "/products", desc: "Project Tera-X. The future of automation." }
];

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area, i) => {
          const Icon = area.icon;
          return (
            <Link href={area.link} key={i}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,163,255,0.1)", borderColor: "rgba(0,163,255,0.3)" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-100 p-8 rounded-3xl cursor-pointer h-full flex flex-col items-start group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-blue/10 transition-colors">
                  <Icon className="w-6 h-6 text-black group-hover:text-accent-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm">{area.desc}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}