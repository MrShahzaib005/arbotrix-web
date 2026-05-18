"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    slug: "ros2-fundamentals",
    title: "ROS2 & Linux Fundamentals",
    level: "Beginner",
    levelColor: "bg-green-500",
    levelText: "text-green-400",
    levelBorder: "border-green-500/30 bg-green-500/10",
    duration: "4 Weeks",
    price: "$199",
    desc: "The essential operating system foundation for modern robotics. Nodes, topics, services, and actions using ROS2 Humble.",
    hardware: "Raspberry Pi 5 Provided",
    date: "Oct 15 – Nov 20, 2026",
  },
  {
    slug: "autonomous-navigation",
    title: "Autonomous Floor Navigation",
    level: "Intermediate",
    levelColor: "bg-yellow-500",
    levelText: "text-yellow-400",
    levelBorder: "border-yellow-500/30 bg-yellow-500/10",
    duration: "6 Weeks",
    price: "$299",
    desc: "Build a complete SLAM pipeline from scratch using Nav2 and LIDAR.",
    hardware: "Dodo-X Chassis Provided",
    date: "Dec 01 – Jan 15, 2027",
  },
  {
    slug: "spatial-ai-vision",
    title: "Spatial AI & Computer Vision",
    level: "Advanced",
    levelColor: "bg-red-500",
    levelText: "text-red-400",
    levelBorder: "border-red-500/30 bg-red-500/10",
    duration: "8 Weeks",
    price: "$499",
    desc: "Object detection, depth mapping, and edge AI using OAK-D cameras.",
    hardware: "OAK-D Pro Provided",
    date: "Feb 10 – Mar 30, 2027",
  },
  {
    slug: "robotic-arm-manipulation",
    title: "Robotic Arm Manipulation",
    level: "Intermediate",
    levelColor: "bg-yellow-500",
    levelText: "text-yellow-400",
    levelBorder: "border-yellow-500/30 bg-yellow-500/10",
    duration: "6 Weeks",
    price: "$349",
    desc: "Learn inverse kinematics and motion planning for robotic arms.",
    hardware: "6-DOF Arm Provided",
    date: "Apr 05 – May 15, 2027",
  },
];

export default function CourseCards() {
  return (
    <section className="py-12">
      <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-4">
        [ Available Cohorts ]
      </p>
      <h2 className="text-3xl font-black text-white mb-10">
        Pick Your <span className="text-accent-blue">Track.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/courses/${course.slug}`} className="group block h-full">
              <div className="relative bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent-blue/50 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-300">

                {/* Image placeholder area */}
                <div className="relative h-44 bg-gradient-to-br from-[#111827] to-[#0d1117] overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(#00A3FF 1px, transparent 1px), linear-gradient(90deg, #00A3FF 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent-blue/20 rounded-full blur-2xl"
                  />
                  {/* Level badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${course.levelBorder} ${course.levelText}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${course.levelColor} animate-pulse`} />
                    {course.level}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="font-black text-lg leading-snug text-white group-hover:text-accent-blue transition-colors duration-300">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    {course.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-col gap-1.5 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <svg className="w-3.5 h-3.5 text-gray-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {course.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <svg className="w-3.5 h-3.5 text-gray-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      Arbotrix HQ Labs
                    </div>
                    <div className="flex items-center gap-2 text-accent-blue text-xs font-bold">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/>
                      </svg>
                      {course.hardware}
                    </div>
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-blue font-black block">
                        Early Bird
                      </span>
                      <span className="font-black text-white text-lg">{course.price}</span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-accent-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}