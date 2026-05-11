"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Do I need prior hardware experience?", a: "No. Our beginner modules cover the basics of embedded systems, but a foundational understanding of Python or C++ is highly recommended." },
  { q: "Do I need to buy my own robot?", a: "For remote students, yes. We provide a strict hardware manifest (Raspberry Pi, specific sensors). Local students have access to the Arbotrix lab." },
  { q: "Is this a university degree?", a: "No. This is a practical, industry-focused bootcamp. We care about what you can build, not your GPA." },
  { q: "Do you offer job placement?", a: "While we don't guarantee jobs, top performers are regularly scouted for internal Arbotrix projects or referred to our industry partners." },
  { q: "What is the time commitment?", a: "Expect to spend 10-15 hours a week between live sessions, code reviews, and hardware debugging." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-bold text-gray-900">{faq.q}</span>
              {openIndex === i ? (
                <Minus className="w-5 h-5 text-accent-blue flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}