"use client";
import { motion } from "framer-motion";
import { Cpu, Rocket, Users } from "lucide-react";

const benefits = [
  { icon: Cpu, title: "Real Hardware", desc: "Stop simulating. Write code that moves actual motors, reads from real OAK-D cameras, and runs on Raspberry Pi 5." },
  { icon: Rocket, title: "Real Projects", desc: "Build a portfolio that gets you hired. From basic kinematics to full autonomous navigation pipelines." },
  { icon: Users, title: "Industry Mentors", desc: "Learn from engineers actively building commercial robotics, not academics completely disconnected from the market." }
];

export default function WhyLearnWithUs() {
  return (
    <section className="py-12 border-y border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {benefits.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}