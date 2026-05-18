"use client";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

const FILTERS = {
  levels: [
    { id: "basic", label: "Basic", count: 2 },
    { id: "intermediate", label: "Intermediate", count: 4 },
    { id: "advanced", label: "Advanced", count: 3 },
    { id: "special", label: "Special", count: 1 },
  ],
  status: [
    { id: "ongoing", label: "Ongoing", count: 2 },
    { id: "upcoming", label: "Upcoming", count: 8 },
  ]
};

const TechnicalCheckbox = ({ label, count, checked, onChange }) => (
  <label className="flex items-center justify-between group cursor-pointer py-2.5">
    <div className="flex items-center gap-3">
      <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all duration-300 ${
        checked 
          ? 'bg-accent-blue border-accent-blue shadow-[0_0_10px_rgba(0,163,255,0.4)]' 
          : 'bg-[#0B0D14] border-gray-600 group-hover:border-accent-blue/50'
      }`}>
         {checked && <div className="w-1.5 h-1.5 bg-[#0B0D14] rounded-[2px]" />}
      </div>
      {/* FIX: Brightened default text from gray-400 to gray-300 so it doesn't look dull */}
      <span className={`text-sm transition-colors duration-300 ${checked ? 'text-white font-bold tracking-wide' : 'text-gray-300 group-hover:text-white'}`}>
        {label}
      </span>
    </div>
    {/* FIX: Gave the badge a slightly lighter border to stand out */}
    <span className="font-mono text-[10px] text-gray-400 bg-[#0B0D14] px-2 py-1 rounded-md border border-gray-700 group-hover:border-gray-500 transition-colors">
      {count}
    </span>
  </label>
);

export default function CourseSidebar() {
  const [activeFilters, setActiveFilters] = useState(["intermediate", "upcoming"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleFilter = (id) => {
    setActiveFilters(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col gap-8 relative z-10">
      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent-blue font-black mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(0,163,255,0.5)]" />
          Levels
        </h4>
        <div className="flex flex-col">
          {FILTERS.levels.map((filter) => (
            <TechnicalCheckbox 
              key={filter.id} 
              label={filter.label} 
              count={filter.count}
              checked={activeFilters.includes(filter.id)}
              onChange={() => toggleFilter(filter.id)}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gray-700/50" />

      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent-blue font-black mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(0,163,255,0.5)]" />
          Course Type
        </h4>
        <div className="flex flex-col">
          {FILTERS.status.map((filter) => (
            <TechnicalCheckbox 
              key={filter.id} 
              label={filter.label} 
              count={filter.count}
              checked={activeFilters.includes(filter.id)}
              onChange={() => toggleFilter(filter.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button 
        onClick={() => setMobileOpen(true)}
        className="lg:hidden w-full flex items-center justify-center gap-2 bg-[#1A1E2C] border border-gray-700 text-white py-4 rounded-2xl mb-6 font-bold hover:border-accent-blue transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filter Courses
      </button>

      {/* FIX: Upgraded Sidebar UI - Added a subtle gradient, lighter border, and a glowing top accent line */}
      <aside className="hidden lg:block w-full bg-gradient-to-b from-[#1A1E2C] to-[#131620] border border-gray-700/50 rounded-3xl p-8 sticky top-32 shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-fit overflow-hidden">
        {/* Top Glowing Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue/0 via-accent-blue to-accent-blue/0 opacity-70" />
        <SidebarContent />
      </aside>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative bg-[#1A1E2C] border-t border-gray-700 rounded-t-3xl p-6 pb-12 animate-in slide-in-from-bottom max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-black uppercase tracking-widest text-sm">Filters</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 bg-[#0B0D14] rounded-full border border-gray-700 text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <SidebarContent />
            <button 
              onClick={() => setMobileOpen(false)}
              className="w-full mt-8 bg-accent-blue text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,163,255,0.3)]"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}