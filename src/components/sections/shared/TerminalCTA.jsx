"use client";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function TerminalCTA({ 
  title, 
  description, 
  buttonText = "Contact Engineering", 
  buttonLink = "/contact" 
}) {
  return (
    <section className="py-24 px-6 bg-white font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
          
          {/* Ambient Tech Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
              <Terminal className="w-3 h-3 text-blue-400" />
              Initiate Deployment
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase mb-4">
              {title}
            </h2>
            
            <p className="text-slate-400 font-medium leading-relaxed text-lg">
              {description}
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link 
              href={buttonLink}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-black tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 w-full sm:w-auto"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}