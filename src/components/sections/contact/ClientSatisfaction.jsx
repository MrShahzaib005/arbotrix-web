"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { label: "Client Satisfaction",        value: 97 },
  { label: "Projects Delivered On Time",  value: 92 },
  { label: "Students Would Recommend",    value: 95 },
  { label: "Repeat Clients",              value: 84 },
  { label: "Hardware Uptime Rate",        value: 99 },
];

function Bar({ metric, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-gray-300">{metric.label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
          className="font-heading text-sm font-black text-white"
        >
          {metric.value}%
        </motion.span>
      </div>

      {/* Track */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${metric.value}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay: index * 0.15, ease: "easeOut" }}
          className="h-full rounded-full bg-accent-blue relative"
        >
          {/* Glow tip */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white blur-[3px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ClientSatisfaction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="bg-[#0B0D14] rounded-2xl p-8 md:p-10 border border-white/10 h-full"
    >
      {/* Header */}
      <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
        [ Client Feedback ]
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase mb-2">
        Why They <br />
        <span className="text-accent-blue">Trust Us.</span>
      </h2>
      <p className="font-body text-gray-400 text-sm mb-10">
        Numbers backed by real client and student feedback.
      </p>

      {/* Bars */}
      <div className="flex flex-col gap-6">
        {METRICS.map((metric, i) => (
          <Bar key={metric.label} metric={metric} index={i} />
        ))}
      </div>

      {/* Bottom decorative stat row */}
      <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
        {[
          { value: "50+", label: "Clients" },
          { value: "5★",  label: "Rating"  },
          { value: "2yr", label: "Track Record" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="font-heading text-2xl font-black text-accent-blue">{stat.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}