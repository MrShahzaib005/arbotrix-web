"use client";
import { motion } from "framer-motion";

export default function CareersHeader() {
  return (
    <section className="text-center max-w-3xl mx-auto pt-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
      >
        Learn Robotics. <br/>
        <span className="text-accent-blue">Build Real Things.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl text-gray-500 font-medium"
      >
        We don't teach theory from a textbook. We teach the exact hardware and software stacks we use to build autonomous industrial systems.
      </motion.p>
    </section>
  );
}