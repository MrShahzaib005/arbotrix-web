// "use client";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { Calendar, MapPin, Cpu, Wallet, ArrowRight, SearchX, Lock } from "lucide-react"; 

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

// // 1. Map the text levels to integer requirements
// const LEVEL_REQUIREMENTS = {
//   "BEGINNER": 1,
//   "INTERMEDIATE": 2,
//   "ADVANCED": 3
// };

// // 2. Accept the new `userClearance` prop (default to 1 if not logged in)
// export default function CourseGrid({ courses, userClearance = 1 }) {
//   const searchParams = useSearchParams();
//   const currentLevel = searchParams.get("level");

//   const filteredCourses = currentLevel
//     ? courses.filter((course) => course.level === currentLevel)
//     : courses;

//   return (
//     <div className="w-full">
//       {filteredCourses.length === 0 ? (
//         <div className="w-full bg-[#131620] border border-gray-800 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
//            <SearchX className="w-12 h-12 text-gray-600 mb-4" />
//            <h3 className="text-xl font-bold text-white mb-2">No Courses Found</h3>
//            <p className="text-gray-400">There are currently no active modules for this clearance level.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//           {filteredCourses.map((course) => {
            
//             // 3. THE LOGIC GATE: Compare the course requirement against the user's clearance
//             const requiredLevel = LEVEL_REQUIREMENTS[course.level?.toUpperCase()] || 1;
//             const isLocked = userClearance < requiredLevel;
            
//             const levelColor = getLevelStyles(course.level);

//             return (
//               <div 
//                 key={course.id} 
//                 className={`bg-[#131620] border rounded-3xl p-8 flex flex-col transition-all duration-300 shadow-lg relative overflow-hidden group ${
//                   isLocked ? "border-gray-800 opacity-60" : "border-gray-800 hover:border-gray-600"
//                 }`}
//               >
//                 {!isLocked && (
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-accent-blue/10 transition-colors duration-500" />
//                 )}

//                 <div className="mb-6 self-start flex items-center gap-3">
//                   <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase ${levelColor}`}>
//                     {course.level}
//                   </span>
//                   {isLocked && <Lock className="w-4 h-4 text-red-500/70" />}
//                 </div>

//                 <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
//                   {course.title}
//                 </h3>
                
//                 <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
//                   {course.description}
//                 </p>

//                 <div className="flex flex-col gap-3 mb-8">
//                   <div className="flex items-center gap-3 text-sm text-gray-300">
//                     <Calendar className="w-4 h-4 text-gray-500" />
//                     <span>Duration: <span className="font-bold text-white">{course.duration || "6 Weeks"}</span></span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-300">
//                     <MapPin className="w-4 h-4 text-gray-500" />
//                     <span>{course.location || "Arbotrix HQ Labs, H-13"}</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-300">
//                     <Cpu className="w-4 h-4 text-accent-blue" />
//                     <span className="text-accent-blue font-medium">{course.hardware || "Standard Kit"}</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-300 mt-2 p-3 bg-[#0B0D14] border border-gray-800 rounded-xl">
//                     <Wallet className="w-4 h-4 text-emerald-400" />
//                     <span className="font-bold text-white">Registration Fee: {course.price} PKR <span className="text-xs text-gray-500 font-normal ml-1">(Non-refundable)</span></span>
//                   </div>
//                 </div>

//                 {!isLocked ? (
//                   <Link 
//                     href={`/courses/${course.id}`}
//                     className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-[#0B0D14] border border-gray-700 text-white font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-all duration-300 group/btn"
//                   >
//                     <span>View Details & Enroll</span>
//                     <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
//                   </Link>
//                 ) : (
//                   <button 
//                     disabled 
//                     className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0B0D14] border border-gray-800/50 text-gray-600 font-bold tracking-widest text-xs uppercase cursor-not-allowed"
//                   >
//                     <Lock className="w-4 h-4" />
//                     <span>Requires Level {requiredLevel} Clearance</span>
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Calendar, MapPin, Cpu, ArrowRight, SearchX } from "lucide-react"; 

const getLevelStyles = (level) => {
  switch (level?.toUpperCase()) {
    case "BEGINNER":
      return "text-emerald-700 bg-emerald-50 border-emerald-200";
    case "INTERMEDIATE":
      return "text-amber-700 bg-amber-50 border-amber-200";
    case "ADVANCED":
      return "text-rose-700 bg-rose-50 border-rose-200";
    default:
      return "text-slate-600 bg-slate-100 border-slate-200";
  }
};

export default function CourseGrid({ courses }) {
  const searchParams = useSearchParams();
  const currentLevel = searchParams.get("level");

  const filteredCourses = currentLevel
    ? courses.filter((course) => course.level === currentLevel)
    : courses;

  return (
    <div className="w-full">
      {filteredCourses.length === 0 ? (
        <div className="w-full bg-white border border-gray-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
           <SearchX className="w-12 h-12 text-slate-400 mb-4" />
           <h3 className="text-xl font-bold text-slate-900 mb-2">No Courses Found</h3>
           <p className="text-slate-500 font-medium">There are currently no active modules for this clearance level.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCourses.map((course) => {
            const levelColor = getLevelStyles(course.level);

            return (
              <div 
                key={course.id} 
                className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:border-blue-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="mb-6 self-start flex items-center gap-3">
                  <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase shadow-sm ${levelColor}`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-grow font-medium">
                  {course.description}
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-slate-500" />
                    </div>
                    <span>Duration: <span className="font-bold text-slate-900">{course.duration || "6 Weeks"}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-slate-500" />
                    </div>
                    <span>{course.location || "Arbotrix HQ Labs, H-13"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-cyan-700 font-bold">{course.hardware || "Standard Kit"}</span>
                  </div>
                </div>

                {/* Direct Link without locks */}
                <Link 
                  href={`/courses/${course.id}`}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-slate-900 text-white font-bold tracking-widest text-xs uppercase hover:bg-cyan-500 hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition-all duration-300 group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}