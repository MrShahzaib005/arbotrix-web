"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const PROJECTS = [
  {
    id: 1,
    category: "Flagship Platform",
    title: "DodoX",
    desc: "Our official versatile robotic architecture designed for complex, multi-agent environments and advanced computational tasks.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    offset: ""
  },
  {
    id: 2,
    category: "Heavy Logistics",
    title: "Tera-X",
    desc: "Heavy-duty quadrupedal weight-carrying robot built to handle extreme terrains and industrial-grade payload transport.",
    img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-16" // Pushes the second column down to create the staggered look
  },
  {
    id: 3,
    category: "Consumer Robotics",
    title: "Cleaning Robot",
    desc: "Autonomous navigation system powered by Raspberry Pi 5, RPLidar, and ROS2 Humble for high-precision floor type detection.",
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    offset: ""
  },
  {
    id: 4,
    category: "Aerial Systems",
    title: "Recon Drone",
    desc: "High-speed autonomous UAV tailored for spatial mapping, surveillance, and automated facility inspections.",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-16"
  }
];

export const FeaturedProject = () => {
  return (
    <section id="projects" className="bg-bg-primary py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Column: Sticky Messaging */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-[40%] lg:sticky lg:top-32 flex flex-col items-start"
        >
          <div className="font-mono text-accent-blue text-sm uppercase tracking-widest mb-4 font-bold">
            [ Featured Insights ]
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-black leading-[1.1] mb-4">
            Stories of our innovations across <span className="text-accent-blue">Robotics and Automation</span>
          </h2>
          <p className="font-body text-text-muted text-xl mb-8">
            From Concept to Completion.
          </p>
          <Button variant="solid" className="px-8 py-3.5 shadow-lg shadow-accent-blue/20">
            Explore More
          </Button>
        </motion.div>

        {/* Right Column: Staggered Project Grid */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`group relative h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${project.offset}`}
            >
              {/* Background Image */}
              <img 
                src={project.img} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300" />

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="font-mono text-[11px] text-accent-blue uppercase tracking-widest font-bold mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};