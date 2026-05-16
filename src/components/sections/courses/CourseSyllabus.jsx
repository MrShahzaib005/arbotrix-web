"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PlayCircle, BookOpen, Wrench, Download } from "lucide-react";

// Simplified, Outcome-Focused Syllabus Data
const SYLLABUS = [
  {
    id: 1,
    title: "Module 1: Introduction to Robot Brains & Setup",
    description: "Learn how modern smart robots process data. We will set up your Linux software environment from scratch and write your very first background program to control software logic.",
    totalTime: "4 Hours",
    lessons: [
      { title: "How Smart Robots Think (Introduction to ROS2)", type: "video", time: "45 min" },
      { title: "Setting up your Linux Coding Environment", type: "lab", time: "90 min" },
      { title: "Managing Robot Software Packages", type: "reading", time: "30 min" },
      { title: "Hands-on Lab: Writing Your First Robot Code", type: "lab", time: "75 min" },
    ]
  },
  {
    id: 2,
    title: "Module 2: How Robot Parts Talk to Each Other",
    description: "A robot cannot move if its computer cannot talk to its wheels or sensors. Learn how to securely pass data from cameras and sensors directly into the motors instantly.",
    totalTime: "5.5 Hours",
    lessons: [
      { title: "Understanding Data Flow (Publishers & Subscribers)", type: "video", time: "60 min" },
      { title: "Creating Custom Data Streams for Sensors", type: "lab", time: "60 min" },
      { title: "Smart Requests: Triggering Asynchronous Tasks", type: "video", time: "45 min" },
      { title: "Hardware Lab: Sending Signals to Electronic Pins", type: "lab", time: "120 min" },
    ]
  },
  {
    id: 3,
    title: "Module 3: Managing Complex Systems Seamlessly",
    description: "Real robots run dozens of programs simultaneously. Learn how to launch your entire network of software applications with a single command and change settings on the fly.",
    totalTime: "3.5 Hours",
    lessons: [
      { title: "Automating Startup with Launch Files", type: "video", time: "45 min" },
      { title: "Changing Robot Settings Without Restarting", type: "reading", time: "30 min" },
      { title: "Hardware Lab: Starting the Full Drive System", type: "lab", time: "90 min" },
    ]
  },
  {
    id: 4,
    title: "Module 4: 3D Space Awareness & Positioning",
    description: "Teach your robot to understand where it is located in a room. You will learn how to handle 3D math frameworks so the robot knows exactly where its camera ends and wheels begin.",
    totalTime: "6 Hours",
    lessons: [
      { title: "Introduction to 3D Space & Coordinates", type: "video", time: "60 min" },
      { title: "Tracking Moving Objects Relative to the Robot", type: "lab", time: "90 min" },
      { title: "Visualizing 3D Sensor Data on Your Screen", type: "lab", time: "60 min" },
      { title: "Capstone Lab: Mapping Out the Full Physical Chassis", type: "lab", time: "150 min" },
    ]
  }
];

export default function CourseSyllabus() {
  const [openModule, setOpenModule] = useState(0);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case "video": return <PlayCircle className="w-4 h-4 text-accent-blue" />;
      case "reading": return <BookOpen className="w-4 h-4 text-gray-500" />;
      case "lab": return <Wrench className="w-4 h-4 text-emerald-400" />;
      default: return <PlayCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <section className="bg-[#0B0D14] py-24 px-6 border-b border-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
              What You Will <span className="text-gray-500">Learn.</span>
            </h2>
          </div>
          
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#131620] hover:bg-gray-800 border border-gray-800 hover:border-gray-600 transition-colors rounded-full text-xs font-bold text-white group shrink-0 shadow-md">
            <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
            Download Course Syllabus
          </button>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-3">
          {SYLLABUS.map((mod, index) => {
            const isOpen = openModule === index;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                key={mod.id}
                className={`bg-[#131620] border rounded-xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-accent-blue/40 shadow-[0_0_15px_rgba(0,163,255,0.05)]" : "border-gray-800 hover:border-gray-700"
                }`}
              >
                {/* Header */}
                <button 
                  onClick={() => toggleModule(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 pr-4">
                    <h3 className={`text-base font-bold transition-colors ${isOpen ? "text-accent-blue" : "text-white"}`}>
                      {mod.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      <span>{mod.lessons.length} Lessons</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700" />
                      <span>{mod.totalTime}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 ${isOpen ? "text-accent-blue" : "text-gray-400"}`} />
                  </motion.div>
                </button>

                {/* Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-gray-400 text-xs mb-4 leading-relaxed border-l-2 border-gray-800 pl-3">
                          {mod.description}
                        </p>
                        
                        <div className="flex flex-col gap-1">
                          {mod.lessons.map((lesson, lIdx) => (
                            <div 
                              key={lIdx}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                {getLessonIcon(lesson.type)}
                                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-gray-500">
                                {lesson.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}