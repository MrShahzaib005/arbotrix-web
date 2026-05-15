"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FleetCTA() {
  return (
    <section className="bg-[#0B0D14] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
            [ Collaboration ]
          </p>
          <h2 className="font-black text-4xl md:text-5xl text-white tracking-tighter uppercase leading-tight">
            Want to build <br />
            <span className="text-accent-blue">with us?</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md text-sm leading-relaxed">
            Whether you need a custom platform or want to integrate one of our
            modules into your workflow — let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-blue hover:bg-blue-400 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-colors duration-200"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}