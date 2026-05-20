"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Calendar, MapPin, Cpu, Wallet, ArrowRight, SearchX, Lock } from "lucide-react"; // Added Lock icon

const courses = [
  {
    id: "ros2-fundamentals",
    level: "BEGINNER",
    levelColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    title: "ROS2 & Linux Fundamentals",
    description: "The essential operating system foundation for modern robotics. Learn node communication, topics, and custom services.",
    duration: "6 Weeks",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "Raspberry Pi 5 Provided",
    fee: "1000 PKR",
  },
  {
    id: "autonomous-navigation",
    level: "INTERMEDIATE",
    levelColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Autonomous Floor Navigation",
    description: "Build a complete SLAM pipeline from scratch using Nav2 and LIDAR integration for real-world obstacle avoidance.",
    duration: "6 Weeks",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "Dodo-X Chassis Provided",
    fee: "1000 PKR",
  },
  {
    id: "computer-vision",
    level: "INTERMEDIATE",
    levelColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Applied Computer Vision",
    description: "Implement YOLOv8 and MediaPipe pipelines to detect floor types and trigger autonomous robotic state changes.",
    duration: "6 Weeks",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "OAK-D Camera Provided",
    fee: "1000 PKR",
  },
  {
    id: "ai-fleet-agents",
    level: "ADVANCED",
    levelColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    title: "AI Agents & Fleet Control",
    description: "Develop Python-based LangGraph intelligent agents to manage and optimize automated robotic workflows.",
    duration: "6 Weeks",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "Local Server Access",
    fee: "1000 PKR",
  }
];

export default function CourseGrid() {
  const searchParams = useSearchParams();
  const currentLevel = searchParams.get("level");

  const filteredCourses = currentLevel
    ? courses.filter((course) => course.level === currentLevel)
    : courses;

  return (
    <div className="w-full">
      {filteredCourses.length === 0 ? (
        <div className="w-full bg-[#131620] border border-gray-800 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
           <SearchX className="w-12 h-12 text-gray-600 mb-4" />
           <h3 className="text-xl font-bold text-white mb-2">No Courses Found</h3>
           <p className="text-gray-400">There are currently no active modules for this clearance level.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCourses.map((course) => {
            // THE LOGIC GATE: Check if the course is locked
            const isLocked = course.level !== "BEGINNER";

            return (
              <div 
                key={course.id} 
                className={`bg-[#131620] border rounded-3xl p-8 flex flex-col transition-all duration-300 shadow-lg relative overflow-hidden group ${
                  isLocked ? "border-gray-800 opacity-80" : "border-gray-800 hover:border-gray-600"
                }`}
              >
                {!isLocked && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-accent-blue/10 transition-colors duration-500" />
                )}

                <div className="mb-6 self-start flex items-center gap-3">
                  <span className={`text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border uppercase ${course.levelColor}`}>
                    {course.level}
                  </span>
                  {/* Visual indicator for locked courses */}
                  {isLocked && <Lock className="w-4 h-4 text-gray-500" />}
                </div>

                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                  {course.description}
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Duration: <span className="font-bold text-white">{course.duration}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{course.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Cpu className="w-4 h-4 text-accent-blue" />
                    <span className="text-accent-blue font-medium">{course.hardware}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300 mt-2 p-3 bg-[#0B0D14] border border-gray-800 rounded-xl">
                    <Wallet className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-white">Registration Fee: {course.fee} <span className="text-xs text-gray-500 font-normal ml-1">(Non-refundable)</span></span>
                  </div>
                </div>

                {/* THE ACTION GATE: Render Enroll Link OR Locked Button */}
                {!isLocked ? (
                  <Link 
                    href={`/courses/${course.id}/enroll`}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-[#0B0D14] border border-gray-700 text-white font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-all duration-300 group/btn"
                  >
                    <span>View Details & Enroll</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button 
                    disabled 
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0B0D14] border border-gray-800 text-gray-600 font-bold tracking-widest text-xs uppercase cursor-not-allowed"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Clearance Locked</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}