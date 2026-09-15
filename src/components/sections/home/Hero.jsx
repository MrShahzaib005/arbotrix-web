"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

// The Data Matrix: Gradients updated to darker, richer tones for white background contrast
const HERO_SCENARIOS = [
  {
    id: "tera-x",
    category: "01 // UGV Platform",
    headline: "Industrial Autonomy. Real World Systems.",
    problemText: "Built for heavy payloads and unpredictable environments. The Tera-X is a rugged Unmanned Ground Vehicle (UGV) engineered with a custom sheet metal chassis and native ROS2 integration for advanced autonomous deployment.",
    image: "/images/tera-x.png",
    link: "/products/tera-x",
    // Deepened from yellow-400 to amber-600 for readability
    accent: "from-amber-500 to-orange-600",
    scale: "scale-100"
  },
  {
    id: "omni-vac",
    category: "02 // Spatial Maintenance",
    headline: "Automated Facility Maintenance.",
    problemText: "Solve labor shortages with intelligent hardware. Our autonomous floor systems utilize edge-computed spatial AI and LiDAR to map facilities, avoid dynamic obstacles, and execute precise cleaning paths without human oversight.",
    image: "/images/optic-clean.png", 
    link: "/products/omni-vac",
    // Deepened for stark contrast
    accent: "from-blue-600 to-indigo-700",
    scale: "scale-75"
  },
  {
    id: "aero-drone",
    category: "03 // Aerial Reconnaissance",
    headline: "Autonomous Aerial Intelligence.",
    problemText: "Bypass ground obstacles with real-time spatial awareness. The Aero-X drone integrates lightweight edge computing with Pixhawk flight controllers to execute automated perimeter mapping and continuous object tracking.",
    image: "/images/aero-x.png", 
    link: "/products/aero-x",
    accent: "from-cyan-600 to-blue-700",
    scale: "scale-75"
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = HERO_SCENARIOS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SCENARIOS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SCENARIOS.length) % HERO_SCENARIOS.length);
  };

  return (
    // Replaced min-h-[100svh] with a hard min-h-screen to prevent layout crushing, adjusted padding
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 pt-32 pb-16 font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none transition-all duration-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80" />
      </div>

      {/* TIGHTENED GAP: gap-12 -> gap-8 to bring images closer to text */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center flex-1">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                {activeData.category}
              </div>

              {/* FIX: Reduced text-7xl to lg:text-[3.5rem] and tightened leading to prevent 5-line wraps */}
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tighter uppercase leading-[1.05] mb-3 drop-shadow-sm max-w-2xl">
                {activeData.headline.split('.')[0]}. <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeData.accent}`}>
                  {activeData.headline.split('.')[1] || "Real Systems."}
                </span>
              </h1>

              {/* FIX: Kept text-base for compact readability */}
              <p className="font-sans text-base text-slate-600 font-medium max-w-lg mb-3 leading-relaxed">
                {activeData.problemText}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={activeData.link}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
                >
                  View Specs <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 font-heading font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Hardware Carousel */}
        <div className="lg:col-span-6 relative h-[350px] lg:h-[450px] flex items-center justify-center group">
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:-left-6 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: 3 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                // FIX: Hard-locked max-width and max-height so the drone/vacuum cannot outgrow the UGV
                className="relative w-full max-w-[400px] lg:max-w-[500px] h-full max-h-[300px] lg:max-h-[400px] flex items-center justify-center"
              >
                <img
                  src={activeData.image}
                  alt={activeData.id}
                  // FIX: object-contain inside a strict boundary guarantees identical scaling
                  className={`w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] z-10 relative transition-transform duration-500 ${activeData.scale}`}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100/50 blur-[80px] rounded-full -z-10" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={handleNext}
            className="absolute right-0 md:-right-6 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* BOTTOM SELECTOR */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 mt-4 hidden md:block">
        <div className="flex items-center gap-4 border-t border-slate-200 pt-6 overflow-x-auto pb-2 scrollbar-hide">
          {HERO_SCENARIOS.map((scenario, index) => (
            <button
              key={scenario.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-4 px-6 py-3 rounded-2xl border transition-all shrink-0 min-w-[240px] text-left font-sans ${
                activeIndex === index 
                  ? "bg-blue-50 border-blue-200 shadow-md" 
                  : "bg-white border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100 shadow-sm"
              }`}
            >
              <div className={`text-xl font-heading font-black ${activeIndex === index ? "text-blue-600" : "text-slate-400"}`}>
                0{index + 1}
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] font-bold uppercase tracking-widest font-sans ${activeIndex === index ? "text-blue-500" : "text-slate-400"}`}>
                  Select Unit
                </span>
                <span className={`text-xs font-semibold tracking-wide font-sans ${activeIndex === index ? "text-blue-900" : "text-slate-700"}`}>
                  {scenario.id === "tera-x" ? "Tera-X Platform" : scenario.id === "omni-vac" ? "Omni-Vac System" : "Aero-X Drone"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
