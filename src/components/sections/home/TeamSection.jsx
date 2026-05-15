// "use client";
// import { motion } from "framer-motion";

// const TEAM = [
//   // ... Keep your existing TEAM array exactly as it is ...
//   { name: "Zaid Akhtar", role: "CEO & Co-Founder", dept: "Leadership", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
//   { name: "Sara Mehmood", role: "CTO", dept: "Engineering", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
//   { name: "Hassan Ali", role: "Lead Robotics Engineer", dept: "Engineering", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
//   { name: "Nadia Khan", role: "Head of Design", dept: "Design", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
//   { name: "Omar Farooq", role: "Computer Vision Engineer", dept: "AI & Vision", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
//   { name: "Ayesha Raza", role: "Mechanical Engineer", dept: "Mechanical", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
//   { name: "Bilal Sheikh", role: "Embedded Systems Engineer", dept: "Engineering", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" }
// ];

// export default function TeamSection() {
//   return (
//     <section className="bg-black py-24 border-t border-gray-900">
//       <div className="max-w-7xl mx-auto px-8 mb-14">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
//             Leadership
//           </p>
//           <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
//             The Minds <br />
//             <span className="text-accent-blue">Behind Arbotrix.</span>
//           </h2>
//           <p className="font-body text-gray-400 text-lg mt-4 max-w-xl">
//             Engineers and builders who ship real robots to real clients.
//           </p>
//         </motion.div>
//       </div>

//       <div className="w-full grid grid-cols-7 gap-0">
//         {TEAM.map((member, i) => (
//           <motion.div
//             key={member.name}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.08 }}
//             className="group relative aspect-square overflow-hidden cursor-pointer border-r border-b border-gray-900 last:border-r-0"
//           >
//             <img
//               src={member.img}
//               alt={member.name}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//             <div className="
//               absolute inset-0
//               bg-gradient-to-br from-black/95 to-accent-blue/70
//               flex flex-col justify-center items-start
//               p-5
//               translate-x-full
//               group-hover:translate-x-0
//               transition-transform duration-500 ease-in-out
//             ">
//               <span className="font-mono text-[9px] uppercase tracking-widest text-white/60 font-bold mb-2">
//                 {member.dept}
//               </span>
//               <h3 className="font-heading font-black text-white text-sm leading-tight mb-1">
//                 {member.name}
//               </h3>
//               <p className="font-body text-gray-300 text-xs leading-snug">
//                 {member.role}
//               </p>
//               <div className="mt-4 w-6 h-0.5 bg-accent-blue rounded-full" />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// UPDATED THE TEAM SECTION

"use client";
import { motion } from "framer-motion";

// 1. Separated the Leadership/Founders
const FOUNDERS = [
  { 
    name: "AQIL KHAN", 
    role: "CEO & Founder", 
    img: "/images/aqil-khan.jpeg", 
    bio: "Driving the strategic vision and business growth of Arbotrix. Focuses on scaling autonomous solutions for enterprise clients." 
  },
  { 
    name: "KASHAF NOOR", 
    role: "COO & Co-Founder", 
    img: "/images/kashaf-noor.jpeg", 
    bio: "Leading daily operations and advancing the machine learning pipelines that power our core AI architecture." 
  },
  { 
    name: "SHAHZAIB", 
    role: "CTO & Co-Founder", 
    img: "/images/shahzaib-arbo.jpeg", 
    bio: "Architecting the technical infrastructure, bridging the gap between high-level software and precision hardware." 
  },
];

// 2. Separated the Core Engineering & Design Team
const CORE_TEAM = [
  { 
    name: "SUMAYYA ZAHID", 
    role: "AI Engineer", 
    img: "/images/sumayya.jpeg", 
    bio: "Building intelligent systems through machine learning, deep learning, and real time AI solutions for automation and smart applications." 
  },
  { 
    name: "SYED ALI", 
    role: "Robotic Hardware Engineer", 
    img: "/images/ali-boy.jpeg", 
    bio: "Designing reliable hardware architectures, embedded systems, and sensor integrations for high-performance smart devices." 
  },
  { 
    name: "SAIM", 
    role: "Robotic Eng and CAD Designer", 
    img: "/images/saim.jpeg", 
    bio: "Designing intelligent robotic systems with precision CAD modeling, combining automation, mechanical design, and smart engineering solutions for real-world applications." 
  },
  { 
    name: "DR ANAS", 
    role: "Robotic Engineer", 
    img: "/images/anas-bhai.jpeg", 
    bio: "Developing autonomous robotic systems by combining AI, software, sensors, and precision hardware for real-world applications." 
  }
];

// Reusable Card Component
const TeamCard = ({ member }) => (
  <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer bg-gray-900">
    {/* Base Image */}
    <img
      src={member.img}
      alt={member.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    
    {/* Gradient Overlay - Darkens slightly on hover for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

    {/* Content Container positioned at the bottom */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
      <h3 className="font-heading font-black text-white text-2xl tracking-tight mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        {member.name}
      </h3>
      <p className="text-accent-blue font-bold text-sm tracking-widest uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        {member.role}
      </p>

      {/* The Magic Hover Reveal */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
        <div className="overflow-hidden">
          <p className="pt-4 text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function TeamSection() {
  return (
    <section className="bg-[#05050A] py-32 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-9">
        
        {/* Main Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
              Leadership & Engineering
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white leading-tight">
              The Minds <br className="hidden md:block" />
              <span className="text-accent-blue">Behind Arbotrix.</span>
            </h2>
          </motion.div>
        </div>

        {/* Tier 1: Founders (3 Columns) */}
        <div className="mb-24">
          <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-8 border-b border-gray-800 pb-4 inline-block">
            Founding Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2: Core Team (4 Columns) */}
        <div>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-8 border-b border-gray-800 pb-4 inline-block">
            Core Engineering & Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}