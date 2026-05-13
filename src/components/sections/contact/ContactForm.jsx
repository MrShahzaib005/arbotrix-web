"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "font-body text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue transition-colors w-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
        [ Send a Message ]
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase mb-8">
        Talk To Us.
      </h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-accent-blue/10 border border-accent-blue/30 rounded-2xl p-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="text-5xl mb-4"
          >
            ✅
          </motion.div>
          <h3 className="font-heading text-xl font-black text-white mb-2">Message Sent!</h3>
          <p className="font-body text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-gray-500">First Name</label>
              <input type="text" required placeholder="Zaid" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-gray-500">Last Name</label>
              <input type="text" required placeholder="Akhtar" className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500">Email</label>
            <input type="email" required placeholder="you@example.com" className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500">Subject</label>
            <select className={inputClass + " appearance-none bg-white/5"}>
              <option value="" className="bg-black">Select a topic</option>
              <option className="bg-black">Custom Robotics Project</option>
              <option className="bg-black">Partnership / Collaboration</option>
              <option className="bg-black">Student Enrollment</option>
              <option className="bg-black">Media / Press</option>
              <option className="bg-black">General Question</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500">Message</label>
            <textarea required rows={5} placeholder="Tell us about your project..." className={inputClass + " resize-none"} />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full font-heading font-black uppercase tracking-wider bg-accent-blue text-white py-4 rounded-xl hover:bg-blue-700 transition-colors text-sm mt-2"
          >
            Send Message
            <Send size={16} />
          </motion.button>

        </form>
      )}
    </motion.div>
  );
}