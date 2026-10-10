"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Cpu } from "lucide-react";
// Import your custom enrollment form instead of using Google Forms
import EnrollFormClient from "@/app/courses/[id]/enroll/EnrollFormClient";

export default function CourseDetailClient({ course }) {
  const outcomesArray = Array.isArray(course.outcomes) ? course.outcomes : [];

  return (
    <div className="relative pt-32 lg:pt-28 pb-18 px-6 overflow-hidden">
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =========================================
            UNIFIED HEADER SECTION
            ========================================= */}
        <div className="mb-16">
          {/* FIX: Added py-2 min-h-[44px] for mobile touch targets */}
          <Link href="/courses" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-sm font-bold uppercase tracking-widest transition-colors mb-3 group py-2 min-h-[44px]">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Catalog
          </Link>

          <div className="max-w-4xl">
            <div className="mb-3">
              {/* FIX: Applied md:text-xs responsive typography */}
              <span className="text-[10px] md:text-xs font-black tracking-widest px-3 py-1.5 rounded-full border uppercase shadow-sm bg-blue-50 text-blue-700 border-blue-200">
                {course.level}
              </span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl text-slate-900 leading-[0.95] tracking-tighter uppercase mb-6 drop-shadow-sm">
              {course.title}
            </h1>

            <p className="text-blue-600 text-xl font-heading font-black uppercase tracking-tight">
              {course.tagline || "Advanced Robotics Training"}
            </p>
          </div>
        </div>

        {/* =========================================
            CONTENT & ACTION GRID
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Briefing & Objectives */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-8" />

            <h3 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Briefing</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
              {course.about || "Course briefing is currently being updated by the engineering team."}
            </p>

            <h3 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Key Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomesArray.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-bold leading-tight">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The Action Card (Replaced Google Form with your Custom Form) */}
          <div className="lg:col-span-5 w-full bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:sticky lg:top-28 shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            
            <div className="mb-8 pb-8 border-b border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] font-black uppercase tracking-widest text-cyan-700 mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Applications Open
              </div>
              <h3 className="text-slate-900 text-3xl font-heading font-black tracking-tighter mb-2 uppercase">
                Secure Your Spot
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Submit your details below to begin the enrollment process. 
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest font-black mb-0.5">Duration</p>
                  <p className="text-slate-900 text-sm font-bold">{course.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <MapPin className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest font-black mb-0.5">Location</p>
                  <p className="text-slate-900 text-sm font-bold">{course.location}</p>
                </div>
              </div>

              {course.hardware && (
                <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-[10px] md:text-[11px] text-blue-500 uppercase tracking-widest font-black mb-0.5">Hardware</p>
                    <p className="text-slate-900 text-sm font-bold">{course.hardware}</p>
                  </div>
                </div>
              )}
            </div>

            {/* FIX: Injecting your custom internal form here directly */}
            <div className="pt-2 border-t border-slate-100">
              <EnrollFormClient courseId={course.id} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}