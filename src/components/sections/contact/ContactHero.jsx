"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden">

      {/* Robot background image */}
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop"
        alt="Robot"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Animated blue orb bottom left */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-blue/30 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Animated blue orb top right */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-accent-blue/40 bg-accent-blue/10 rounded-full px-4 py-1.5 mb-6"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-accent-blue"
          />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-blue font-bold">
            We're Online
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-black text-white uppercase leading-[1.0] mb-5"
        >
          Let's Build <br />
          <span className="text-accent-blue">Something Real.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-gray-300 text-lg max-w-lg"
        >
          Whether it's a custom robot, a collaboration, or just a question — we're here.
        </motion.p>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 bg-accent-blue rounded-full mt-6"
        />

      </div>
    </section>
  );
}