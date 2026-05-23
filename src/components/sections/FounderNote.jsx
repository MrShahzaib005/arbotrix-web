"use client";
import { motion } from "framer-motion";

export default function FounderNote() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-12 text-center border-t border-gray-900 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6">Why we are building this.</h2>
        <p className="text-gray-400 text-lg italic leading-relaxed mb-8">
          ""At Arbotrix, I am building DoDo Bot to make advanced, autonomous robotics accessible and practical for the hospitality industry. My goal is to bridge the gap between expensive, imported technology and local business needs by engineering a smart, reliable service solution. I want to prove that cutting-edge AI and robotics can be developed locally to solve real-world operational challenges efficiently. Ultimately, DoDo Bot is our foundational step toward a broader vision of revolutionizing commercial automation and advancing into humanoid robotics.""
        </p>
        <div>
          <h4 className="font-bold text-white tracking-widest uppercase">AQIL KHAN</h4>
          <p className="text-sm text-accent-blue">CEO - Arbotrix</p>
        </div>
      </motion.div>
    </section>
  );
}