"use client";
import { motion } from "framer-motion";

const steps = ["Discovery", "Design", "Build", "Deliver"];

export default function ProcessTimeline() {
  return (
    <section className="py-20 w-full overflow-hidden">
      <div className="mb-16">
        <h2 className="text-4xl font-black tracking-tight">Our Process</h2>
        <p className="text-gray-500 mt-2">Engineered for absolute predictability.</p>
      </div>

      <div className="relative w-full">
        {/* Background Track */}
        <div className="absolute top-4 left-0 w-full h-[2px] bg-gray-200" />
        
        {/* Animated Fill Line */}
        <motion.div 
          className="absolute top-4 left-0 h-[2px] bg-accent-blue origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* The Dots and Text */}
        <div className="relative flex justify-between w-full">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.2) }}
              className="flex flex-col items-center"
            >
              <div className="w-8 h-8 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center z-10 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
              </div>
              <span className="mt-4 font-bold text-sm uppercase tracking-widest">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}