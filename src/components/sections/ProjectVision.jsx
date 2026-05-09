"use client";
import { motion } from "framer-motion";

export const ProjectVision = () => {
  return (
    <section className="w-full bg-bg-primary py-32 px-6 flex justify-center items-center font-body border-t border-white/5">
      <motion.div 
        className="max-w-4xl w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tight font-heading">
            Project Vision
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Quantum is an evolving project focused on creating a versatile and high-performance language for the next generation of developers.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-bg-surface rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle decoration */}
          <div className="absolute right-8 bottom-8 opacity-5 text-8xl pointer-events-none group-hover:opacity-10 transition-opacity">
            ✦
          </div>

          <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-10 relative z-10 font-light">
            "Quantum was born out of a desire for a language that doesn't force a single paradigm. It's about giving developers the tools to express their logic in the most natural way possible, without sacrificing performance."
          </p>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-accent-cyan flex items-center justify-center text-bg-primary font-bold text-lg shrink-0">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wide uppercase text-sm font-heading">
                Senodroom
              </span>
              <span className="text-gray-500 text-sm">
                Lead Developer & Creator
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};