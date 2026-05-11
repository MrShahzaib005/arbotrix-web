"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Stat = ({ end, label, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-accent-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-gray-500">{label}</div>
    </div>
  );
};

export default function NumbersBar() {
  return (
    <section className="py-20 border-y border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <Stat end={15} label="Projects Deployed" />
        <Stat end={500} label="Students Trained" />
        <Stat end={24} label="Hardware Integrations" />
      </div>
    </section>
  );
}