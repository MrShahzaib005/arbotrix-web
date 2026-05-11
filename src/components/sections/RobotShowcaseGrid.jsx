"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  { 
    id: 1, 
    title: "Autonomous Vacuum Pipeline", 
    category: "ROS2 & Hardware", 
    status: "Deployed",
    desc: "A complete integration utilizing Raspberry Pi 5 and OAK-D camera sensors for dynamic floor type detection."
  },
  { 
    id: 2, 
    title: "Project Tera-X", 
    category: "Next-Gen Platform", 
    status: "In Development",
    desc: "High-intelligence edge processing architecture designed for industrial warehouse environments."
  },
  { 
    id: 3, 
    title: "ViciDial AI Agent", 
    category: "Software Automation", 
    status: "Beta",
    desc: "Automated call center workflow agent for real-time log monitoring and database cleaning."
  },
];

export default function RobotShowcaseGrid() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group block bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-accent-blue/30 transition-colors duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-56 bg-black flex items-center justify-center relative overflow-hidden">
              <div className="text-gray-700 font-bold tracking-widest uppercase text-xs z-10 relative">
                [Render: {project.title}]
              </div>
              <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/5 transition-colors duration-500" />
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="flex justify-between items-center mb-3">
                <div className="text-accent-blue text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  {project.status}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {project.desc}
              </p>
              
              <button className="flex items-center text-sm font-bold text-white group-hover:text-accent-blue transition-colors">
                View Architecture <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}