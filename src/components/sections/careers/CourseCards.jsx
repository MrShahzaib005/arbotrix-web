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
    desc: "Master the architecture of modern robotics. Nodes, topics, services, and actions using ROS2 Humble."
  },
  {
    title: "Spatial AI & Vision",
    level: "Intermediate",
    levelColor: "bg-yellow-500",
    duration: "6 Weeks",
    price: "$299",
    desc: "Implement true depth perception. Object detection, SLAM, and sensor fusion using OAK-D."
  },
  {
    title: "Autonomous Navigation",
    level: "Advanced",
    levelColor: "bg-red-500",
    duration: "8 Weeks",
    price: "$499",
    desc: "Build a complete Nav2 stack. Path planning, costmaps, and dynamic obstacle avoidance."
  }
];

export default function CourseCards() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-black mb-10 text-center">Available Cohorts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Pulsing Badge */}
              <div className="flex items-center gap-2 mb-6 bg-gray-50 w-fit px-3 py-1.5 rounded-full border border-gray-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${course.levelColor}`}></span>
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${course.levelColor}`}></span>
                </span>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{course.level}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{course.desc}</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent-blue" /> {course.duration}</div>
                <div className="flex items-center gap-2"><Tag className="w-4 h-4 text-accent-blue" /> {course.price}</div>
              </div>
              <button className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-accent-blue transition-colors">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}