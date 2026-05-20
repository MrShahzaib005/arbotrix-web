"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Cpu, ArrowRight } from "lucide-react";

export default function CourseDetailClient({ course }) {
  return (
    <div className="pt-28 max-w-7xl mx-auto px-6">
      
      {/* Back Button */}
      <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* LEFT COLUMN: The Facts */}
        <div className="lg:col-span-7 flex flex-col">
          
          <div className="mb-6 self-start">
            <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase ${course.levelColor}`}>
              {course.level}
            </span>
          </div>

          <h1 className="font-black text-4xl md:text-5xl text-white leading-tight tracking-tighter uppercase mb-4">
            {course.title}
          </h1>

          <p className="text-accent-blue text-lg font-bold mb-8">
            {course.tagline}
          </p>

          <div className="w-12 h-1 bg-gray-800 mb-8" />

          <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Briefing</h3>
          <p className="text-gray-400 leading-relaxed mb-10">
            {course.about}
          </p>

          <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Key Objectives</h3>
          <div className="flex flex-col gap-4 mb-10">
            {course.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#131620] border border-gray-800 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" />
                <span className="text-gray-300 text-sm">{outcome}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: The Action Card */}
        <div className="lg:col-span-5 w-full bg-[#131620] border border-gray-800 rounded-3xl p-8 lg:sticky lg:top-28 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/5 blur-[60px] rounded-full pointer-events-none" />

          <p className="font-mono text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Registration Fee</p>
          <div className="mb-8">
            <span className="font-black text-5xl text-white">{course.price}</span>
            <span className="block text-gray-500 text-xs mt-2 uppercase tracking-wider">Non-Refundable • Manual Verification</span>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-[#0B0D14] border border-gray-800 rounded-xl">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Duration</p>
                <p className="text-white text-sm font-bold">{course.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[#0B0D14] border border-gray-800 rounded-xl">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-white text-sm font-bold">{course.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[#0B0D14] border border-gray-800 rounded-xl">
              <Cpu className="w-5 h-5 text-accent-blue" />
              <div>
                <p className="text-[10px] text-accent-blue uppercase tracking-widest font-bold">Hardware</p>
                <p className="text-white text-sm font-bold">{course.hardware}</p>
              </div>
            </div>
          </div>

          {/* THE BRIDGE: This links to the secure enrollment gate */}
          <Link
            href={`/courses/${course.id}/enroll`}
            className="w-full group flex items-center justify-center gap-3 bg-accent-blue hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.2)] hover:shadow-[0_0_30px_rgba(0,163,255,0.4)]"
          >
            Initialize Enrollment
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
        </div>

      </div>
    </div>
  );
}