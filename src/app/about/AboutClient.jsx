"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Cpu, Network, Target, Zap, Flag } from "lucide-react";

// =========================================
// SVG ICONS
// =========================================
const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// =========================================
// TEAM DATA
// =========================================
const FOUNDERS = [
  {
    name: "Aqil Khan",
    role: "CEO & Founder",
    image: "/images/aqil-khan.jpeg",
    quote: "Software is useless if the chassis shatters on impact. Our mandate is to engineer rugged, scalable physical platforms that allow advanced AI to operate in the real world without failure or hesitation.",
    focus: "Executive Leadership, Hardware Vision",
    socials: { linkedin: "#", globe: "#" }
  },
  {
    name: "Kashaf Noor",
    role: "Co-Founder & COO",
    image: "/images/kashaf.jpeg",
    quote: "A brilliant robotic system only matters if it reaches the people who need it. My focus is bridging the gap between our raw engineering capabilities and real-world enterprise deployment through strategic operations and AI integration.",
    focus: "AI/ML Integration, Operations",
    socials: { linkedin: "#" }
  },
  {
    name: "Noor Khan",
    role: "Co-Founder",
    image: "/images/noor-bhai.jpeg",
    quote: "Driving the backend operations and internal growth of Arbotrix. My focus is building core support systems, connecting the team with top talent, and ensuring smooth execution across all technical fronts.",
    focus: "Backend Operations, Internal Growth",
    socials: { linkedin: "#" }
  },
  {
    name: "Muhammad Shahzaib",
    role: "Co-Founder & CTO",
    image: "/images/shahzaib-arbo.jpeg",
    quote: "Simulations build false confidence. We founded Arbotrix because the industry needed a bridge between high-level ROS2 logic and the physical realities of kinetic hardware. The future of autonomy isn't written in a terminal; it's proven in the dirt.",
    focus: "ROS2 & Development, Architecture",
    socials: { linkedin: "#", github: "#", globe: "#" }
  },
];

const CORE_TEAM = [
  { 
    name: "Sumayya Zahid", 
    role: "AI Engineer", 
    image: "/images/sumayya.jpeg", 
    bio: "Building intelligent systems through machine learning and real-time AI solutions for smart applications.",
    socials: { linkedin: "#", github: "#" }
  },
  { 
    name: "Syed Ali", 
    role: "Robotic Hardware Eng.", 
    image: "/images/ali-boy.jpeg", 
    bio: "Designing reliable hardware architectures, embedded systems, and sensor integrations for smart devices.",
    socials: { linkedin: "#" }
  },
  { 
    name: "Saim", 
    role: "CAD Designer", 
    image: "/images/saim-bro.jpeg", 
    bio: "Designing intelligent robotic systems with precision CAD modeling and smart engineering solutions.",
    socials: { linkedin: "#", globe: "#" }
  },
  { 
    name: "Dr. Anas", 
    role: "Robotic Engineer", 
    image: "/images/anas-bhai.jpeg", 
    bio: "Developing autonomous robotic systems by combining AI, software, sensors, and precision hardware.",
    socials: { linkedin: "#" }
  }
];

export default function AboutClient() {
  return (
    <main className="bg-slate-50 selection:bg-cyan-500 selection:text-white">
      {/* =========================================
          SECTION 1: THE MONOLITHIC HERO
          ========================================= */}
      <section className="relative pt-36 lg:pt-30 pb-24 px-6 border-b border-slate-200 font-sans overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-8 shadow-sm">
              <Cpu className="w-4 h-4 text-blue-600" />
              Arbotrix Engineering HQ
            </div>
            
            <h1 className="text-6xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-8 drop-shadow-sm">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Physical Reality.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Arbotrix is an industrial robotics firm and advanced engineering academy. We do not just write code; we design the sheet metal, wire the flight controllers, and train the deep learning models required to deploy true autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 1.5: OUR STORY
          ========================================= */}
      <section className="py-24 px-6 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Our Story
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col pt-8 md:pt-0 md:px-4">
              <Flag className="w-8 h-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tight mb-4">The Genesis</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Arbotrix began as a solution to a massive local constraint: importing advanced autonomous hardware was prohibitively expensive, and local simulations weren't enough. We started by laser-cutting our own custom steel chassis and wiring raw microcontrollers to bridge the gap between software theory and kinetic reality.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col pt-8 md:pt-0 md:px-8">
              <Target className="w-8 h-8 text-cyan-500 mb-6" />
              <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tight mb-4">The Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Our mission is to make production-ready autonomy viable for local industries and engineers. By building highly intelligent, self-contained robotic platforms like Dodo-X and Tera-X from the ground up, we eliminate dependency on expensive foreign hardware while advancing the global standard for edge AI.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col pt-8 md:pt-0 md:px-8">
              <Zap className="w-8 h-8 text-emerald-500 mb-6" />
              <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tight mb-4">Core Directives</h3>
              <ul className="flex flex-col gap-3 text-slate-600 text-sm font-medium">
                <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> No simulations without physical hardware validation.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> Edge computation over cloud latency.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> Build for the warehouse dirt, not the corporate desk.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: UNIFIED TEAM ROSTER
          ========================================= */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto font-sans">
        
        {/* Tier 1: Founding Board */}
        <div className="mb-20">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Executive Board
            </h2>
            <div className="h-px bg-slate-200 flex-grow ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDERS.map((founder, i) => (
              <motion.div 
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 flex flex-col shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex flex-col sm:flex-row justify-between gap-6 items-start mb-8">
                  <div className="flex gap-6 items-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 shrink-0 overflow-hidden relative shadow-sm">
                      <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-1 group-hover:text-blue-600 transition-colors">
                        {founder.name}
                      </h3>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">
                        {founder.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg w-fit">
                        <Network className="w-3 h-3 text-cyan-500 shrink-0" />
                        <span className="leading-tight">{founder.focus}</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons mapped dynamically */}
                  <div className="flex sm:flex-col gap-3 text-slate-400">
                    {founder.socials.linkedin && (
                      <a href={founder.socials.linkedin} className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    )}
                    {founder.socials.github && (
                      <a href={founder.socials.github} className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {founder.socials.globe && (
                      <a href={founder.socials.globe} className="hover:text-cyan-500 transition-colors" aria-label="Portfolio">
                        <GlobeIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative bg-slate-50 border border-slate-100 rounded-2xl p-6 flex-grow flex flex-col justify-center mt-auto">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-blue-100 -z-0" />
                  <p className="relative z-10 text-slate-700 text-sm font-medium leading-relaxed italic">
                    "{founder.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2: Core Engineering */}
        <div>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tighter">
              Core Engineering
            </h2>
            <div className="h-px bg-slate-200 flex-grow ml-8" />
          </div>

          {/* Scaled down versions of the Executive card for the engineering team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 shrink-0 overflow-hidden relative shadow-sm">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex gap-2 text-slate-400">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.globe && (
                      <a href={member.socials.globe} className="hover:text-cyan-500 transition-colors" aria-label="Portfolio">
                        <GlobeIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 tracking-tight uppercase mb-1 group-hover:text-cyan-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[9px] font-black text-cyan-600 uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}