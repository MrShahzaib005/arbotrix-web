"use client";
import { motion } from "framer-motion";

const PERKS = [
  "Remote-friendly",
  "Competitive salary",
  "Latest tech stack",
  "High-trust culture",
  "Equity options",
];

const STATS = [
  { value: "7",      label: "Open Roles"  },
  { value: "3",      label: "Departments" },
  { value: "Remote", label: "Work Style"  },
];

export default function CareersHeader() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">

      {/* Robot background image */}
      <img
        src="images\dodopic(1).png"
        alt="Robot background"
        className="absolute inset-0 w-400 h-380 object-cover object-center"
      />

      {/* Dark gradient — heavy left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/40" />

      {/* Blue orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 pb-20 flex flex-col lg:flex-row items-start justify-between gap-12">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-accent-blue/40 bg-accent-blue/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-blue font-bold">
              We're Hiring
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-black text-white leading-none uppercase mb-6">
            Build the Future <br />
            <span className="text-accent-blue">With Us.</span>
          </h1>

          {/* Description */}
          <p className="font-body text-gray-300 text-lg leading-relaxed max-w-lg mb-10">
            A team of engineers, designers, and builders who ship real
            robots to real clients. Remote-friendly, high-trust, high-output.
          </p>

          {/* Perk Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {PERKS.map((perk) => (
              <span
                key={perk}
                className="inline-flex items-center gap-2 font-body text-sm text-white bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="text-accent-blue font-bold text-base">✓</span>
                {perk}
              </span>
            ))}
          </motion.div>

          {/* Blue underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="origin-left w-16 h-1 bg-accent-blue rounded-full mt-10"
          />
        </motion.div>

        {/* Right — stat boxes */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-row lg:flex-col gap-4 w-full lg:w-[200px]"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex-1 lg:flex-none bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-accent-blue hover:bg-white/15 transition-all duration-300"
            >
              <div className="font-heading text-3xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}