"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export const StatCounter = ({ value, suffix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <div className="flex flex-col items-center" ref={ref}>
      {/* Changed to text-accent-blue */}
      <div className="flex text-5xl font-extrabold text-accent-blue font-heading mb-2">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      {/* Changed to text-text-muted */}
      <span className="font-mono text-text-muted text-xs uppercase tracking-widest font-bold">
        {label}
      </span>
    </div>
  );
};