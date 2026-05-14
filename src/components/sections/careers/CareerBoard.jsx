"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, DollarSign, ChevronRight, CheckCircle2 } from "lucide-react";

const JOBS = [
  {
    id: 1,
    dept: "Engineering",
    title: "ROS2 Software Developer",
    location: "Remote",
    type: "Full-time",
    salary: "Paid",
    status: "Open",
    about: "Work on core ROS2 packages for autonomous navigation, perception, and manipulation. You'll be embedded in our hardware team shipping real robots.",
    requirements: [
      "Strong Python and C++ skills",
      "Experience with ROS2 (Humble or later)",
      "Familiarity with SLAM and navigation stacks",
      "Ability to work with real hardware (not just simulation)",
    ],
  },
  {
    id: 2,
    dept: "Engineering",
    title: "Embedded Systems Engineer",
    location: "Islamabad, PK",
    type: "Full-time",
    salary: "Paid",
    status: "Open",
    about: "Design and build custom PCBs and firmware for motor control, sensor fusion, and power management in our robot platforms.",
    requirements: [
      "Experience with STM32 or similar microcontrollers",
      "Proficiency in C/C++ for embedded systems",
      "Knowledge of CAN bus, I2C, SPI protocols",
      "PCB design experience (KiCad or Altium)",
    ],
  },
  {
    id: 3,
    dept: "AI & Vision",
    title: "Computer Vision Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "Paid",
    status: "Open",
    about: "Build real-time perception systems using OAK-D cameras and deep learning. Your models will run on edge hardware in production robots.",
    requirements: [
      "Strong Python and OpenCV skills",
      "Experience with object detection (YOLO, etc.)",
      "Familiarity with depth cameras and point clouds",
      "PyTorch or TensorFlow experience",
    ],
  },
  {
    id: 4,
    dept: "Engineering",
    title: "Mechanical Design Engineer",
    location: "Islamabad, PK",
    type: "Full-time",
    salary: "Paid",
    status: "Open",
    about: "Lead mechanical design of robotic structures from concept sketch to manufactured part. Work with our hardware team on DodoX and Tera-X platforms.",
    requirements: [
      "Proficiency in SolidWorks or Fusion 360",
      "Experience with FDM/SLA 3D printing",
      "Knowledge of manufacturing tolerances",
      "Structural analysis and simulation experience",
    ],
  },
  {
    id: 5,
    dept: "Training",
    title: "Robotics Instructor",
    location: "Islamabad, PK",
    type: "Part-time",
    salary: "Paid",
    status: "Open",
    about: "Deliver hands-on training in ROS2, Python, and robotic systems. You'll teach students using the exact hardware and software we use in production.",
    requirements: [
      "Deep knowledge of ROS2 and Linux",
      "Ability to explain complex topics clearly",
      "Experience with Raspberry Pi and Arduino",
      "Prior teaching or mentoring experience preferred",
    ],
  },
  {
    id: 6,
    dept: "Design",
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    salary: "Paid",
    status: "Open",
    about: "Own the design of our web platform, dashboards, and robot monitoring interfaces. You'll work directly with engineers to ship polished, functional UI.",
    requirements: [
      "Strong Figma skills",
      "Experience designing technical dashboards",
      "Understanding of design systems",
      "Basic HTML/CSS knowledge is a plus",
    ],
  },
];

const DEPT_COLORS = {
  "Engineering": "bg-blue-950  text-blue-400  border-blue-800",
  "AI & Vision":  "bg-purple-950 text-purple-400 border-purple-800",
  "Training":     "bg-green-950  text-green-400  border-green-800",
  "Design":       "bg-orange-950 text-orange-400 border-orange-800",
};

export default function CoursesBoard() {
  const [selectedJob, setSelectedJob] = useState(JOBS[0]);

  return (
    <div className="flex flex-col gap-10 pt-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
          [ Open Positions ]
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight">
          Join Our Team.
        </h1>
        <p className="font-body text-gray-400 text-lg mt-3 max-w-xl">
          {JOBS.length} open roles across engineering, AI, design, and training.
        </p>
      </motion.div>

      {/* Split Panel */}
      <div className="flex flex-col lg:flex-row gap-5 min-h-[600px]">

        {/* Left: Job List */}
        <div className="lg:w-[380px] flex-shrink-0 flex flex-col gap-3 lg:overflow-y-auto lg:max-h-[700px] pr-1 scrollbar-hide">
          {JOBS.map((job) => (
            <motion.button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                selectedJob.id === job.id
                  ? "bg-[#0d1a26] border-accent-blue shadow-lg shadow-accent-blue/10"
                  : "bg-[#111111] border-white/10 hover:border-white/25 hover:bg-[#161616]"
              }`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-md ${DEPT_COLORS[job.dept] || "bg-white/5 text-gray-400 border-white/10"}`}>
                  {job.dept}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-green-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {job.status}
                </span>
              </div>

              {/* Title */}
              <h3 className={`font-heading text-lg font-black mb-2 transition-colors ${
                selectedJob.id === job.id ? "text-accent-blue" : "text-white"
              }`}>
                {job.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
                <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
                <span className="flex items-center gap-1"><DollarSign size={11} />{job.salary}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Right: Job Detail */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJob.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 h-full"
            >
              {/* Dept tag */}
              <span className={`font-mono text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-md ${DEPT_COLORS[selectedJob.dept] || "bg-white/5 text-gray-400 border-white/10"}`}>
                {selectedJob.dept}
              </span>

              {/* Title */}
              <h2 className="font-heading text-3xl md:text-4xl font-black text-white mt-4 mb-5">
                {selectedJob.title}
              </h2>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1.5"><MapPin size={13} />{selectedJob.location}</span>
                <span className="flex items-center gap-1.5"><Clock size={13} />{selectedJob.type}</span>
                <span className="flex items-center gap-1.5 bg-green-950 text-green-400 border border-green-800 px-3 py-1 rounded-full font-bold">
                  <DollarSign size={13} />{selectedJob.salary}
                </span>
              </div>

              {/* Apply Button */}
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-accent-blue hover:bg-blue-400 text-white font-heading font-black text-sm uppercase tracking-widest py-4 rounded-full transition-colors duration-200 mb-10"
              >
                Apply Now <ChevronRight size={18} />
              </a>

              {/* About */}
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
                  About This Role
                </p>
                {/* Blue accent bar */}
                <div className="w-8 h-0.5 bg-accent-blue rounded-full mb-4" />
                <p className="font-body text-gray-300 text-base leading-relaxed">
                  {selectedJob.about}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                  Requirements
                </p>
                <ul className="flex flex-col gap-3">
                  {selectedJob.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent-blue mt-0.5 shrink-0" />
                      <span className="font-body text-gray-400 text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}