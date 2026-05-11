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
    <section className="w-full">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gray-300 bg-white rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-gray-600 font-bold">
              We're Hiring
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-black text-black leading-[1.05] mb-6">
            Build the Future <br />
            <span className="text-accent-blue">With Us.</span>
          </h1>

          {/* Description */}
          <p className="font-body text-gray-500 text-lg leading-relaxed max-w-lg mb-8">
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
                className="inline-flex items-center gap-2 font-body text-sm text-gray-700 bg-white border border-gray-200 rounded-full px-4 py-2"
              >
                <span className="text-accent-blue font-bold text-base">✓</span>
                {perk}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Stat Boxes ── */}
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
              className="flex-1 lg:flex-none bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-accent-blue hover:shadow-md transition-all duration-300"
            >
              <div className="font-heading text-3xl font-black text-black mb-1">
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