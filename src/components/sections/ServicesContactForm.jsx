"use client";
import { motion } from "framer-motion";

export default function ServicesContactForm() {
  return (
    <section className="relative overflow-hidden border border-white/10 rounded-3xl bg-[#111111] p-12 md:p-20">

      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 relative z-10"
      >
        {/* Left — copy */}
        <div>
          <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">
            [ Start a Project ]
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-tight mb-4">
            Ready to initiate <br />
            <span className="text-accent-blue">your project?</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Leave your details below. Our engineering team will review your
            requirements and get back to you within 24 hours to schedule a
            discovery call.
          </p>

          {/* Divider accent */}
          <div className="mt-10 w-12 h-0.5 bg-accent-blue rounded-full" />
        </div>

        {/* Right — form */}
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-transparent border-b border-white/15 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Company
              </label>
              <input
                type="text"
                placeholder="Acme Corp"
                className="bg-transparent border-b border-white/15 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Problem Description
            </label>
            <textarea
              rows="3"
              placeholder="We need to automate our warehouse floor..."
              className="bg-transparent border-b border-white/15 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors resize-none text-sm"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Budget Range
            </label>
            <select className="bg-transparent border-b border-white/15 py-2 text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none text-sm">
              <option className="bg-[#111111] text-white">$10k – $25k</option>
              <option className="bg-[#111111] text-white">$25k – $50k</option>
              <option className="bg-[#111111] text-white">$50k+</option>
            </select>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full bg-accent-blue hover:bg-blue-400 text-white font-black text-sm uppercase tracking-widest py-4 px-8 rounded-full transition-colors duration-200"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}