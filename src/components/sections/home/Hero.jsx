"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <img
        src="/images/dodopic.png"
        alt="Robot background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* 2. The Dark Overlay Gradient (Crucial for text readability) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0D14]" />

      {/* 3. The Foreground Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-6 max-w-7xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Engineering the Future <br className="hidden md:block" /> of{" "}
          <span className="text-accent-blue drop-shadow-lg">Autonomy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed drop-shadow-md"
        >
          We bridge the gap between high-performance software architecture and
          precision hardware. Built for scale, engineered for reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link
            href="/services"
            className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-accent-blue/20"
          >
            Work With Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/courses"
            className="bg-[#131620]/80 backdrop-blur-md hover:bg-accent-blue border border-gray-800 hover:border-accent-blue text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-[0_0_20px_rgba(0,163,255,0.4)]"
          >
            Explore Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
