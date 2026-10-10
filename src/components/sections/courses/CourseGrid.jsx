"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Calendar, MapPin, Cpu, ArrowRight, SearchX, Filter } from "lucide-react"; 

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

const FILTER_TABS = [
  { label: "All Modules", value: "ALL" },
  { label: "Beginner", value: "BEGINNER" },
  { label: "Intermediate", value: "INTERMEDIATE" },
  { label: "Advanced", value: "ADVANCED" },
];

export default function CourseGrid({ courses }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLevel = searchParams.get("level")?.toUpperCase() || "ALL";

  const filteredCourses = currentLevel === "ALL"
    ? courses
    : courses.filter((course) => course.level?.toUpperCase() === currentLevel);

  const handleFilter = (value) => {
    if (value === "ALL") {
      router.push("/courses", { scroll: false });
    } else {
      router.push(`/courses?level=${value.toLowerCase()}`, { scroll: false });
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      
      {/* HORIZONTAL FILTER TABS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-slate-200 p-2 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 px-4 border-r border-slate-200 hidden md:flex">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Filter</span>
        </div>
        
        <div className="flex flex-wrap gap-2 flex-1">
          {FILTER_TABS.map((tab) => {
            const isActive = currentLevel === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => handleFilter(tab.value)}
                // FIX #2: Added min-h-[44px] and responsive text sizes to satisfy Google Mobile Usability
                className={`px-6 py-2 min-h-[44px] rounded-xl text-[11px] md:text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center ${
                  isActive 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* COURSE GRID */}
      {filteredCourses.length === 0 ? (
        // FIX #6: High-conversion empty state preventing dead ends
        <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white border border-slate-200 rounded-[2rem] shadow-sm w-full">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
            <SearchX className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-2xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-3">
            No Modules Found
          </h3>
          <p className="text-slate-500 font-medium max-w-md mx-auto mb-8">
            We are currently developing new curriculums for this track. Check out our foundational modules in the meantime.
          </p>
          <button 
            onClick={() => handleFilter("ALL")} 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-heading font-black tracking-widest text-xs uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          >
            View All Courses
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const levelColor = getLevelStyles(course.level);

            return (
              <div 
                key={course.id} 
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col transition-all duration-300 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="mb-4 flex items-center">
                  <span className={`text-[10px] md:text-[11px] font-black tracking-widest px-2.5 py-1 rounded-md border uppercase shadow-sm ${levelColor}`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-black text-slate-900 mb-2 tracking-tighter uppercase group-hover:text-blue-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-slate-500 text-xs mb-5 leading-relaxed flex-grow font-medium line-clamp-3">
                  {course.description}
                </p>

                <div className="flex flex-col gap-3 mb-6 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <div className="w-6 h-6 rounded-md bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-3 h-3 text-cyan-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Hardware Kit</span>
                      <span className="font-bold text-slate-900 leading-tight line-clamp-1">{course.hardware || "Standard Kit"}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <div className="w-6 h-6 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <Calendar className="w-3 h-3 text-slate-500" />
                    </div>
                    <span>Duration: <span className="font-bold text-slate-900">{course.duration || "6 Weeks"}</span></span>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <div className="w-6 h-6 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="truncate">{course.location || "Arbotrix HQ Labs"}</span>
                  </div>
                </div>

                <Link 
                  href={`/courses/${course.id}`}
                  className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-heading font-black tracking-widest text-[10px] uppercase hover:from-blue-700 hover:to-cyan-600 shadow-sm hover:shadow-md transition-all duration-300 group/btn mt-auto"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}