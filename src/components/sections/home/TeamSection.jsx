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
    name: "NOOR KHAN", 
    role: "Co-Founder", 
    img: "/images/noor-bhai.jpeg", 
    bio: "Driving the backend operations and internal growth of Arbotrix. Focuses on building core support systems, connecting the team with top talent, and ensuring smooth execution" 
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
    img: "/images/kashaf.jpeg", 
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
    img: "/images/saim-bro.jpeg", 
    bio: "Designing intelligent robotic systems with precision CAD modeling and smart engineering solutions." 
  },
  { 
    name: "DR ANAS", 
    role: "Robotic Engineer", 
    img: "/images/anas-bhai.jpeg", 
    bio: "Developing autonomous robotic systems by combining AI, software, sensors, and precision hardware." 
  }
];

// Bulletproof Raw SVG for GitHub
// Native SVG for LinkedIn
const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Native SVG for GitHub
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Native SVG for Globe (Portfolio)
const GlobeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// 1. Founders 
const FounderCard = ({ member }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group">
    
    <div className="h-64 relative overflow-hidden bg-slate-100">
      <img
        src={member.img}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
    </div>
    
    <div className="p-6 flex flex-col flex-1">
      <h4 className="font-black text-xl text-slate-900 mb-1">
        {member.name}
      </h4>
      <p className="text-blue-600 font-bold text-[11px] tracking-widest uppercase mb-4">
        {member.role}
      </p>
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        {member.bio}
      </p>
      
      {/* THE FIX: Asli SVG Icons yahan laga diye gaye hain */}
      {/* Social Icons using Native SVGs */}
      <div className="flex gap-4 mt-6 pt-4 border-t border-gray-100 text-slate-400">
        <a href="#" className="hover:text-blue-600 transition-colors duration-300" aria-label="LinkedIn">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-slate-900 transition-colors duration-300" aria-label="GitHub">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-cyan-500 transition-colors duration-300" aria-label="Portfolio">
          <GlobeIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

// 2. Core Team 
const CircularTeamCard = ({ member }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-40 md:w-48 h-40 md:h-48 rounded-full overflow-hidden mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:shadow-[0_20px_40px_rgba(0,163,255,0.15)] border-4 border-white group-hover:border-blue-50 transition-all duration-500 relative bg-slate-100">
      <img
        src={member.img}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500" />
    </div>
    
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
    <section className="bg-slate-50 py-25 border-t border-gray-200 overflow-hidden">
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

        {/* TIER 1: FOUNDING BOARD */}
        <div className="w-full mb-32">
          <div className="mb-10 text-center md:text-left border-b border-gray-200 pb-6">
            <h3 className="text-slate-900 font-black text-3xl tracking-tight mb-2">
              Founding Board
            </h3>
            <p className="text-slate-500 font-medium">
              The architects driving the strategic and technical vision of Arbotrix.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <FounderCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIER 2: CORE TEAM (سرکلر ڈیزائن) */}
        <div className="w-full pt-16 border-t border-gray-200">
          <div className="mb-16 text-center md:text-left border-b border-gray-200 pb-6">
            <h3 className="text-slate-900 font-black text-3xl tracking-tight mb-2">
              Core Engineering & Design
            </h3>
            <p className="text-slate-500 font-medium">
              The specialists executing the complex hardware and AI pipelines behind the scenes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-12">
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