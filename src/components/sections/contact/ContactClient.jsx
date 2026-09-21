"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactLead } from "@/app/actions/contact";

const METRICS = [
  { label: "Client Satisfaction", value: 97 },
  { label: "Projects Delivered", value: 92 },
  { label: "Student Referrals", value: 95 },
  { label: "Repeat Clients", value: 84 },
  { label: "Hardware Uptime", value: 99 },
];

function AnimatedBar({ metric, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
        <span>{metric.label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-blue-600 font-heading"
        >
          {metric.value}%
        </motion.span>
      </div>

      {/* FIX: Thinned the track to h-1 for a sharper, cleaner aesthetic */}
      <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${metric.value}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay: index * 0.15, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative"
        />
      </div>
    </div>
  );
}

export default function ContactClient() {
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
      setStatus({
        type: "success",
        message: "Signal received. Engineering will contact you shortly.",
      });
      e.target.reset();
    }

    setIsPending(false);
  }

  return (
    <section className="max-w-6xl w-full mx-auto pt-28 pb-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 font-sans">
      
      {/* =========================================
          LEFT SIDE: CONTEXT & METRICS
          ========================================= */}
      <div className="flex flex-col pr-0 lg:pr-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Secure Terminal
          </p>
          
          {/* FIX: Scaled down the massive typography to a professional 4xl */}
          <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase leading-[0.95] mb-6">
            Talk to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Engineering.</span>
          </h1>
          
          <p className="text-slate-600 font-medium leading-relaxed max-w-md">
            Whether you are looking to deploy custom autonomous hardware, require embedded systems integration, or want to enroll in the Academy, our engineers are ready to assist.
          </p>
        </motion.div>

        {/* Telemetry Stats shifted to the left to support the form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-slate-200"
        >
          <h3 className="font-heading text-xl font-black text-slate-900 uppercase mb-8">
            Why industry trusts us.
          </h3>
          <div className="flex flex-col gap-5">
            {METRICS.map((metric, i) => (
              <AnimatedBar key={metric.label} metric={metric} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* =========================================
          RIGHT SIDE: CONTAINED FORM CARD
          ========================================= */}
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          // FIX: Isolated the form inside a crisp, contained white card
          className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
            {status && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 text-sm font-bold ${
                  status.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <p className="mt-0.5">{status.message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="John"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="transmission@domain.com"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Inquiry Type
              </label>
              <select
                name="type"
                required
                defaultValue=""
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer text-sm"
              >
                <option value="" disabled className="text-slate-400">
                  Select routing destination...
                </option>
                <option value="ENTERPRISE_PROJECT">Hire Arbotrix (Enterprise/Custom AI)</option>
                <option value="HARDWARE_SALES">Hardware Inquiry (UGVs, Sensors)</option>
                <option value="COURSE_TRAINING">Academy Courses & Training</option>
                <option value="CAREERS">Careers & Lab Internships</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Project Specifications
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Detail your requirements or operational parameters..."
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="mt-2 w-full group relative flex items-center justify-center gap-3 px-8 py-3.5 font-heading font-black text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Transmit Data
                  <Send className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

    </section>
  );
}