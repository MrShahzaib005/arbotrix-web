"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The "Hub" Data Architecture
const SERVICES = [
  {
    number: "01",
    title: "Autonomous Systems",
    desc: "End-to-end kinetic platform engineering. We design, prototype, and deploy intelligent robotic chassis for volatile environments.",
    points: ["ROS 2 Architecture", "Nav2 Navigation Stacks", "SLAM Mapping", "Sensor Fusion"],
    href: "/services/autonomous-systems"
  },
  {
    number: "02",
    title: "Full Stack Web & Mobile",
    desc: "Scalable software interfaces for your hardware. We build custom dashboards, telemetry monitors, and mobile control apps.",
    points: ["Next.js & React", "Flutter Applications", "Spring Boot / Flask APIs", "Tailwind CSS"],
    href: "/services/web-mobile"
  },
  {
    number: "03",
    title: "Embedded Designs",
    desc: "Low-level hardware control and intelligent logic gates. We bridge the gap between heavy machinery and edge computing.",
    points: ["ESP32 / Arduino Integration", "Custom PCB Prototyping", "State Machine Logic", "PWM Control Systems"],
    href: "/services/embedded-designs"
  },
  {
    number: "04",
    title: "ROS2 Simulation",
    desc: "Test without hardware risks. We build perfect digital twins of your kinetic platforms to validate autonomous code before physical deployment.",
    points: ["Gazebo Environments", "RViz Data Visualization", "URDF Chassis Modeling", "SITL Flight Testing"],
    href: "/services/ros2-simulation"
  },
  {
    number: "05",
    title: "AI & Machine Learning",
    desc: "Advanced spatial perception and classification. We give your hardware the ability to see, process, and react to dynamic obstacles.",
    points: ["TensorFlow Models", "OpenCV Integration", "Perceptual Hashing", "Edge Compute Deployment"],
    href: "/services/ai-ml"
  },
  {
    number: "06",
    title: "CAD Design",
    desc: "Precision mechanical engineering. We model ruggedized components optimized for rapid manufacturing and assembly.",
    points: ["Autodesk Fusion 360", "Blender 3D Modeling", "Sheet Metal Processing", "Laser-Cut Optimization"],
    href: "/services/cad-design"
  },
  {
    number: "07",
    title: "Video Editing",
    desc: "High-end project documentation. We produce cinematic showcases and technical breakdowns of your hardware in action.",
    points: ["Post-Production", "Motion Graphics", "Color Grading", "Technical Walkthroughs"],
    href: "/services/video-editing"
  },
];

export default function ServiceCards() {
  return (
    <section className="w-full font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        {SERVICES.map((service, i) => (
          <Link href={service.href} key={service.number} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              // FIX: Reduced padding (p-6 lg:p-7) and tightened flex gap (gap-4)
              className="h-full bg-white border border-slate-200 rounded-3xl p-6 lg:p-7 flex flex-col gap-4 hover:border-blue-300 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative overflow-hidden"
            >
              
              {/* Background Accent Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Number + Indicator */}
              <div className="flex items-center justify-between relative z-10">
                {/* FIX: Shrank number from text-5xl to text-4xl */}
                <span className="font-heading text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-300">
                  {service.number}
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-heading font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              {/* FIX: Changed leading-relaxed to leading-normal to save vertical space */}
              <p className="text-slate-600 text-sm font-medium leading-normal flex-grow relative z-10">
                {service.desc}
              </p>

              {/* Expanding divider */}
              <div className="w-8 h-0.5 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 relative z-10 my-1" />

              {/* Technical Points */}
              {/* FIX: Tightened bullet list gap from gap-3 to gap-1.5, text shrank to 11px */}
              <ul className="flex flex-col gap-1.5 relative z-10">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-[11px] font-bold tracking-wide text-slate-500 group-hover:text-slate-700 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-500 shrink-0 transition-colors" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Routing Call to Action */}
              {/* FIX: Reduced top margin and padding (pt-4 mt-2) */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors relative z-10">
                <span>Explore Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}