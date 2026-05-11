"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductHeroWaitlist() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Waitlist Lead Captured:", email);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center mt-12">
      
      {/* 1. Hero & Value Proposition */}
      <div className="text-center mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
          className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4"
        >
          Codename: Tera-X
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
        >
          Autonomy, <br/><span className="text-gray-500">Uncompromised.</span>
        </motion.h1>
      </div>

      {/* 2. Cinematic Robot Silhouette */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-64 h-64 md:w-96 md:h-96 mb-16 flex justify-center items-center"
      >
        {/* Placeholder for your actual 3D render */}
        <div className="w-48 h-64 bg-gradient-to-b from-gray-700 to-transparent rounded-t-full blur-sm opacity-80 shadow-[0_0_50px_rgba(0,163,255,0.2)]" />
      </motion.div>

      {/* 3. Progress Bar */}
      <div className="w-full max-w-md mb-12 flex flex-col items-center">
        <h3 className="font-bold text-gray-300 text-lg mb-4">
          Development Progress - <span className="text-accent-blue">60%</span>
        </h3>
        <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="h-full bg-accent-blue rounded-full relative"
          />
        </div>
      </div>

      {/* 4. Waitlist Capture */}
      <div className="w-full max-w-md text-center">
        <p className="font-bold text-gray-300 mb-4">Be the first to know when we launch.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-6 py-3 rounded-full border border-gray-800 bg-gray-900/50 text-white focus:outline-none focus:border-accent-blue transition-all"
          />
          <button type="submit" className="px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white font-bold rounded-full transition-colors">
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}