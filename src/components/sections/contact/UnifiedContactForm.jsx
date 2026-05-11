"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UnifiedContactForm() {
  const [activeTab, setActiveTab] = useState("student");

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("Student Form Submitted - Needs Backend!");
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    console.log("Client Form Submitted - Needs Backend!");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden w-full">
      
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-100 relative">
        {["student", "client"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-5 text-center font-bold text-sm uppercase tracking-wider transition-colors z-10 relative ${
              activeTab === tab ? "text-accent-blue" : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab === "student" ? "Student Registration" : "Client Inquiry"}
            
            {/* Sliding Underline Animation */}
            {activeTab === tab && (
              <motion.div
                layoutId="contactTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent-blue"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Form Content Area */}
      <div className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          
          {/* ---------------- STUDENT FORM ---------------- */}
          {activeTab === "student" && (
            <motion.form
              key="student-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleStudentSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">First Name</label>
                  <input type="text" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="John" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Email Address</label>
                  <input type="email" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Course Selection</label>
                  <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue bg-white appearance-none">
                    <option>ROS2 Fundamentals</option>
                    <option>Spatial AI & Vision</option>
                    <option>Autonomous Navigation</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Experience Level</label>
                  <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue bg-white appearance-none">
                    <option>Beginner (Some Python/C++)</option>
                    <option>Intermediate (Hardware Basics)</option>
                    <option>Advanced (Mechatronics/ROS)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-700">Why do you want to join?</label>
                <textarea rows="3" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue transition-all resize-none" placeholder="Tell us about your goals..." />
              </div>

              <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-colors">
                Submit Application
              </button>
            </motion.form>
          )}

          {/* ---------------- CLIENT FORM ---------------- */}
          {activeTab === "client" && (
            <motion.form
              key="client-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleClientSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Name</label>
                  <input type="text" required className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue transition-all" placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Company</label>
                  <input type="text" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue transition-all" placeholder="Acme Logistics" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Service Needed</label>
                  <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue bg-white appearance-none">
                    <option>Custom Robot Development</option>
                    <option>Robotics Consulting</option>
                    <option>Project-Based Integration</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-700">Budget Range</label>
                  <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue bg-white appearance-none">
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-700">Project Description</label>
                <textarea rows="4" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-blue transition-all resize-none" placeholder="We need to automate our warehouse floor..." />
              </div>

              <button type="submit" className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors">
                Request Consultation
              </button>
            </motion.form>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}