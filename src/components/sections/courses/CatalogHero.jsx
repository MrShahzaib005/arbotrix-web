"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Authentic ROS2 Code snippet for the IDE window
const codeSnippets = {
  "nav_node.py": `import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class AutonomousNav(Node):
    def __init__(self):
        super().__init__('nav_node')
        self.publisher_ = self.create_publisher(Twist, 'cmd_vel', 10)
        self.get_logger().info('Hardware Nav Pipeline Active.')

def main(args=None):
    rclpy.init(args=args)
    node = AutonomousNav()
    rclpy.spin(node)
`,
  "vision.cpp": `#include <opencv2/opencv.hpp>
#include "depthai/depthai.hpp"

int main() {
    dai::Pipeline pipeline;
    auto camRgb = pipeline.create<dai::node::ColorCamera>();
    
    // Initializing OAK-D Pro Sensor
    camRgb->setResolution(
        dai::ColorCameraProperties::SensorResolution::THE_1080_P
    );
    return 0;
}`
};

export default function CatalogHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("nav_node.py");

  // Mouse tracking for the ambient background flashlight
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 px-6 border-b border-gray-900 overflow-hidden">
      
      {/* Interactive Mouse-Tracking Background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 163, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* Engineering Grid Texture */}
      {/* Engineering Grid Texture (Brighter & More Visible) */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D27_1px,transparent_1px),linear-gradient(to_bottom,#1A1D27_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* LEFT SIDE: Text Content */}
        <div className="w-full lg:w-1/2 flex-1 text-center lg:text-left z-10 mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6"
          >
            <ShieldCheck className="w-4 h-4" /> In-Person Academy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Master Robotics. <br />
            <span className="text-gray-500">Build Real Systems.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            Stop fighting with simulations. Join our intensive, cohort-based physical classes. We provide the hardware, the lab space, and the industry expertise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            {/* Embedded Trust Badges */}
            <div className="flex items-center gap-3 bg-[#131620] px-4 py-2.5 rounded-xl border border-gray-800">
              <Cpu className="w-5 h-5 text-accent-blue" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Hardware Provided</div>
                <div className="text-[10px] text-gray-500">Pi 5s & OAK-Ds</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-[#131620] px-4 py-2.5 rounded-xl border border-gray-800">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Industry Certified</div>
                <div className="text-[10px] text-gray-500">Official Credentials</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Interactive IDE Window */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          className="w-full lg:w-1/2 flex-1 relative"
        >
          {/* Subtle glow behind the IDE */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

          <div className="relative bg-[#0B0D14] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
            {/* IDE Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131620] border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-xs font-mono text-gray-500">
                  Arbotrix Dev Environment
                </span>
              </div>
            </div>

            {/* IDE Tabs */}
            <div className="px-4 pt-3 bg-[#131620]">
              <div className="flex gap-2 border-b border-gray-800 overflow-x-auto">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-mono border-b-2 transition-all ${
                      activeTab === tab
                        ? "text-accent-blue border-accent-blue bg-accent-blue/5"
                        : "text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* IDE Code Body */}
            <div className="h-[280px] w-full overflow-auto text-sm font-mono text-left bg-[#0B0D14]">
              <SyntaxHighlighter
                language={activeTab.includes(".py") ? "python" : "cpp"}
                style={vscDarkPlus}
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  padding: "1rem",
                }}
              >
                {codeSnippets[activeTab]}
              </SyntaxHighlighter>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}