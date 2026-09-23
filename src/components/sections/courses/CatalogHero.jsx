"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    
    camRgb->setResolution(
        dai::ColorCameraProperties::SensorResolution::THE_1080_P
    );
    return 0;
}`,
};

export default function CatalogHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("nav_node.py");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // FIX: Removed min-h-[100svh] and applied strict responsive padding
    <section className="relative pt-36 pb-12 lg:pt-40 lg:pb-16 px-6 overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-60 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* FIX: Tightened the gap between the text block and the IDE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-1/2 flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> In-Person Academy
          </motion.div>

          {/* FIX: Scaled down to text-4xl/5xl to stop it from eating the viewport */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-heading font-black tracking-tighter text-slate-900 mb-4 leading-[0.95] uppercase"
          >
            Master Robotics. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Build Real Systems.
            </span>
          </motion.h1>

          {/* FIX: Scaled text down to base/lg and tightened margin */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 font-medium"
          >
            Stop fighting with simulations. Join our intensive, cohort-based
            physical classes. We provide the hardware, the lab space, and the
            industry expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <Cpu className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Hardware Provided
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pi 5s & OAK-Ds</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <div className="text-left">
                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Industry Certified
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Official Credentials
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full lg:w-1/2 flex-1 relative"
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

          <div className="relative bg-[#0B0D14] border border-slate-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] max-w-xl ml-auto">
            <div className="flex items-center justify-between px-4 py-3 bg-[#131620] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="ml-2 text-xs font-mono text-slate-400 font-bold tracking-widest uppercase">
                  Arbotrix Dev Environment
                </span>
              </div>
            </div>

            <div className="px-4 pt-3 bg-[#131620]">
              <div className="flex gap-2 border-b border-slate-800 overflow-x-auto">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-mono font-bold tracking-widest border-b-2 transition-all ${
                      activeTab === tab
                        ? "text-blue-400 border-blue-400 bg-blue-400/10"
                        : "text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* FIX: Reduced terminal height slightly to fit the new compact layout */}
            <div className="h-[240px] w-full overflow-auto text-sm font-mono text-left bg-[#0B0D14]">
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