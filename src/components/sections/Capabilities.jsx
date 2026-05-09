"use client";
import { motion } from "framer-motion";
import { Cpu, Settings, GraduationCap, Box } from "lucide-react"; // Swapped one icon so you don't have two CPUs

const CARDS = [
  { icon: Cpu, title: "Custom Robotics", desc: "Bespoke mechanical platforms tailored to your operational needs." },
  { icon: Settings, title: "Project Solutions", desc: "End-to-end integration and automation strategies." },
  { icon: GraduationCap, title: "Training", desc: "Expert-led programs for the next generation of engineers." },
  { icon: Box, title: "Proprietary Tech", desc: "In-house engineered hardware for immediate deployment." }
];

export const Capabilities = () => {
  return (
    <section className="bg-bg-primary py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-xl hover:border-accent-blue transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              {/* Clean, subtle blue fill on hover instead of a messy blur */}
              <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              
              <card.icon className="text-accent-blue mb-6 relative z-10" size={32} strokeWidth={1.5} />
              
              {/* Changed text-white to text-black */}
              <h3 className="font-heading font-bold text-xl text-black mb-2 relative z-10">
                {card.title}
              </h3>
              
              {/* Changed text-gray-400 to text-text-muted */}
              <p className="font-body text-text-muted text-sm mb-6 flex-grow relative z-10 leading-relaxed">
                {card.desc}
              </p>
              
              <a href="#" className="font-bold text-accent-blue text-sm relative z-10 inline-flex items-center group-hover:underline underline-offset-4">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};