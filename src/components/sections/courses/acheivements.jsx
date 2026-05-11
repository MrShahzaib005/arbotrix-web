"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const ACHIEVEMENTS = [
  {
    value: 1200,
    suffix: "+",
    label: "Students Trained",
    desc: "Real learners who built real robots.",
  },
  {
    value: 48,
    suffix: "+",
    label: "Courses Completed",
    desc: "From ROS2 basics to full autonomous systems.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    desc: "Students who recommend Arbotrix to peers.",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industry Projects",
    desc: "Real deployments built during training.",
  },
];

function useCounter(target, isInView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return count;
}

function StatCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(item.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-3 hover:border-accent-blue hover:shadow-lg transition-all duration-300 group"
    >
      {/* Number */}
      <div className="flex items-end gap-0.5">
        <span className="font-heading text-5xl font-black text-black leading-none">
          {count.toLocaleString()}
        </span>
        <span className="font-heading text-3xl font-black text-accent-blue leading-none mb-1">
          {item.suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="font-heading text-base font-black text-black uppercase tracking-tight">
        {item.label}
      </h3>

      {/* Animated divider */}
      <div className="w-8 h-0.5 bg-accent-blue rounded-full group-hover:w-16 transition-all duration-300" />

      {/* Description */}
      <p className="font-body text-gray-500 text-sm leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="w-full">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
          [ By The Numbers ]
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-black leading-tight">
          Results That{" "}
          <span className="text-accent-blue">Speak For Themselves.</span>
        </h2>
      </motion.div>

      {/* All 4 in one line */}
      <div className="flex gap-5">
        {ACHIEVEMENTS.map((item, i) => (
          <StatCard key={item.label} item={item} index={i} />
        ))}
      </div>

    </section>
  );
}