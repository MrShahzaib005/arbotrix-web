"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductTeaser() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Next step: Wire this to Supabase
    console.log("Waitlist Lead Captured:", email);
  };

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center">
      
      {/* 1. Robot Silhouette / Asset */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-64 h-64 md:w-96 md:h-96 mb-8 flex justify-center items-center"
      >
        {/* TODO: Replace this div with your actual robot image like: <img src="/robot-silhouette.png" alt="Robot" className="object-contain" /> */}
        <div className="w-48 h-64 bg-gradient-to-b from-gray-800 to-transparent rounded-t-full blur-[2px] opacity-90 shadow-2xl" />
      </motion.div>

      {/* 2. Animated Progress Bar */}
      <div className="w-full max-w-md mb-12 flex flex-col items-center">
        <h3 className="font-bold text-gray-800 text-lg mb-4">
          Development Progress - <span className="text-accent-blue">60%</span>
        </h3>
        
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="h-full bg-accent-blue rounded-full relative"
          >
            {/* Optional subtle shine effect on the progress bar */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* 3. Waitlist Capture Form */}
      <div className="w-full max-w-md text-center">
        <p className="font-bold text-gray-800 mb-4">Waitlist email capture form ready</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="flex-grow px-6 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all shadow-sm"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white font-bold rounded-full transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Register now
          </button>
        </form>
        
        <p className="text-xs text-gray-400 mt-6 mt-4">
          Strictly confidential | Zero spam policy
        </p>
      </div>

    </section>
  );
}