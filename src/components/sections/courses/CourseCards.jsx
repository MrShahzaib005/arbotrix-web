"use client";
import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";

const courses = [
  {
    title: "ROS2 Fundamentals",
    level: "Beginner",
    levelColor: "bg-green-500",
    duration: "4 Weeks",
    price: "$199",
    desc: "Master the architecture of modern robotics. Nodes, topics, services, and actions using ROS2 Humble.",
  },
  {
    title: "Spatial AI & Vision",
    level: "Intermediate",
    levelColor: "bg-yellow-500",
    duration: "6 Weeks",
    price: "$299",
    desc: "Implement true depth perception. Object detection, SLAM, and sensor fusion using OAK-D.",
  },
  {
    title: "Autonomous Navigation",
    level: "Advanced",
    levelColor: "bg-red-500",
    duration: "8 Weeks",
    price: "$499",
    desc: "Build a complete Nav2 stack. Path planning, costmaps, and dynamic obstacle avoidance.",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="group bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-accent-blue hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Level badge */}
              <div className="flex items-center gap-2 mb-6 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${course.levelColor}`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${course.levelColor}`} />
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {course.level}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                {course.title}
              </h3>

              {/* Expanding divider */}
              <div className="w-8 h-0.5 bg-accent-blue rounded-full group-hover:w-full transition-all duration-500 mb-4" />

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">{course.desc}</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 text-sm font-semibold text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-blue" /> {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-accent-blue" /> {course.price}
                </div>
              </div>
              <button className="w-full bg-accent-blue hover:bg-blue-400 text-white font-black text-sm uppercase tracking-widest py-3.5 rounded-full transition-colors duration-200">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}