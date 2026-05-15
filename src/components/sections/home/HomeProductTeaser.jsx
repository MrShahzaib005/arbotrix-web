"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomeProductTeaser() {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false); // 1. Add mounted state

  // 2. Set mounted to true only after client hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teaser Lead:", email);
  };
  return (
    <section className="relative w-full bg-[#0B0D14] py-24 overflow-hidden border-t border-gray-900">
      {/* Background Code-Only Circuit/Particle Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent-blue rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Something is coming</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Project Tera-X</h3>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          We are finalizing the architecture for our next-generation autonomous platform. High intelligence. Viable price point.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-6 py-3 rounded-full border border-gray-800 bg-gray-900/80 text-white focus:outline-none focus:border-accent-blue"
          />
          <button type="submit" className="px-8 py-3 bg-white text-black hover:bg-gray-200 font-bold rounded-full transition-colors">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}