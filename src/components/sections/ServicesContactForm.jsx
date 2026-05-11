"use client";
import { motion } from "framer-motion";

export default function ServicesContactForm() {
  return (
    <section className="bg-black text-white p-12 md:p-20 rounded-3xl relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 relative z-10"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Ready to initiate <br/> <span className="text-accent-blue">your project?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Leave your details below. Our engineering team will review your requirements and get back to you within 24 hours to schedule a discovery call.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Name</label>
              <input type="text" className="bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent-blue transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Company</label>
              <input type="text" className="bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent-blue transition-colors" placeholder="Acme Corp" />
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Problem Description</label>
            <textarea rows="3" className="bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent-blue transition-colors resize-none" placeholder="We need to automate our warehouse floor..." />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Budget Range</label>
            <select className="bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-accent-blue transition-colors appearance-none">
              <option className="bg-black text-white">$10k - $25k</option>
              <option className="bg-black text-white">$25k - $50k</option>
              <option className="bg-black text-white">$50k+</option>
            </select>
          </div>

          <button 
            type="button" 
            className="mt-8 bg-accent-blue text-white font-bold py-4 px-8 w-full hover:bg-blue-600 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}