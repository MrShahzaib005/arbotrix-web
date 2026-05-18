"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    // FIX: Reduced gap from gap-16 to gap-10 lg:gap-12
    <section className="max-w-7xl w-full mx-auto pt-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 relative z-10">
      
      {/* LEFT SIDE: Form */}
      <div className="flex flex-col justify-center">
        <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
          [ SEND A MESSAGE ]
        </p>
        {/* FIX: Scaled down massive heading slightly */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-tight mb-8">
          Talk to us.
        </h1>
        
        {/* FIX: Compressed gaps across the form */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">First Name</label>
              <input type="text" placeholder="Zaid" className="bg-[#131620] border border-gray-800 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors text-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Last Name</label>
              <input type="text" placeholder="Akhtar" className="bg-[#131620] border border-gray-800 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors text-sm" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email</label>
            <input type="email" placeholder="you@example.com" className="bg-[#131620] border border-gray-800 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors text-sm" />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Subject</label>
            <select className="bg-[#131620] border border-gray-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none cursor-pointer text-sm">
              <option className="bg-[#131620] text-gray-400">Select a topic</option>
              <option className="bg-[#131620] text-white">Custom Hardware</option>
              <option className="bg-[#131620] text-white">Academy Courses</option>
              <option className="bg-[#131620] text-white">Careers</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
            {/* FIX: Reduced textarea from 5 rows to 3 rows to save height */}
            <textarea rows="3" placeholder="Tell us about your project..." className="bg-[#131620] border border-gray-800 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors resize-none text-sm"></textarea>
          </div>
          
          <button type="button" className="mt-2 w-full group relative flex items-center justify-center gap-3 px-8 py-3.5 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] overflow-hidden uppercase tracking-widest text-sm">
            Send Message
            <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>

      {/* RIGHT SIDE: Stats Card */}
      {/* FIX: Used my-auto to perfectly vertically center the card, reduced padding */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#131620] border border-gray-800 rounded-3xl p-6 lg:p-8 flex flex-col shadow-2xl h-fit w-full my-auto"
      >
        <p className="font-mono text-accent-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
          [ CLIENT FEEDBACK ]
        </p>
        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white uppercase leading-tight mb-2">
          Why they <br className="hidden sm:block"/> <span className="text-accent-blue">trust us.</span>
        </h2>
        <p className="text-gray-400 text-xs mb-8">
          Numbers backed by real client and student feedback.
        </p>

        {/* FIX: Tighter gap for the stats lines */}
        <div className="flex flex-col gap-4 flex-grow">
          {[
            { label: "Client Satisfaction", value: "97%" },
            { label: "Projects Delivered On Time", value: "92%" },
            { label: "Students Would Recommend", value: "95%" },
            { label: "Repeat Clients", value: "84%" },
            { label: "Hardware Uptime Rate", value: "99%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                <span>{stat.label}</span>
                <span className="text-accent-blue">{stat.value}</span>
              </div>
              {/* FIX: Thinner progress bar (h-1 instead of h-1.5) */}
              <div className="w-full h-1 bg-[#0B0D14] rounded-full overflow-hidden border border-gray-800/50">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.value }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent-blue/40 to-accent-blue rounded-full shadow-[0_0_10px_rgba(0,163,255,0.5)] relative" 
                >
                  <div className="absolute top-0 right-0 w-4 h-full bg-white/40 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-800 my-6" />
        
        <div className="flex justify-between items-center px-2">
           <div className="flex flex-col items-center">
             <span className="text-xl font-black text-white">50+</span>
             <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mt-1">Projects</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-xl font-black text-white">5★</span>
             <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mt-1">Rating</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-xl font-black text-white">2yr</span>
             <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mt-1">Support</span>
           </div>
        </div>
      </motion.div>

    </section>
  );
}