"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactLead } from "@/app/actions/contact"; 

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState(null); 

  async function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    setStatus(null);
    
    const formData = new FormData(e.target);
    const result = await submitContactLead(formData);
    
    if (result?.error) {
      setStatus({ type: "error", message: result.error });
    } else {
      setStatus({ type: "success", message: "Signal received. We will contact you shortly." });
      e.target.reset(); 
    }
    
    setIsPending(false); 
  }

  return (
    <section className="max-w-6xl w-full mx-auto pb-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 font-sans">
      
      {/* LEFT SIDE: Form */}
      <div className="flex flex-col justify-center">
        <p className="font-heading text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
          [ Initiate Uplink ]
        </p>
        
        {/* FIX: Added gradient to "Engineering" for cross-page symmetry. Reduced mb-8 to mb-6. */}
        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-slate-900 uppercase leading-tight mb-6">
          Talk to <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Engineering.
          </span>
        </h2>
        
        {/* FIX: Tightened gap-5 to gap-4 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {status && (
            <div className={`p-3 rounded-xl border flex items-center gap-3 text-sm font-bold ${
              status.type === "success" 
                ? "bg-green-50 border-green-200 text-green-700" 
                : "bg-red-50 border-red-200 text-red-700"
            }`}>
              {status.type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <p>{status.message}</p>
            </div>
          )}

          {/* FIX: Reduced input padding from py-3 to py-2.5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">First Name</label>
              <input type="text" name="firstName" required placeholder="Zaid" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Last Name</label>
              <input type="text" name="lastName" required placeholder="Akhtar" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</label>
            <input type="email" name="email" required placeholder="you@example.com" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm" />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Subject</label>
            <select name="type" required defaultValue="" className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer text-sm shadow-sm">
              <option value="" disabled className="text-slate-400">Select a topic</option>
              <option value="ENTERPRISE_PROJECT" className="text-slate-900">Hire Arbotrix (Enterprise/Custom IoT)</option>
              <option value="HARDWARE_SALES" className="text-slate-900">Hardware Inquiry (Drones, UGVs)</option>
              <option value="COURSE_TRAINING" className="text-slate-900">Academy Courses & Training</option>
              <option value="CAREERS" className="text-slate-900">Careers & Internships</option>
              <option value="GENERAL" className="text-slate-900">General Inquiry</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
            {/* FIX: Reduced from rows="3" to rows="2" */}
            <textarea name="message" required rows="2" placeholder="Tell us about your project..." className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm shadow-sm"></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isPending}
            className="mt-1 w-full group relative flex items-center justify-center gap-3 px-8 py-3 font-heading font-black text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden uppercase tracking-widest text-xs"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Transmit Signal
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE: Light Theme Stats Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // FIX: Reduced padding from p-8 lg:p-10 to p-6 lg:p-8
        className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.06)] h-fit w-full my-auto"
      >
        <p className="font-heading text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
          [ METRICS ]
        </p>
        <h3 className="text-3xl lg:text-4xl font-heading font-black tracking-tighter text-slate-900 uppercase leading-tight mb-2">
          Why they <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">trust us.</span>
        </h3>
        {/* FIX: Reduced mb-10 to mb-6 */}
        <p className="text-slate-500 font-medium text-xs mb-6">
          Numbers backed by real client deployments.
        </p>

        {/* FIX: Tightened flex gap from gap-5 to gap-4 */}
        <div className="flex flex-col gap-4 flex-grow">
          {[
            { label: "Client Satisfaction", value: "97%" },
            { label: "Projects Delivered On Time", value: "92%" },
            { label: "Students Would Recommend", value: "95%" },
            { label: "Repeat Clients", value: "84%" },
            { label: "Hardware Uptime Rate", value: "99%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                <span>{stat.label}</span>
                <span className="text-blue-600 font-black">{stat.value}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.value }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* FIX: Reduced margin from my-8 to my-6 */}
        <div className="w-full h-px bg-slate-100 my-6" />
        
        <div className="flex justify-between items-center px-4">
           <div className="flex flex-col items-center">
             <span className="text-2xl font-heading font-black text-slate-900">50+</span>
             <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Projects</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-heading font-black text-slate-900">5★</span>
             <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Rating</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-heading font-black text-slate-900">2yr</span>
             <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Support</span>
           </div>
        </div>
      </motion.div>

    </section>
  );
}