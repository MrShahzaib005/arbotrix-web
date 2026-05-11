"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Placeholder for the Robot Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="w-full md:w-1/2 aspect-square bg-gray-200 rounded-3xl relative overflow-hidden"
        >
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
             [Insert Autonomous Vacuum/OAK-D Render Here]
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4">Featured Work</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Autonomous Floor Navigation Pipeline.</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            A complete hardware-software integration utilizing Raspberry Pi 5, OAK-D camera sensors, and ROS2 Humble. Built from scratch to detect floor types and navigate complex dynamic environments seamlessly.
          </p>
          <Link href="/portfolio" className="inline-flex items-center font-bold text-black hover:text-accent-blue transition-colors">
            View Case Study <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}