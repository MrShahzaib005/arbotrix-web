"use client";
import { motion } from "framer-motion";

const FOUNDERS = [
  { 
    name: "AQIL KHAN", 
    role: "CEO & Founder", 
    img: "/images/aqil-khan.jpeg", 
    bio: "Driving the strategic vision and business growth of Arbotrix. Focuses on scaling autonomous solutions for enterprise clients, forging global partnerships, and ensuring the technical roadmap aligns with market demands." 
  },
  { 
    name: "SHAHZAIB", 
    role: "CTO & Co-Founder", 
    img: "/images/shahzaib-arbo.jpeg", 
    bio: "Architecting the technical infrastructure. Bridges the gap between high-level software ecosystems and precision hardware, ensuring our autonomous systems are scalable, secure, and production-ready." 
  },
  { 
    name: "KASHAF NOOR", 
    role: "COO & Co-Founder", 
    img: "/images/kashaf-noor.jpeg", 
    bio: "Leading daily operations and advancing the machine learning pipelines. Orchestrates the deployment of our core AI architecture and manages the cross-functional engineering teams." 
  }
];

const CORE_TEAM = [
  { 
    name: "SUMAYYA ZAHID", 
    role: "AI Engineer", 
    img: "/images/sumayya.jpeg", 
    bio: "Building intelligent systems through machine learning and real-time AI solutions for smart applications." 
  },
  { 
    name: "SYED ALI", 
    role: "Robotic Hardware Engineer", 
    img: "/images/ali-boy.jpeg", 
    bio: "Designing reliable hardware architectures, embedded systems, and sensor integrations for smart devices." 
  },
  { 
    name: "SAIM", 
    role: "Robotic Eng and CAD Designer", 
    img: "/images/saim.jpeg", 
    bio: "Designing intelligent robotic systems with precision CAD modeling and smart engineering solutions." 
  },
  { 
    name: "DR ANAS", 
    role: "Robotic Engineer", 
    img: "/images/anas-bhai.jpeg", 
    bio: "Developing autonomous robotic systems by combining AI, software, sensors, and precision hardware." 
  }
];

// The Circular HR-style template applied to EVERYONE
const CircularTeamCard = ({ member }) => (
  <div className="flex flex-col items-center text-center group">
    {/* Circular Image Container */}
    <div className="w-40 md:w-48 h-40 md:h-48 rounded-full overflow-hidden mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:shadow-[0_20px_40px_rgba(0,163,255,0.15)] border-4 border-white group-hover:border-blue-50 transition-all duration-500 relative bg-slate-100">
      <img
        src={member.img}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500" />
    </div>
    
    {/* Centered Typography */}
    <h4 className="font-black text-xl text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
      {member.name}
    </h4>
    <p className="text-blue-600 font-bold text-[10px] tracking-widest uppercase mb-4">
      {member.role}
    </p>
    <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
      {member.bio}
    </p>
  </div>
);

export default function TeamSection() {
  return (
    <section className="bg-slate-50 py-32 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-9">
        
        {/* Main Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-blue-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">
              Leadership & Engineering
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              The Minds <br className="hidden md:block" />
              <span className="text-blue-600">Behind Arbotrix.</span>
            </h2>
          </motion.div>
        </div>

        {/* TIER 1: FOUNDING BOARD (NOW USING CIRCULAR LAYOUT) */}
        <div className="w-full mb-24">
          <div className="text-center mb-16">
            <h3 className="text-slate-900 font-black text-3xl tracking-tight mb-4">
              Founding Board
            </h3>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              The architects driving the strategic and technical vision of Arbotrix.
            </p>
          </div>
          
          {/* Centered 3-column grid for Founders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto">
            {FOUNDERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <CircularTeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIER 2: CORE TEAM */}
        <div className="w-full pt-20 border-t border-gray-200">
          <div className="text-center mb-20">
            <h3 className="text-slate-900 font-black text-3xl tracking-tight mb-4">
              Core Engineering & Design
            </h3>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              The specialists executing the complex hardware and AI pipelines behind the scenes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {CORE_TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <CircularTeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}