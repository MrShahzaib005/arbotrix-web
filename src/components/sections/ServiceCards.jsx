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
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            // THE FIX: Changed to Elevated Slate (#131620) and refined borders/shadows
            className="group bg-[#131620] border border-gray-800 rounded-3xl p-8 lg:p-10 flex flex-col gap-5 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
          >
            {/* Number + dot */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-5xl font-black text-white/5 group-hover:text-accent-blue/20 transition-colors duration-300">
                {service.number}
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(0,163,255,0.5)]"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black text-white leading-tight group-hover:text-accent-blue transition-colors duration-300">
              {service.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              {service.desc}
            </p>

            {/* Expanding divider - Now transitions from gray to blue */}
            <div className="w-8 h-0.5 bg-gray-800 rounded-full group-hover:w-full group-hover:bg-accent-blue transition-all duration-500" />

            {/* Points */}
            <ul className="flex flex-col gap-3 mt-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/50 group-hover:bg-accent-blue shrink-0 transition-colors" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}