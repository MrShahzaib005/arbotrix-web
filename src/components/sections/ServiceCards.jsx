"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Tell Sumaiya to npm install lucide-react if she hasn't

const services = [
  {
    title: "Custom Robot Development",
    desc: "End-to-end hardware and software engineering. We design, prototype, and manufacture custom kinetic platforms.",
    deliverables: ["ROS2 Architecture", "Custom PCB Design", "Kinematic Modeling"],
  },
  {
    title: "Robotics Consulting",
    desc: "Technical audits and strategic roadmaps for businesses looking to integrate automation into their existing workflows.",
    deliverables: ["Feasibility Studies", "Hardware Sourcing", "ROI Analysis"],
  },
  {
    title: "Project-Based Solutions",
    desc: "Drop-in engineering pods. We integrate specific AI, vision, or autonomous modules into your current hardware.",
    deliverables: ["Computer Vision Models", "SLAM Navigation", "Sensor Fusion"],
  }
];

export default function ServiceCards() {
  return (
    <section className="flex flex-col items-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-20"
      >
        <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6">
          We Solve <br/><span className="text-accent-blue">Robotics Problems.</span>
        </h1>
        <p className="text-lg text-gray-500 font-medium">
          Precision engineering for industrial and commercial automation. No fluff. Just hardware that works and software that scales.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group border border-gray-200 bg-gray-50/50 p-8 flex flex-col justify-between hover:shadow-xl hover:border-accent-blue/30 transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
              <ul className="mb-8 space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="text-sm font-semibold flex items-center text-gray-800">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="flex items-center text-sm font-bold group-hover:text-accent-blue transition-colors w-fit">
              Let's Talk <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}