"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const ANGLES = [
  { label: "Front View",  src: "/images/dodo-front.png",  desc: "Front-facing with OAK-D camera and display screen showing live delivery status." },
  { label: "Back View",   src: "/images/dodo-back.jpeg",  desc: "Rear chassis showing battery bay, charging port, and motor controllers." },
  { label: "Top-Down",    src: "/images/dodo-front.png",  desc: "Top view showing shelf arm layout and spatial sensor placement." },
];

const SPECS = [
  { label: "Processor",    value: "Raspberry Pi 5 (8GB)"  },
  { label: "Vision",       value: "OAK-D Spatial AI"      },
  { label: "Navigation",   value: "ROS2 Humble + Nav2"    },
  { label: "SLAM",         value: "SLAM Toolbox"          },
  { label: "Drive",        value: "Differential Drive"    },
  { label: "Payload",      value: "3-Shelf Delivery Arms" },
  { label: "Connectivity", value: "Wi-Fi 6 + Ethernet"    },
  { label: "Status",       value: "Prototyping — 30%"     },
];

const FEATURES = [
  { title: "Autonomous Navigation",  desc: "Full Nav2 stack with SLAM mapping, AMCL localization, and real-time obstacle avoidance in dynamic environments." },
  { title: "Spatial AI Perception",  desc: "OAK-D camera provides depth estimation and object detection to identify floors, obstacles, and delivery targets." },
  { title: "Multi-Floor Delivery",   desc: "3-tier shelf arm system designed for hospital, hotel, and warehouse tray and parcel delivery operations." },
  { title: "ROS2 Architecture",      desc: "Fully modular ROS2 node graph. Each subsystem — perception, navigation, UI — runs as an independent node." },
  { title: "Onboard Display",        desc: "Integrated touch display showing delivery status, order queue, and live system diagnostics." },
  { title: "Edge Computing",         desc: "All processing runs locally on-device. No cloud dependency. Works in offline environments." },
];

const TIMELINE = [
  { phase: "Phase 1", title: "Concept & Architecture",  status: "done",        desc: "Hardware selection, ROS2 system design, mechanical CAD." },
  { phase: "Phase 2", title: "Chassis & Electronics",   status: "done",        desc: "3D printing, motor controller wiring, PCB layout." },
  { phase: "Phase 3", title: "Navigation Stack",        status: "in-progress", desc: "SLAM mapping, Nav2 integration, obstacle avoidance tuning." },
  { phase: "Phase 4", title: "Perception & AI",         status: "upcoming",    desc: "OAK-D integration, floor detection, delivery target recognition." },
  { phase: "Phase 5", title: "Production & Deploy",     status: "upcoming",    desc: "Endurance testing, UI polish, first client deployment." },
];

export default function DodoXClient() {
  const [activeAngle, setActiveAngle] = useState(0);

  return (
    <div className="pb-24 bg-[#0B0D14] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[90svh] flex items-center overflow-hidden bg-[#0B0D14]">
        {/* Arbotrix Global Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />
        
        {/* Glows */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[140px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors duration-200 mb-16 group">
              <span className="w-8 h-8 rounded-full bg-[#131620] border border-gray-800 flex items-center justify-center group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-200">
                <ArrowLeft className="w-4 h-4" />
              </span>
              Back to Home
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* LEFT — Robot image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-[48%] shrink-0"
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#131620] border border-gray-800 min-h-[500px] flex items-center justify-center shadow-lg">
                <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent-blue/40 rounded-tl-xl" />
                <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-accent-blue/40 rounded-tr-xl" />
                <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-accent-blue/40 rounded-bl-xl" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent-blue/40 rounded-br-xl" />

                <motion.div animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 bg-accent-blue/15 rounded-full blur-3xl" />
                </motion.div>

                <div className="absolute top-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-yellow-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  Prototyping — 30%
                </div>

                <motion.img
                  src="/images/dodo-front.png"
                  alt="Dodo-X Robot"
                  className="relative z-10 w-full max-w-[320px] object-contain drop-shadow-2xl"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-gray-500 uppercase tracking-widest">
                  Dodo-X v0.3
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Text content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">[ Case Study ]</p>
              <h1 className="font-black text-6xl md:text-8xl text-white leading-none tracking-tighter uppercase mb-2">
                Dodo<span className="text-accent-blue">-X</span>
              </h1>
              <h2 className="font-black text-lg md:text-xl text-gray-400 uppercase tracking-widest mb-6">Autonomous Floor Navigation</h2>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="origin-left w-16 h-0.5 bg-accent-blue rounded-full mb-8" />
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A complete hardware-software integration built on <span className="text-white font-bold">ROS2 Humble</span>, <span className="text-white font-bold">Raspberry Pi 5</span>, and <span className="text-white font-bold">OAK-D spatial AI</span>.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                Dodo-X is designed for hospital corridors, hotel floors, and warehouse environments. It maps its surroundings in real time, localizes itself, and navigates autonomously — all without cloud connectivity.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "30%",  label: "Complete" },
                  { value: "Nav2", label: "Navigation" },
                  { value: "Edge", label: "AI Runtime" },
                ].map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} className="bg-[#131620] border border-gray-800 rounded-xl p-4 text-center">
                    <div className="font-black text-2xl text-accent-blue mb-1">{s.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["ROS2 Humble", "Raspberry Pi 5", "OAK-D", "Nav2", "SLAM"].map((tag) => (
                  <span key={tag} className="bg-[#131620] border border-gray-800 text-gray-400 text-xs font-bold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ANGLE VIEWER ── */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-2">[ Visual Reference ]</p>
          <h2 className="font-black text-3xl text-white uppercase tracking-tighter mb-10">Every <span className="text-accent-blue">Angle</span></h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex lg:flex-col gap-3 lg:w-[150px] order-2 lg:order-1">
            {ANGLES.map((a, i) => (
              <button key={i} onClick={() => setActiveAngle(i)} className={`relative rounded-xl overflow-hidden border flex-1 lg:flex-none lg:h-[110px] transition-all duration-200 ${activeAngle === i ? "border-accent-blue shadow-[0_0_15px_rgba(0,163,255,0.15)]" : "border-gray-800 hover:border-gray-600"}`}>
                <img src={a.src} alt={a.label} className="w-full h-full object-contain bg-[#0B0D14] p-2" />
                {activeAngle === i && <div className="absolute inset-0 bg-accent-blue/10" />}
              </button>
            ))}
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div key={activeAngle} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }} className="relative rounded-2xl overflow-hidden bg-[#131620] border border-gray-800 min-h-[480px] flex items-center justify-center shadow-lg">
                <img src={ANGLES[activeAngle].src} alt={ANGLES[activeAngle].label} className="relative z-10 max-h-[420px] object-contain" />
                <button onClick={() => setActiveAngle((p) => (p - 1 + ANGLES.length) % ANGLES.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0D14] border border-gray-800 flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all duration-200 z-20">
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button onClick={() => setActiveAngle((p) => (p + 1) % ANGLES.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0D14] border border-gray-800 flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all duration-200 z-20">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0B0D14]/80 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-1.5 text-xs font-bold text-white z-20">
                  {ANGLES[activeAngle].label}
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">{ANGLES[activeAngle].desc}</p>
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-2">[ Hardware ]</p>
          <h2 className="font-black text-3xl text-white uppercase tracking-tighter mb-8">Under the <span className="text-accent-blue">Hood</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SPECS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="bg-[#131620] border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-colors duration-300 group">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">{s.label}</div>
              <div className="font-black text-white text-sm leading-snug group-hover:text-accent-blue transition-colors duration-300">{s.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-2">[ Capabilities ]</p>
          <h2 className="font-black text-3xl text-white uppercase tracking-tighter mb-8">What It <span className="text-accent-blue">Does</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="group bg-[#131620] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-4 h-4 text-accent-blue" />
              </div>
              <h3 className="font-black text-white text-sm mb-2 group-hover:text-accent-blue transition-colors duration-300">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-2">[ Roadmap ]</p>
          <h2 className="font-black text-3xl text-white uppercase tracking-tighter mb-10">Development <span className="text-accent-blue">Timeline</span></h2>
        </motion.div>

        <div className="relative flex flex-col gap-0 max-w-3xl">
          <div className="absolute left-[18px] top-5 bottom-5 w-px bg-gradient-to-b from-accent-blue/60 via-accent-blue/20 to-transparent" />

          {TIMELINE.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.09 }} className="flex gap-6 pb-6 last:pb-0">
              <div className={`relative z-10 w-5 h-5 rounded-full border-2 shrink-0 mt-1 flex items-center justify-center ${
                item.status === "done"        ? "bg-green-500 border-green-400"  :
                item.status === "in-progress" ? "bg-accent-blue border-accent-blue shadow-[0_0_12px_rgba(0,163,255,0.6)]" :
                                                "bg-[#131620] border-gray-800"
              }`}>
                {item.status === "done" && <div className="w-2 h-2 rounded-full bg-white" />}
                {item.status === "in-progress" && <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-white" />}
              </div>

              <div className={`flex-1 rounded-xl p-5 border transition-all duration-300 ${
                item.status === "done"        ? "bg-green-500/5  border-green-500/15"   :
                item.status === "in-progress" ? "bg-accent-blue/5 border-accent-blue/25" :
                                                "bg-[#131620] border-gray-800"
              }`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{item.phase}</span>
                  <span className={`font-mono text-[10px] uppercase tracking-wider font-black ${
                    item.status === "done"        ? "text-green-400"  :
                    item.status === "in-progress" ? "text-accent-blue" :
                                                    "text-gray-600"
                  }`}>
                    {item.status === "done" ? "✓ Complete" : item.status === "in-progress" ? "● Active" : "○ Upcoming"}
                  </span>
                </div>
                <h3 className="font-black text-white text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative bg-[#131620] border border-gray-800 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden shadow-lg">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-blue/10 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent-blue/5 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent-blue/25 rounded-tl-xl" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent-blue/25 rounded-br-xl" />

          <div className="relative z-10">
            <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-3">[ Interested? ]</p>
            <h2 className="font-black text-3xl text-white uppercase tracking-tighter">
              Want Dodo-X in <span className="text-accent-blue">Your Facility?</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Get in touch to discuss deployment, customization, or partnership opportunities.
            </p>
          </div>
          <Link href="/contact" className="relative z-10 shrink-0 bg-accent-blue hover:bg-blue-400 text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-colors duration-200">
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}