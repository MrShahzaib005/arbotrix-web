"use client";
import { motion } from "framer-motion";
import { GitBranch, Code2, Cpu, Wrench } from "lucide-react";

// Simplified, Beginner-Friendly Content
const PROJECTS = [
  {
    id: 1,
    title: "Build a Self-Driving Robot",
    description: "Learn how to make a robot that can move around a room, avoid obstacles, and reach its destination without crashing. You will build the exact same 'brain' that powers modern self-driving cars, using a laser scanner to map the environment.",
    techStack: ["ROS2 Fundamentals", "LIDAR Mapping", "Python", "Navigation"],
    hardware: "Raspberry Pi 5 + LIDAR Sensor",
    image: "/images/project-courier.jpg", // Placeholder
    githubLink: "#",
  },
  {
    id: 2,
    title: "Teach a Robot to See & Pick",
    description: "Give your robot the ability to understand its surroundings. You will train an AI model to recognize different objects on the floor, calculate how far away they are, and program a robotic arm to carefully pick them up and sort them.",
    techStack: ["Computer Vision", "AI Model Training", "Robotic Arm Control"],
    hardware: "OAK-D AI Camera + Robotic Arm",
    image: "/images/project-arm.jpg", // Placeholder
    githubLink: "#",
  }
];

export default function CourseProjects() {
  return (
    <section className="bg-[#0B0D14] py-24 px-6 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left border-b border-gray-800 pb-8"
        >
          <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Your Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
            What You Will <span className="text-accent-blue">Build.</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            No boring simulators. By the end of this course, you will have programmed physical robots that actually work in the real world.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-24">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
              >
                {/* Visual Area */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 aspect-video lg:aspect-square bg-[#131620] rounded-3xl border border-gray-800 overflow-hidden relative group shadow-lg"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.05)_0%,transparent_70%)]" />
                  
                  {/* Image Placeholder */}
                  {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md text-[10px] font-mono text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="ml-2">Live_View_Camera_01</span>
                    </div>
                  </div>
                </motion.div>

                {/* Text / Data Area */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Simplified Hardware Callout */}
                  <div className="mb-6 p-4 bg-[#131620] border border-gray-800 rounded-2xl flex items-start gap-4">
                    <Wrench className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">We Provide The Hardware</div>
                      <div className="text-white font-medium">{project.hardware}</div>
                    </div>
                  </div>

                  {/* Simplified Skills Focus */}
                  <div className="mb-10">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> Core Skills
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold text-white hover:text-accent-blue transition-colors group self-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#131620] border border-gray-800 flex items-center justify-center group-hover:border-accent-blue transition-colors">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    View Code Example
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}