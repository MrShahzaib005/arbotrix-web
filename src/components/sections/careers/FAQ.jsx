"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Do I need prior hardware experience?",  a: "No. Our beginner modules cover the basics of embedded systems, but a foundational understanding of Python or C++ is highly recommended." },
  { q: "Do I need to buy my own robot?",         a: "For remote students, yes. We provide a strict hardware manifest (Raspberry Pi, specific sensors). Local students have access to the Arbotrix lab." },
  { q: "Is this a university degree?",           a: "No. This is a practical, industry-focused bootcamp. We care about what you can build, not your GPA." },
  { q: "Do you offer job placement?",            a: "While we don't guarantee jobs, top performers are regularly scouted for internal Arbotrix projects or referred to our industry partners." },
  { q: "What is the time commitment?",           a: "Expect to spend 10-15 hours a week between live sessions, code reviews, and hardware debugging." },
];

// Fixed values — no Math.random() to avoid hydration errors
const PARTICLES = [
  { w: 3, h: 3, top: 10, left: 8,  dur: 7,   delay: 0   },
  { w: 2, h: 2, top: 25, left: 92, dur: 9,   delay: 1   },
  { w: 4, h: 4, top: 60, left: 5,  dur: 6,   delay: 2   },
  { w: 2, h: 2, top: 75, left: 88, dur: 8,   delay: 0.5 },
  { w: 3, h: 3, top: 45, left: 95, dur: 7,   delay: 3   },
  { w: 2, h: 2, top: 88, left: 15, dur: 9,   delay: 1.5 },
  { w: 3, h: 3, top: 15, left: 80, dur: 6,   delay: 2.5 },
  { w: 2, h: 2, top: 50, left: 2,  dur: 8,   delay: 0.8 },
];

const LEFT_NODES  = [15, 35, 55, 75, 90];
const RIGHT_NODES = [20, 40, 60, 80];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative max-w-3xl mx-auto py-12 overflow-visible">

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-blue"
            style={{ width: p.w, height: p.h, top: `${p.top}%`, left: `${p.left}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      {/* Left circuit line */}
      <div className="absolute left-[-48px] top-0 bottom-0 w-px pointer-events-none hidden lg:block">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="origin-top absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/40 to-transparent"
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_2px_#00A3FF]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {LEFT_NODES.map((top, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-blue/50"
            style={{ top: `${top}%` }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Right circuit line */}
      <div className="absolute right-[-48px] top-0 bottom-0 w-px pointer-events-none hidden lg:block">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="origin-bottom absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent"
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_2px_#00A3FF]"
          animate={{ top: ["100%", "0%", "100%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {RIGHT_NODES.map((top, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-blue/50"
            style={{ top: `${top}%` }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">
          [ FAQ ]
        </p>
        <h2 className="text-3xl font-black text-white mb-10">
          Frequently Asked <span className="text-accent-blue">Questions</span>
        </h2>
      </motion.div>

      {/* FAQ items */}
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === i
                ? "border-accent-blue/60 bg-[#0d1a26] shadow-[0_0_24px_0px_#00A3FF22]"
                : "border-white/10 bg-[#111111] hover:border-accent-blue/30"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-accent-blue/50 font-bold w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bold text-white group-hover:text-accent-blue transition-colors duration-200">
                  {faq.q}
                </span>
              </div>
              <motion.div
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="ml-4 shrink-0"
              >
                {openIndex === i
                  ? <Minus className="w-5 h-5 text-accent-blue" />
                  : <Plus  className="w-5 h-5 text-gray-500 group-hover:text-accent-blue transition-colors" />
                }
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-4 border-t border-white/10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="origin-left w-8 h-0.5 bg-accent-blue rounded-full mb-3"
                    />
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-accent-blue/10 blur-[60px] rounded-full pointer-events-none"
      />
    </section>
  );
}