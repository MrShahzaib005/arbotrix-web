"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Cpu } from "lucide-react";

const COURSES = [
  {
    id: "ros2-fundamentals",
    title: "ROS2 & Linux Fundamentals",
    tagline: "The essential operating system foundation for modern robotics.",
    level: "Beginner",
    levelColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    dates: "Oct 15 - Nov 20, 2026",
    location: "Arbotrix HQ Labs",
    hardware: "Raspberry Pi 5 Provided",
    image: "/images/course-ros2.jpg", 
  },
  {
    id: "autonomous-nav",
    title: "Autonomous Floor Navigation",
    tagline: "Build a complete SLAM pipeline from scratch using Nav2 and LIDAR.",
    level: "Intermediate",
    levelColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    dates: "Dec 01 - Jan 15, 2027",
    location: "Arbotrix HQ Labs",
    hardware: "Dodo-X Chassis Provided",
    image: "/images/course-nav.jpg",
  },
  {
    id: "spatial-ai",
    title: "Spatial AI & Computer Vision",
    tagline: "Object detection, depth mapping, and edge AI using cameras.",
    level: "Advanced",
    levelColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    dates: "Feb 10 - Mar 30, 2027",
    location: "Arbotrix HQ Labs",
    hardware: "OAK-D Pro Provided",
    image: "/images/course-cv.jpg",
  },
  {
    id: "robot-arm-manipulation",
    title: "Robotic Arm Manipulation",
    tagline: "Learn inverse kinematics and motion planning for robotic arms.",
    level: "Intermediate",
    levelColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    dates: "Apr 05 - May 15, 2027",
    location: "Arbotrix HQ Labs",
    hardware: "6-DOF Arm Provided",
    image: "/images/course-arm.jpg",
  }
];

export default function CourseGrid() {
  return (
    <section className="w-full">
      {/* FIX: Forced max 2 columns across on large screens (lg:grid-cols-2) and increased the gap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {COURSES.map((course, index) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-[#131620] border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-600 transition-colors duration-300 shadow-lg hover:shadow-2xl"
          >
            <Link href={`/courses/${course.id}`} className="absolute inset-0 z-10">
              <span className="sr-only">View {course.title}</span>
            </Link>

            {/* FIX: Increased thumbnail height to h-56 to balance the new wider card aspect ratio */}
            <div className="relative h-56 bg-gray-900 overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.15)_0%,transparent_70%)]" />
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${course.levelColor}`}>
                  {course.level}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-0">
              <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-accent-blue transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {course.tagline}
              </p>

              {/* Logistics */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-300">
                  <Calendar className="w-5 h-5 mr-4 text-gray-500 shrink-0" />
                  <span className="truncate">{course.dates}</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="w-5 h-5 mr-4 text-gray-500 shrink-0" />
                  <span className="truncate">{course.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Cpu className="w-5 h-5 mr-4 text-accent-blue shrink-0" />
                  <span className="text-accent-blue font-medium truncate">{course.hardware}</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-800 mb-6" />
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Early Bird
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-300">
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}