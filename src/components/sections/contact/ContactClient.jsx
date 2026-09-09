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
          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
          className="text-blue-600 font-heading"
        >
          {metric.value}%
        </motion.span>
      </div>

      {/* Light theme track */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${metric.value}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay: index * 0.15, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative"
        >
          {/* Glowing Tip */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 rounded-full bg-white blur-[2px]"
          />
        </motion.div>
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
    <section className="max-w-[1400px] w-full mx-auto pt-32 lg:pt-40 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
      {/* =========================================
          LEFT SIDE: FORM (Light Theme)
          ========================================= */}
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            [ SECURE TERMINAL ]
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] mb-8">
            Talk to <br />
            <span className="text-blue-600">Engineering.</span>
          </h1>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {status && (
            <div
              className={`p-4 rounded-xl border flex items-center gap-3 text-sm font-bold ${
                status.type === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                  : "bg-red-50 border-red-200 text-red-600"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <p>{status.message}</p>
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
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm"
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
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm"
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
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm"
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
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer text-sm shadow-sm"
            >
              <option value="" disabled className="text-slate-400">
                Select routing destination...
              </option>
              <option value="ENTERPRISE_PROJECT">
                Hire Arbotrix (Enterprise/Custom AI)
              </option>
              <option value="HARDWARE_SALES">
                Hardware Inquiry (UGVs, Sensors)
              </option>
              <option value="COURSE_TRAINING">
                Academy Courses & Training
              </option>
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
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 w-full group relative flex items-center justify-center gap-3 px-8 py-4 font-black text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-[0_8px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden uppercase tracking-widest text-sm"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Transmit Data
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.form>
      </div>
      {/* =========================================
          RIGHT SIDE: STATS CARD (Grid Theme)
          ========================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white border border-gray-200 rounded-[2rem] p-8 lg:p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit w-full my-auto relative overflow-hidden"
      >
        {/* Subtle accent gradient line at the top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 z-20" />

        {/* RULE: Container Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none z-0" />
        {/* Fade grid out at the bottom to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col flex-grow">
          <p className="font-mono text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
            [ TELEMETRY ]
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-black tracking-tighter text-slate-900 uppercase leading-tight mb-2">
            Why they <br className="hidden sm:block" />{" "}
            <span className="text-blue-600">trust us.</span>
          </h2>
          <p className="text-slate-600 text-sm mb-10 font-medium">
            Numbers backed by real enterprise deployments and student feedback.
          </p>

          <div className="flex flex-col gap-6 flex-grow mb-10">
            {METRICS.map((metric, i) => (
              <AnimatedBar key={metric.label} metric={metric} index={i} />
            ))}
          </div>

          <div className="w-full h-px bg-gray-200 mb-8" />

          {/* Bottom decorative stat row */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "50+", label: "Deployments" },
              { value: "5★", label: "Rating" },
              { value: "2yr", label: "Track Record" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
              >
                <div className="font-heading text-2xl font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-blue-600 font-bold mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
