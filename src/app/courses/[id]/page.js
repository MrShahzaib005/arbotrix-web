import { Navbar } from "@/components/layout/Navbar";
import CourseDetailClient from "@/components/sections/courses/CourseDetailClient";
import { notFound } from "next/navigation";

// Synced perfectly with your Grid data
const COURSES = {
  "ros2-fundamentals": {
    id: "ros2-fundamentals",
    title: "ROS2 & Linux Fundamentals",
    level: "BEGINNER",
    levelColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    duration: "6 Weeks",
    price: "1000 PKR",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "Raspberry Pi 5 Provided",
    tagline: "The essential operating system foundation for modern robotics.",
    about: "This intensive 6-week module gives you everything you need to start building with ROS2 on Linux. You will bypass the theory and immediately start writing nodes, handling topics, and deploying custom services directly to physical Raspberry Pi hardware.",
    outcomes: [
      "Set up Ubuntu + ROS2 environments from scratch",
      "Master node communication (Publishers/Subscribers)",
      "Deploy code directly to physical Raspberry Pi 5 hardware",
    ]
  },
  "autonomous-navigation": {
    id: "autonomous-navigation",
    title: "Autonomous Floor Navigation",
    level: "INTERMEDIATE",
    levelColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    duration: "6 Weeks",
    price: "1000 PKR",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "Dodo-X Chassis Provided",
    tagline: "Build robots that find their own way.",
    about: "Take control of the Dodo-X chassis. This module focuses entirely on the Nav2 stack. You will map the H-13 labs using LIDAR, save the occupancy grids, and write the logic required for the robot to navigate the floor while actively avoiding dynamic obstacles.",
    outcomes: [
      "Generate and save physical maps using SLAM",
      "Configure the Nav2 stack for autonomous routing",
      "Implement real-time obstacle avoidance with LIDAR",
    ]
  },
  "computer-vision": {
    id: "computer-vision",
    title: "Applied Computer Vision",
    level: "INTERMEDIATE",
    levelColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    duration: "6 Weeks",
    price: "1000 PKR",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "OAK-D Camera Provided",
    tagline: "Give your robot eyes that actually think.",
    about: "Robots are blind without perception. In this module, you will interface with OAK-D spatial cameras to run YOLOv8 and MediaPipe pipelines on edge hardware. You will train the robot to detect specific floor types and trigger physical actions based on visual data.",
    outcomes: [
      "Interface physical cameras with ROS2 nodes",
      "Deploy YOLOv8 models for real-time detection",
      "Trigger hardware state changes based on visual inputs",
    ]
  },
  "ai-fleet-agents": {
    id: "ai-fleet-agents",
    title: "AI Agents & Fleet Control",
    level: "ADVANCED",
    levelColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    duration: "6 Weeks",
    price: "1000 PKR",
    location: "Arbotrix HQ Labs, H-13",
    hardware: "Local Server Access",
    tagline: "Command the swarm with Python-based intelligence.",
    about: "Move beyond single-robot control. This advanced module teaches you how to use LangGraph and stateful Python agents to monitor, command, and optimize a fleet of robots. You will build the central nervous system that directs autonomous workflows.",
    outcomes: [
      "Build stateful AI agents using LangGraph & Python",
      "Establish server-to-robot communication protocols",
      "Automate complex, multi-step physical workflows",
    ]
  }
};

export async function generateMetadata({ params }) {
  // 1. Unwrap the promise first
  const resolvedParams = await params;
  
  // 2. Now access the ID
  const course = COURSES[resolvedParams.id];
  
  if (!course) return { title: "Course Not Found" };
  
  return {
    title: `${course.title} | Arbotrix Academy`,
    description: course.tagline,
  };
}

export default async function IndividualCoursePage({ params }) {
  // 1. Unwrap the promise first
  const resolvedParams = await params;
  
  // 2. Now access the ID
  const course = COURSES[resolvedParams.id];
  
  if (!course) notFound();

  return (
    <main className="min-h-[100svh] bg-[#0B0D14] text-white selection:bg-accent-blue selection:text-white pb-24">
      <Navbar />
      <CourseDetailClient course={course} />
    </main>
  );
}