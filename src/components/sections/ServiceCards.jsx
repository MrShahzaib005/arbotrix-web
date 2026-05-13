"use client";
import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Custom Robot Development",
    desc: "End-to-end hardware and software engineering. We design, prototype, and manufacture custom kinetic platforms.",
    points: ["ROS2 Architecture", "Custom PCB Design", "Kinematic Modeling", "Firmware Development"],
  },
  {
    number: "02",
    title: "Robotics Consulting",
    desc: "Technical audits and strategic roadmaps for businesses looking to integrate automation into their existing workflows.",
    points: ["Feasibility Studies", "Hardware Sourcing", "ROI Analysis", "System Architecture"],
  },
  {
    number: "03",
    title: "Project-Based Solutions",
    desc: "Drop-in engineering pods. We integrate specific AI, vision, or autonomous modules into your current hardware.",
    points: ["Computer Vision Models", "SLAM Navigation", "Sensor Fusion", "Edge AI Deployment"],
  },
];

export default function ServiceCards() {
  return (
    <div className="flex flex-col gap-20">

      {/* ── Hero with Robot Background ── */}
      <div className="relative w-full rounded-3xl overflow-hidden h-[460px] flex items-center -mx-0">

        {/* Robot image */}
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop"
          alt="Robot background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/78" />

        {/* Animated blue orb bottom left */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-blue/25 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Animated blue orb top right */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-accent-blue/15 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 w-full text-center px-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent-blue/40 bg-accent-blue/10 rounded-full px-4 py-1.5 mb-6"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent-blue"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-blue font-bold">
              What We Do
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl font-black text-white leading-[1.0] mb-5"
          >
            We Solve <br />
            <span className="text-accent-blue">Robotics Problems.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Precision engineering for industrial and commercial automation.
            No fluff. Just hardware that works and software that scales.
          </motion.p>

          {/* Animated line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-accent-blue rounded-full mx-auto mt-8"
          />

        </div>
      </div>

      {/* ── Service Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="group bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-5 hover:border-accent-blue hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300 cursor-pointer"
          >
            {/* Number + dot */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-5xl font-black text-gray-100 group-hover:text-accent-blue/20 transition-colors duration-300">
                {service.number}
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="w-3 h-3 rounded-full bg-accent-blue"
              />
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl font-black text-black leading-tight group-hover:text-accent-blue transition-colors duration-300">
              {service.title}
            </h3>

            {/* Desc */}
            <p className="font-body text-gray-500 text-sm leading-relaxed flex-grow">
              {service.desc}
            </p>

            {/* Expanding divider */}
            <div className="w-8 h-0.5 bg-accent-blue rounded-full group-hover:w-full transition-all duration-500" />

            {/* Points */}
            <ul className="flex flex-col gap-2.5">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-body text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </div>
  );
}