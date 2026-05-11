"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Grid/Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/20 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="relative z-10 text-center flex flex-col items-center px-6"
      >
        <h1 className="font-heading text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-4">
          404
        </h1>
        <div className="text-accent-blue font-bold tracking-[0.3em] uppercase text-sm mb-6">
          Navigation Coordinates Invalid
        </div>
        <p className="text-gray-400 max-w-md mb-10 leading-relaxed text-sm md:text-base">
          The requested route does not exist in our architecture. The page may have been moved, deleted, or you typed the URL incorrectly.
        </p>
        <Link href="/" className="inline-flex items-center text-sm font-bold text-black bg-white hover:bg-gray-200 py-3 px-8 rounded-full transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return to Base
        </Link>
      </motion.div>
    </main>
  );
}