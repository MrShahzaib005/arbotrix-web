// "use client";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { CheckSquare, Square, Filter } from "lucide-react";

// const filterData = {
//   levels: [
//     { id: "BEGINNER", label: "Beginner", count: 1 },
//     { id: "INTERMEDIATE", label: "Intermediate", count: 2 },
//     { id: "ADVANCED", label: "Advanced", count: 1 },
//   ]
// };

// export default function CourseSidebar() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // Read the current level from the URL
//   const currentLevel = searchParams.get("level");

//   const handleFilterClick = (levelId) => {
//     const params = new URLSearchParams(searchParams);
    
//     // Toggle logic: If they click the active one, remove the filter. Else, set it.
//     if (currentLevel === levelId) {
//       params.delete("level");
//     } else {
//       params.set("level", levelId);
//     }
    
//     // Push the new URL without scrolling to the top of the page
//     router.push(`${pathname}?${params.toString()}`, { scroll: false });
//   };

//   return (
//     <div className="bg-[#131620] border border-gray-800 rounded-3xl p-6 lg:p-8 sticky top-24">
      
//       {/* Sidebar Header */}
//       <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-800/50">
//         <Filter className="w-5 h-5 text-accent-blue" />
//         <h3 className="text-white font-black uppercase tracking-widest text-sm">
//           Filters
//         </h3>
//       </div>

//       {/* Levels Filter Group */}
//       <div className="flex flex-col gap-5">
//         <div className="flex items-center gap-2 mb-2">
//           <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(0,163,255,0.8)]" />
//           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
//             Levels
//           </h4>
//         </div>

//         {filterData.levels.map((level) => {
//           const isActive = currentLevel === level.id;
          
//           return (
//             <button
//               key={level.id}
//               onClick={() => handleFilterClick(level.id)}
//               className="flex items-center justify-between w-full group transition-colors"
//             >
//               <div className="flex items-center gap-3">
//                 {isActive ? (
//                   <CheckSquare className="w-5 h-5 text-accent-blue" />
//                 ) : (
//                   <Square className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
//                 )}
//                 <span className={`text-sm font-medium transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
//                   {level.label}
//                 </span>
//               </div>
              
//               {/* Count Badge */}
//               <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${isActive ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue" : "bg-[#0B0D14] border-gray-800 text-gray-500"}`}>
//                 {level.count}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Clear Filters Button (Only shows if a filter is active) */}
//       {currentLevel && (
//         <button 
//           onClick={() => router.push(pathname, { scroll: false })}
//           className="mt-8 w-full py-3 rounded-xl border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest hover:bg-red-500/10 transition-colors"
//         >
//           Clear Filters
//         </button>
//       )}

//     </div>
//   );
// }

"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { CheckSquare, Square, Filter } from "lucide-react";

// We now accept the `courses` array as a prop directly from the database fetch
export default function CourseSidebar({ courses = [] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read the current level from the URL
  const currentLevel = searchParams.get("level");

  // DYNAMIC COUNT LOGIC: Calculate totals from the live database prop safely
  const dynamicLevels = [
    { 
      id: "BEGINNER", 
      label: "Beginner", 
      count: courses.filter(c => c.level?.toUpperCase() === "BEGINNER").length 
    },
    { 
      id: "INTERMEDIATE", 
      label: "Intermediate", 
      count: courses.filter(c => c.level?.toUpperCase() === "INTERMEDIATE").length 
    },
    { 
      id: "ADVANCED", 
      label: "Advanced", 
      count: courses.filter(c => c.level?.toUpperCase() === "ADVANCED").length 
    },
  ];

  const handleFilterClick = (levelId) => {
    const params = new URLSearchParams(searchParams);
    
    // Toggle logic: If they click the active one, remove the filter. Else, set it.
    if (currentLevel === levelId) {
      params.delete("level");
    } else {
      params.set("level", levelId);
    }
    
    // Push the new URL without scrolling to the top of the page
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 sticky top-24 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
      
      {/* Sidebar Header */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
        <Filter className="w-5 h-5 text-cyan-600" />
        <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">
          Filters
        </h3>
      </div>

      {/* Levels Filter Group */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Levels
          </h4>
        </div>

        {/* Map over the newly calculated dynamicLevels instead of the hardcoded one */}
        {dynamicLevels.map((level) => {
          const isActive = currentLevel === level.id;
          
          return (
            <button
              key={level.id}
              onClick={() => handleFilterClick(level.id)}
              className="flex items-center justify-between w-full group transition-colors"
            >
              <div className="flex items-center gap-3">
                {isActive ? (
                  <CheckSquare className="w-5 h-5 text-cyan-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                )}
                <span className={`text-sm font-medium transition-colors ${isActive ? "text-slate-900 font-bold" : "text-slate-500 group-hover:text-slate-900"}`}>
                  {level.label}
                </span>
              </div>
              
              {/* Dynamic Count Badge */}
              <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${isActive ? "bg-cyan-50 border-cyan-200 text-cyan-700" : "bg-slate-50 border-slate-200 text-slate-400"}`}>
                {level.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clear Filters Button */}
      {currentLevel && (
        <button 
          onClick={() => router.push(pathname, { scroll: false })}
          className="mt-8 w-full py-3 rounded-xl border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest hover:bg-red-50 hover:border-red-300 transition-colors"
        >
          Clear Filters
        </button>
      )}

    </div>
  );
}