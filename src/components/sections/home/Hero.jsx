"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const titleText = "Engineering the Future of Autonomy.".split(" ");

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="flex flex-wrap justify-center gap-x-4 mb-6">
        {titleText.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="text-xl text-gray-500 max-w-2xl mb-10"
      >
        We bridge the gap between high-performance software architecture and precision hardware. Built for scale, engineered for reality.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 w-full justify-center"
      >
        <Link href="/services" className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2">
          Work With Us <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/courses" className="bg-white hover:bg-gray-50 border border-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all text-center">
          Explore Courses
        </Link>
      </motion.div>
    </section>
  );
}