"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Cpu, Mountain } from "lucide-react";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 font-sans relative overflow-hidden">
      {/* Subtle blueprint texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden group">
          
          {/* Left: Editorial Content */}
          <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-black uppercase tracking-widest text-amber-700 mb-6 shadow-sm w-fit">
              <FileText className="w-3 h-3" />
              Lab Report // 001
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-6">
              Engineering <br />
              <span className="text-amber-500">The Tera-X.</span>
            </h2>

            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Moving heavy material across farms and industrial yards is slow and unsafe. See how we bridged the gap between ROS2 simulation and physical reality by engineering a 200kg-payload autonomous field unit from the ground up.
            </p>

            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Mountain className="w-4 h-4 text-slate-400" /> All-Terrain
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Cpu className="w-4 h-4 text-slate-400" /> ROS2 Native
              </div>
            </div>

            <Link 
              href="/case-study/tera-x"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-amber-500 text-white font-heading font-black tracking-widest text-xs uppercase shadow-md transition-all duration-300 w-fit sm:w-auto"
            >
              Read Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: The Image Overlap */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-full min-h-[400px] bg-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image 
              src="/images/tera-x.png" // Uses your existing Tera-X image
              alt="Tera-X UGV Chassis"
              fill
              className="object-cover lg:object-contain p-8 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}