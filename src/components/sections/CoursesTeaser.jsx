"use client";
import { motion } from "framer-motion";

const COURSES = [
  { title: "Foundations of ROS2", level: "Beginner", duration: "4 Weeks", price: "$499", color: "bg-green-500" },
  { title: "Advanced Kinematics", level: "Intermediate", duration: "6 Weeks", price: "$750", color: "bg-yellow-500" },
  { title: "Vision Systems Edge", level: "Advanced", duration: "8 Weeks", price: "$999", color: "bg-red-500" }
];

export const CoursesTeaser = () => {
  return (
    <section id="courses" className="bg-bg-primary py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="font-heading text-4xl font-bold text-white uppercase mb-6">Master The Machine.</h2>
          <p className="font-body text-gray-400 mb-8">
            Stop building toys. Learn the exact architecture, mathematics, and frameworks we use to deploy industrial robotics.
          </p>
        </div>
        
        <div className="lg:w-2/3 flex gap-6 overflow-x-auto pb-8 snap-x">
          {COURSES.map((course, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="min-w-[300px] flex-1 bg-bg-surface border border-[#1A2332] p-8 flex flex-col snap-center hover:border-accent-cyan transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className={`text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${course.color}`}>
                  {course.level}
                </span>
              </div>
              <h3 className="font-heading text-2xl text-white mb-2">{course.title}</h3>
              <p className="font-mono text-sm text-gray-500 mb-8">{course.duration} • {course.price}</p>
              <button className="mt-auto text-left font-mono text-accent-cyan text-sm hover:text-white transition-colors">
                Enroll →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};