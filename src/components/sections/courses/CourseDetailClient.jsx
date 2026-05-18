"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Package, Users } from "lucide-react";

export default function CourseDetailClient({ course }) {
  const savings = course.originalPrice - course.price;

  return (
    <div className="pt-28 pb-24">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#00A3FF 1px, transparent 1px), linear-gradient(90deg, #00A3FF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Blue glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Courses
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-black uppercase tracking-widest mb-6 ${course.levelBg} ${course.levelColor}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${course.levelDot}`} />
                {course.level}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                className="font-black text-4xl md:text-6xl text-white leading-tight tracking-tighter uppercase mb-4"
              >
                {course.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-8"
              >
                {course.tagline}
              </motion.p>

              {/* Meta pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Calendar, text: course.date },
                  { icon: MapPin,   text: course.location },
                  { icon: Package,  text: course.hardware },
                  { icon: Users,    text: `${course.seats} seats only` },
                ].map((item) => (
                  <span key={item.text} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
                    <item.icon className="w-3.5 h-3.5 text-accent-blue" />
                    {item.text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Pricing card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[320px] shrink-0 bg-[#111111] border border-white/10 rounded-2xl p-8 sticky top-28"
            >
              <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Early Bird Price</p>
              <div className="flex items-end gap-3 mb-1">
                <span className="font-black text-5xl text-white">${course.price}</span>
                <span className="text-gray-600 line-through text-xl mb-1">${course.originalPrice}</span>
              </div>
              <p className="text-green-400 text-sm font-bold mb-6">You save ${savings}</p>

              <div className="flex flex-col gap-3 text-sm text-gray-400 mb-8 border-t border-white/5 pt-6">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="text-white font-bold">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-white font-bold">In-person</span>
                </div>
                <div className="flex justify-between">
                  <span>Hardware</span>
                  <span className="text-accent-blue font-bold">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Seats left</span>
                  <span className="text-white font-bold">{course.seats}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-accent-blue hover:bg-blue-400 text-white font-black text-sm uppercase tracking-widest py-4 rounded-full text-center transition-colors duration-200"
              >
                Enroll Now
              </Link>
              <p className="text-gray-600 text-xs text-center mt-4">No payment now. We'll confirm your seat first.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">[ About This Course ]</p>
            <div className="w-12 h-0.5 bg-accent-blue rounded-full mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed">{course.about}</p>
          </motion.div>
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">[ Outcomes ]</p>
          <h2 className="font-black text-3xl text-white uppercase tracking-tighter mb-8">
            What You'll <span className="text-accent-blue">Build & Learn</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {course.outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-3 bg-[#111111] border border-white/5 rounded-xl p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-accent-blue mt-0.5 shrink-0" />
              <span className="text-gray-300 text-sm leading-relaxed">{outcome}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Syllabus ── */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">[ Syllabus ]</p>
          <h2 className="font-black text-3xl text-white uppercase tracking-tighter mb-8">
            Week by <span className="text-accent-blue">Week</span>
          </h2>
        </motion.div>
        <div className="flex flex-col gap-3 max-w-3xl">
          {course.syllabus.map((week, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex gap-5 bg-[#111111] border border-white/5 hover:border-accent-blue/30 rounded-xl p-5 transition-colors duration-300"
            >
              <div className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-accent-blue font-black pt-0.5 w-14">
                {week.week}
              </div>
              <div>
                <h3 className="font-black text-white text-sm mb-1">{week.topic}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{week.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-6">[ Tools & Tech Stack ]</p>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 text-gray-300 text-sm font-bold px-4 py-2 rounded-full"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] border border-white/10 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-blue/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">[ Limited Seats ]</p>
            <h2 className="font-black text-3xl text-white uppercase tracking-tighter">
              Ready to Start <span className="text-accent-blue">Building?</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Only {course.seats} seats available. Cohort starts {course.date.split("–")[0].trim()}.</p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 shrink-0 bg-accent-blue hover:bg-blue-400 text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-colors duration-200"
          >
            Secure Your Seat
          </Link>
        </motion.div>
      </section>

    </div>
  );
}