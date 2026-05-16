"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Cpu, ArrowRight, PlayCircle } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 border-b border-gray-900 bg-[#0B0D14]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Course Meta & Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          {/* Breadcrumbs / Tag */}
          <div className="flex items-center gap-3 mb-6">
            <Link href="/courses" className="text-sm font-bold text-gray-500 hover:text-white transition-colors">Courses</Link>
            <span className="text-gray-700">/</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
              Beginner Friendly
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight">
            ROS2 & Linux <br />
            <span className="text-accent-blue">Fundamentals.</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
            The essential operating system foundation for modern robotics. Master the ROS2 Humble ecosystem, node communication, and Linux CLI in a hands-on, physical lab environment.
          </p>

          {/* Logistics Grid (Elevated Slate) */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-[#131620] p-4 rounded-2xl border border-gray-800 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Next Cohort</div>
                <div className="text-sm font-medium text-white">Oct 15 - Nov 20, 2026</div>
              </div>
            </div>
            <div className="bg-[#131620] p-4 rounded-2xl border border-gray-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</div>
                <div className="text-sm font-medium text-white">Arbotrix HQ Labs</div>
              </div>
            </div>
            <div className="bg-[#131620] p-4 rounded-2xl border border-gray-800 flex items-start gap-3 col-span-2">
              <Cpu className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-1">Hardware Provided</div>
                <div className="text-sm font-medium text-white">Raspberry Pi 5 + Arbotrix Dev Kit</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] overflow-hidden">
              <span className="transition-transform duration-300 group-hover:-translate-x-3">Apply for Cohort</span>
              <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
            </button>
            <button className="px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent hover:bg-[#131620] border border-gray-800 rounded-full text-center">
              Download Syllabus
            </button>
          </div>
        </motion.div>

        {/* Right Column: Media Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          {/* 16:9 Video/Image Wrapper */}
          <div className="relative aspect-video bg-[#131620] rounded-3xl border border-gray-800 overflow-hidden group cursor-pointer shadow-2xl">
            {/* Fallback Image - Replace with actual class/lab photo */}
            {/* <img src="/images/lab-action.jpg" alt="Students working on robots" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" /> */}
            <div className="absolute inset-0 bg-gray-900" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent-blue/90 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(0,163,255,0.4)]">
                <PlayCircle className="w-10 h-10 text-white ml-1" />
              </div>
            </div>

            {/* Subtle overlay text */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <span className="text-white font-bold text-sm drop-shadow-md">Watch Lab Preview</span>
              <span className="text-gray-300 text-xs font-mono drop-shadow-md">02:45</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}