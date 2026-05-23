"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Users, Briefcase, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { approveEnrollment, upgradeClearance } from "@/app/actions/admin"; 

export default function AdminClient({ initialData, students }) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isProcessing, setIsProcessing] = useState(false);

  // Filter Logic
  const filteredData = initialData.filter((item) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "PENDING_STUDENTS") return item.status === "PENDING";
    if (activeFilter === "LEADS") return item.hasOwnProperty('message'); 
    return false;
  });

  const handleApprove = async (id) => {
    setIsProcessing(true);
    await approveEnrollment(id);
    window.location.reload(); 
  };

  return (
    <main className="min-h-[100svh] bg-[#0B0D14] pt-8 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-10">
          <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-3">[ LEVEL 5 CLEARANCE ]</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            Command <span className="text-accent-blue">Overview.</span>
          </h1>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10 p-2 bg-[#131620]/50 border border-gray-800 rounded-2xl w-fit backdrop-blur-sm">
          <Filter className="w-4 h-4 text-gray-500 ml-3 mr-2" />
          {[
            { id: "ALL", label: "All Intelligence" },
            { id: "PENDING_STUDENTS", label: "Action Required" },
            { id: "ACTIVE_STUDENTS", label: "Active Students" }, // Updated ID to match logic
            { id: "LEADS", label: "Inbound Leads" }
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveFilter(tab.id)} className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 ${activeFilter === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"}`}>
              {activeFilter === tab.id && <motion.div layoutId="adminTab" className="absolute inset-0 bg-accent-blue/20 border border-accent-blue/50 rounded-xl" />}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            
            {/* If ACTIVE STUDENTS tab is selected, render the student management UI */}
            {activeFilter === "ACTIVE_STUDENTS" ? (
              students.map((student) => (
                <motion.div key={student.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#131620] border border-gray-800 rounded-3xl p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="font-bold text-white uppercase">
                      {student.firstName ? `${student.firstName} ${student.lastName || ''}` : "Classified Operator"}
                    </h3>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-800">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-blue">
                      Current Level: {student.clearanceLevel || 1}
                    </span>
                    
                    <form action={async () => {
                      await upgradeClearance(student.id, (student.clearanceLevel || 1) + 1); 
                    }}>
                      <button type="submit" className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors">
                        Promote to Level {(student.clearanceLevel || 1) + 1}
                      </button>
                    </form>
                  </div>
                </motion.div>
              ))
            ) : (
              /* Otherwise, render the standard Leads and Enrollments UI */
              filteredData.map((item) => (
                <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#131620] border border-gray-800 rounded-3xl p-6 flex flex-col group">
                  
                  {item.message ? (
                    // LEAD CARD
                    <>
                      <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase mb-6 w-fit">LEAD</div>
                      <h3 className="text-xl font-black text-white capitalize mb-1">{item.firstName} {item.lastName}</h3>
                      <p className="text-xs text-gray-500 font-mono mb-4">{item.email}</p>
                      <p className="text-sm text-gray-400 mb-6 flex-grow">{item.message}</p>
                    </>
                  ) : (
                    // ENROLLMENT CARD
                    <>
                      <div className={`px-3 py-1.5 rounded-full border text-[9px] font-black uppercase mb-6 w-fit ${item.status === 'APPROVED' ? 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue' : 'bg-amber-500/10 border-amber-500/20 text-amber-500'}`}>
                        {item.status}
                      </div>
                      <h3 className="text-xl font-black text-white capitalize mb-1">Enrollment Request</h3>
                      
                      {/* FIXED: Rendering the actual course title */}
                      <p className="text-xs text-gray-500 font-mono mb-4">Course: {item.courseTitle}</p> 
                      
                      <div className="bg-[#0B0D14] p-4 rounded-xl border border-gray-800 mb-6 text-xs text-gray-400 space-y-1">
                        {/* FIXED: Rendering the user's real database name */}
                        <p>Sender: <span className="text-white font-medium">{item.realUserName}</span></p>
                        <p>Txn ID: {item.transactionId}</p>
                        <a href={item.screenshotUrl} target="_blank" className="text-accent-blue underline">View Receipt</a>
                      </div>

                      {item.status === 'PENDING' && (
                         <button onClick={() => handleApprove(item.id)} disabled={isProcessing} className="py-2.5 bg-accent-blue text-white rounded-xl text-xs font-bold uppercase tracking-widest w-full hover:bg-blue-500 transition-colors">
                           {isProcessing ? "Processing..." : "Approve Enrollment"}
                         </button>
                      )}
                    </>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}