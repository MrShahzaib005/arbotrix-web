// "use client";
// import Link from "next/link";
// import { ArrowLeft, CheckCircle2, MapPin, Calendar, Cpu, ArrowRight } from "lucide-react";

// export default function CourseDetailClient({ course }) {
//   return (
//     <div className="pt-28 max-w-7xl mx-auto px-6">
      
//       {/* Back Button */}
//       <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors mb-10">
//         <ArrowLeft className="w-4 h-4" /> Back to Catalog
//       </Link>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
//         {/* LEFT COLUMN: The Facts */}
//         <div className="lg:col-span-7 flex flex-col">
          
//           <div className="mb-6 self-start">
//             <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase ${course.levelColor}`}>
//               {course.level}
//             </span>
//           </div>

//           <h1 className="font-black text-4xl md:text-5xl text-white leading-tight tracking-tighter uppercase mb-4">
//             {course.title}
//           </h1>

//           <p className="text-accent-blue text-lg font-bold mb-8">
//             {course.tagline}
//           </p>

//           <div className="w-12 h-1 bg-gray-800 mb-8" />

//           <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Briefing</h3>
//           <p className="text-gray-400 leading-relaxed mb-10">
//             {course.about}
//           </p>

//           <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Key Objectives</h3>
//           <div className="flex flex-col gap-4 mb-10">
//             {course.outcomes.map((outcome, i) => (
//               <div key={i} className="flex items-start gap-3 bg-[#131620] border border-gray-800 rounded-xl p-4">
//                 <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" />
//                 <span className="text-gray-300 text-sm">{outcome}</span>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* RIGHT COLUMN: The Action Card */}
//         <div className="lg:col-span-5 w-full bg-[#131620] border border-gray-800 rounded-3xl p-8 lg:sticky lg:top-28 shadow-2xl relative overflow-hidden">
          
//           {/* Subtle Glow */}
//           <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/5 blur-[60px] rounded-full pointer-events-none" />

//           <p className="font-mono text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Registration Fee</p>
//           <div className="mb-8">
//             <span className="font-black text-5xl text-white">{course.price}</span>
//             <span className="block text-gray-500 text-xs mt-2 uppercase tracking-wider">Non-Refundable • Manual Verification</span>
//           </div>

//           <div className="flex flex-col gap-4 mb-8">
//             <div className="flex items-center gap-3 p-4 bg-[#0B0D14] border border-gray-800 rounded-xl">
//               <Calendar className="w-5 h-5 text-gray-500" />
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Duration</p>
//                 <p className="text-white text-sm font-bold">{course.duration}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-4 bg-[#0B0D14] border border-gray-800 rounded-xl">
//               <MapPin className="w-5 h-5 text-gray-500" />
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Location</p>
//                 <p className="text-white text-sm font-bold">{course.location}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-4 bg-[#0B0D14] border border-gray-800 rounded-xl">
//               <Cpu className="w-5 h-5 text-accent-blue" />
//               <div>
//                 <p className="text-[10px] text-accent-blue uppercase tracking-widest font-bold">Hardware</p>
//                 <p className="text-white text-sm font-bold">{course.hardware}</p>
//               </div>
//             </div>
//           </div>

//           {/* THE BRIDGE: This links to the secure enrollment gate */}
//           <Link
//             href={`/courses/${course.id}/enroll`}
//             className="w-full group flex items-center justify-center gap-3 bg-accent-blue hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.2)] hover:shadow-[0_0_30px_rgba(0,163,255,0.4)]"
//           >
//             Initialize Enrollment
//             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//           </Link>
          
//         </div>

//       </div>
//     </div>
//   );
// }

// "use client";
// import Link from "next/link";
// import { ArrowLeft, CheckCircle2, MapPin, Calendar, Cpu, ExternalLink } from "lucide-react";

// // Helper function to color-code the badges based on difficulty
// const getLevelStyles = (level) => {
//   switch (level?.toUpperCase()) {
//     case "BEGINNER":
//       return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
//     case "INTERMEDIATE":
//       return "text-amber-400 bg-amber-400/10 border-amber-400/20";
//     case "ADVANCED":
//       return "text-rose-400 bg-rose-400/10 border-rose-400/20";
//     default:
//       return "text-gray-400 bg-gray-400/10 border-gray-400/20";
//   }
// };

// export default function CourseDetailClient({ course }) {
//   const levelColor = getLevelStyles(course.level);
  
//   // Replace this with your actual Google Form URL
//   const GOOGLE_FORM_URL = "https://forms.gle/YgvowiTCnazwzvAk7";

//   return (
//     <div className="pt-28 max-w-7xl mx-auto px-6">
      
//       {/* Back Button */}
//       <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors mb-10">
//         <ArrowLeft className="w-4 h-4" /> Back to Catalog
//       </Link>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
//         {/* LEFT COLUMN: The Facts (Restored to lg:col-span-7) */}
//         <div className="lg:col-span-7 flex flex-col">
          
//           <div className="mb-6 self-start">
//             <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase ${levelColor}`}>
//               {course.level}
//             </span>
//           </div>

//           <h1 className="font-black text-4xl md:text-5xl text-white leading-tight tracking-tighter uppercase mb-4">
//             {course.title}
//           </h1>

//           <p className="text-cyan-400 text-lg font-bold mb-8">
//             {course.tagline}
//           </p>

//           <div className="w-12 h-1 bg-gray-800 mb-8" />

//           <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Briefing</h3>
//           <p className="text-gray-400 leading-relaxed mb-10">
//             {course.about}
//           </p>

//           <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Key Objectives</h3>
//           <div className="flex flex-col gap-4 mb-10">
//             {/* Safely map over outcomes in case it's undefined */}
//             {course.outcomes?.map((outcome, i) => (
//               <div key={i} className="flex items-start gap-3 bg-[#131620] border border-gray-800 rounded-xl p-4">
//                 <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
//                 <span className="text-gray-300 text-sm">{outcome}</span>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* RIGHT COLUMN: The Action Card (Restored to lg:col-span-5) */}
//         <div className="lg:col-span-5 w-full bg-[#131620] border border-gray-800 rounded-3xl p-8 lg:sticky lg:top-28 shadow-2xl relative overflow-hidden">
          
//           {/* Subtle Glow */}
//           <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[60px] rounded-full pointer-events-none" />

//           {/* New Header replacing the Price */}
//           <div className="mb-8 pb-6 border-b border-gray-800/50">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
//               Applications Open
//             </div>
//             <h3 className="text-white text-2xl font-black tracking-tight mb-2">
//               Secure Your Spot
//             </h3>
//             <p className="text-gray-400 text-sm font-medium">
//               Submit your application form to begin the enrollment process. No upfront payment required.
//             </p>
//           </div>

//           <div className="flex flex-col gap-4 mb-8 relative z-10">
//             <div className="flex items-center gap-4 p-4 bg-[#0B0D14] border border-gray-800 rounded-2xl">
//               <Calendar className="w-5 h-5 text-gray-500" />
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Duration</p>
//                 <p className="text-white text-sm font-bold">{course.duration}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 bg-[#0B0D14] border border-gray-800 rounded-2xl">
//               <MapPin className="w-5 h-5 text-gray-500" />
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Location</p>
//                 <p className="text-white text-sm font-bold">{course.location}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 bg-[#0B0D14] border border-gray-800 rounded-2xl">
//               <Cpu className="w-5 h-5 text-cyan-500" />
//               <div>
//                 <p className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold mb-1">Hardware</p>
//                 <p className="text-white text-sm font-bold">{course.hardware}</p>
//               </div>
//             </div>
//           </div>

//           {/* THE BRIDGE: Direct Outbound Link to Google Forms */}
//           <a
//             href={GOOGLE_FORM_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full relative z-10 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-sm uppercase tracking-widest py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
//           >
//             Open Application Form
//             <ExternalLink className="w-4 h-4" />
//           </a>
          
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Cpu, ExternalLink } from "lucide-react";

export default function CourseDetailClient({ course }) {
  // Using your exact Google Form URL
  const GOOGLE_FORM_URL = "https://forms.gle/YgvowiTCnazwzvAk7";
  
  // Safety check for outcomes
  const outcomesArray = Array.isArray(course.outcomes) ? course.outcomes : [];

  return (
    <div className="relative">
      
      {/* =========================================
          SECTION 1: DARK HERO HEADER
          ========================================= */}
      <section className="bg-[#0B0D14] pt-16 pb-20 lg:pt-24 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 text-sm font-bold transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Catalog
          </Link>

          <div className="max-w-4xl">
            <div className="mb-6">
              <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase shadow-sm bg-cyan-500/10 text-cyan-400 border-cyan-500/20`}>
                {course.level}
              </span>
            </div>

            <h1 className="font-black text-4xl md:text-6xl text-white leading-tight tracking-tighter uppercase mb-6">
              {course.title}
            </h1>

            <p className="text-cyan-400 text-xl font-black uppercase tracking-tight">
              {course.tagline || "Advanced Robotics Training"}
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: LIGHT CONTENT BODY
          ========================================= */}
      <section className="relative py-12 lg:py-24 px-6 border-t border-gray-200">
        
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* LEFT COLUMN: Briefing & Objectives */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-16 h-1 bg-cyan-500 mb-8" />

            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Briefing</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
              {course.about || "Course briefing is currently being updated by the engineering team."}
            </p>

            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Key Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomesArray.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-5 shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:border-cyan-300 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-bold leading-tight">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The Action Card (Overlapping the Hero) */}
          <div className="lg:col-span-5 w-full bg-white border border-gray-200 rounded-[2.5rem] p-8 lg:-mt-48 lg:sticky lg:top-28 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden">
            
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Applications Open
              </div>
              <h3 className="text-slate-900 text-3xl font-black tracking-tighter mb-2">
                Secure Your Spot
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Submit your application form to begin the enrollment process. No upfront payment required.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-gray-100 rounded-2xl">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-0.5">Duration</p>
                  <p className="text-slate-900 text-sm font-bold">{course.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-gray-100 rounded-2xl">
                <MapPin className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-0.5">Location</p>
                  <p className="text-slate-900 text-sm font-bold">{course.location}</p>
                </div>
              </div>

              {/* Show hardware conditionally to keep it clean */}
              {course.hardware && (
                <div className="flex items-center gap-4 p-4 bg-cyan-50/50 border border-cyan-100 rounded-2xl">
                  <Cpu className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="text-[10px] text-cyan-500 uppercase tracking-widest font-black mb-0.5">Hardware</p>
                    <p className="text-slate-900 text-sm font-bold">{course.hardware}</p>
                  </div>
                </div>
              )}
            </div>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-cyan-500 text-white font-black text-sm uppercase tracking-widest py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >
              Open Application Form
              <ExternalLink className="w-4 h-4" />
            </a>
            
          </div>

        </div>
      </section>
    </div>
  );
}