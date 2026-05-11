"use client";
import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Zaid Akhtar",
    role: "CEO & Co-Founder",
    dept: "Leadership",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sara Mehmood",
    role: "CTO",
    dept: "Engineering",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Hassan Ali",
    role: "Lead Robotics Engineer",
    dept: "Engineering",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Nadia Khan",
    role: "Head of Design",
    dept: "Design",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Omar Farooq",
    role: "Computer Vision Engineer",
    dept: "AI & Vision",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Ayesha Raza",
    role: "Mechanical Engineer",
    dept: "Mechanical",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Bilal Sheikh",
    role: "Embedded Systems Engineer",
    dept: "Engineering",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F8F9FB] py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
            Leadership
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-black leading-tight">
            The Minds <br />
            <span className="text-accent-blue">Behind Arbotrix.</span>
          </h2>
          <p className="font-body text-text-muted text-lg mt-4 max-w-xl">
            Engineers and builders who ship real robots to real clients.
          </p>
        </motion.div>

        {/* Scrollable Row */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              /* Square: fixed 220x220 — adjust size here if needed */
              className="group relative flex-shrink-0 w-[220px] h-[220px] rounded-2xl overflow-hidden cursor-pointer snap-start"
            >
              {/* Photo */}
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle bottom gradient always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* INFO PANEL — slides from right on hover */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-black/95 to-accent-blue/70
                flex flex-col justify-center items-start
                p-6
                translate-x-full
                group-hover:translate-x-0
                transition-transform duration-500 ease-in-out
              ">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 font-bold mb-3">
                  {member.dept}
                </span>
                <h3 className="font-heading font-black text-white text-base leading-tight mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-gray-300 text-xs leading-snug">
                  {member.role}
                </p>
                <div className="mt-5 w-8 h-0.5 bg-accent-blue rounded-full" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}