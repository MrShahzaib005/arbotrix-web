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
          "We saw brilliant hardware crippled by terrible software, and brilliant software trapped in fragile hardware. Tera-X is our answer. We aren't just building a robot; we are engineering a reliable, autonomous workforce. Thank you for joining us on this journey."
        </p>
        <div>
          <h4 className="font-bold text-white tracking-widest uppercase">Shahzaib</h4>
          <p className="text-sm text-accent-blue">Lead Engineer, Arbotrix</p>
        </div>
      </motion.div>
    </section>
  );
}