import { Navbar } from "@/components/layout/Navbar";
import CourseDetailClient from "@/components/sections/courses/CourseDetailClient";
import { notFound } from "next/navigation";

const COURSES = {
  "ros2-fundamentals": {
    title: "ROS2 & Linux Fundamentals",
    level: "Beginner",
    levelColor: "text-green-400",
    levelBg: "bg-green-500/10 border-green-500/30",
    levelDot: "bg-green-500",
    duration: "4 Weeks",
    price: 199,
    originalPrice: 249,
    date: "Oct 15 – Nov 20, 2026",
    location: "Arbotrix HQ Labs, Islamabad",
    hardware: "Raspberry Pi 5 Provided",
    seats: 12,
    tagline: "The essential foundation for modern robotics.",
    about:
      "This course gives you everything you need to start building with ROS2 on Linux. You'll set up a real development environment, understand the ROS2 communication model, and ship your first autonomous behavior — all on real hardware.",
    outcomes: [
      "Set up Ubuntu + ROS2 Humble from scratch",
      "Build publishers, subscribers, services and actions",
      "Understand the ROS2 lifecycle and launch system",
      "Debug nodes with CLI tools and rqt",
      "Write your first autonomous behavior pipeline",
    ],
    syllabus: [
      { week: "Week 1", topic: "Linux Foundation & ROS2 Setup", desc: "File system, bash scripting, environment setup, workspace creation." },
      { week: "Week 2", topic: "Nodes, Topics & Messages",       desc: "Publisher/subscriber pattern, custom message types, QoS policies." },
      { week: "Week 3", topic: "Services, Actions & Parameters", desc: "Request-response architecture, long-running actions, param server." },
      { week: "Week 4", topic: "Launch System & Real Hardware",  desc: "Launch files, URDF basics, deploying to Raspberry Pi 5." },
    ],
    tools: ["ROS2 Humble", "Ubuntu 22.04", "Python 3", "Raspberry Pi 5", "rqt", "rviz2"],
  },
  "autonomous-navigation": {
    title: "Autonomous Floor Navigation",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    levelBg: "bg-yellow-500/10 border-yellow-500/30",
    levelDot: "bg-yellow-500",
    duration: "6 Weeks",
    price: 299,
    originalPrice: 379,
    date: "Dec 01 – Jan 15, 2027",
    location: "Arbotrix HQ Labs, Islamabad",
    hardware: "Dodo-X Chassis Provided",
    seats: 10,
    tagline: "Build robots that find their own way.",
    about:
      "Go from zero to a fully navigating robot. You'll build a complete Nav2 stack — mapping, localization, path planning, and obstacle avoidance — deployed on the Dodo-X chassis with real LIDAR hardware.",
    outcomes: [
      "Build and tune a complete Nav2 navigation stack",
      "Create and save occupancy grid maps with SLAM",
      "Implement AMCL-based localization",
      "Configure global and local cost maps",
      "Deploy and test on Dodo-X mobile platform",
    ],
    syllabus: [
      { week: "Week 1", topic: "Mobile Robot Architecture",  desc: "Diff drive kinematics, TF2 transforms, odometry publishing." },
      { week: "Week 2", topic: "SLAM & Mapping",             desc: "SLAM Toolbox, occupancy grids, map saving and serving." },
      { week: "Week 3", topic: "Localization",               desc: "AMCL, particle filters, initial pose estimation." },
      { week: "Week 4", topic: "Nav2 Stack Deep Dive",       desc: "BT Navigator, planner server, controller server configuration." },
      { week: "Week 5", topic: "Obstacle Avoidance",         desc: "Costmap layers, inflation radius, dynamic obstacle handling." },
      { week: "Week 6", topic: "Full Deployment",            desc: "End-to-end autonomous run on Dodo-X, tuning and optimization." },
    ],
    tools: ["Nav2", "SLAM Toolbox", "AMCL", "LIDAR", "Dodo-X", "rviz2", "ROS2 Humble"],
  },
  "spatial-ai-vision": {
    title: "Spatial AI & Computer Vision",
    level: "Advanced",
    levelColor: "text-red-400",
    levelBg: "bg-red-500/10 border-red-500/30",
    levelDot: "bg-red-500",
    duration: "8 Weeks",
    price: 499,
    originalPrice: 649,
    date: "Feb 10 – Mar 30, 2027",
    location: "Arbotrix HQ Labs, Islamabad",
    hardware: "OAK-D Pro Provided",
    seats: 8,
    tagline: "Give your robot eyes that think.",
    about:
      "Learn to build real-time perception systems that run on edge hardware. From classical CV to deep learning, you'll ship models that detect, track, and understand the 3D world — deployed on OAK-D Pro cameras in production robots.",
    outcomes: [
      "Build object detection pipelines with YOLO on OAK-D",
      "Implement stereo depth estimation and point clouds",
      "Deploy and optimize models for edge inference",
      "Integrate vision output into ROS2 systems",
      "Build a full spatial AI pipeline from camera to decision",
    ],
    syllabus: [
      { week: "Week 1", topic: "Classical CV Foundations",    desc: "OpenCV, filtering, morphology, contour detection." },
      { week: "Week 2", topic: "Depth & 3D Perception",       desc: "Stereo vision, disparity maps, point cloud generation." },
      { week: "Week 3", topic: "OAK-D Camera Deep Dive",      desc: "DepthAI SDK, pipeline API, spatial coordinate extraction." },
      { week: "Week 4", topic: "Object Detection",            desc: "YOLOv8 training, export to OpenVINO, deployment on OAK-D." },
      { week: "Week 5", topic: "Tracking & Re-ID",            desc: "Multi-object tracking, DeepSORT, spatial tracking." },
      { week: "Week 6", topic: "ROS2 Vision Integration",     desc: "Publishing detections as ROS2 topics, rviz visualization." },
      { week: "Week 7", topic: "Edge Optimization",           desc: "Quantization, INT8 inference, latency profiling." },
      { week: "Week 8", topic: "Capstone Project",            desc: "Build and demo a full perception-to-action pipeline." },
    ],
    tools: ["OAK-D Pro", "DepthAI", "YOLOv8", "OpenCV", "PyTorch", "OpenVINO", "ROS2"],
  },
  "robotic-arm-manipulation": {
    title: "Robotic Arm Manipulation",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    levelBg: "bg-yellow-500/10 border-yellow-500/30",
    levelDot: "bg-yellow-500",
    duration: "6 Weeks",
    price: 349,
    originalPrice: 449,
    date: "Apr 05 – May 15, 2027",
    location: "Arbotrix HQ Labs, Islamabad",
    hardware: "6-DOF Arm Provided",
    seats: 10,
    tagline: "Program arms that move with precision.",
    about:
      "Master the mathematics and software behind robotic arm control. You'll implement forward and inverse kinematics, plan collision-free trajectories with MoveIt2, and control a real 6-DOF arm in pick-and-place tasks.",
    outcomes: [
      "Implement forward and inverse kinematics from scratch",
      "Build URDF models for custom robot arms",
      "Use MoveIt2 for motion planning and execution",
      "Program pick-and-place tasks with precision",
      "Integrate gripper control and force feedback",
    ],
    syllabus: [
      { week: "Week 1", topic: "Kinematics Foundations",     desc: "DH parameters, FK derivation, Jacobian basics." },
      { week: "Week 2", topic: "Inverse Kinematics",         desc: "Analytical and numerical IK, singularities, workspace limits." },
      { week: "Week 3", topic: "URDF & MoveIt2 Setup",       desc: "Building robot descriptions, MoveIt2 config wizard." },
      { week: "Week 4", topic: "Motion Planning",            desc: "OMPL planners, cartesian paths, constraints." },
      { week: "Week 5", topic: "Gripper & Perception",       desc: "Gripper control, grasp planning with point clouds." },
      { week: "Week 6", topic: "Pick & Place Capstone",      desc: "End-to-end pick-and-place pipeline on the 6-DOF arm." },
    ],
    tools: ["MoveIt2", "ROS2", "URDF", "OMPL", "Python", "6-DOF Arm", "rviz2"],
  },
};

export async function generateMetadata({ params }) {
  const course = COURSES[params.id];
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | Arbotrix Courses`,
    description: course.about,
  };
}

export default function IndividualCoursePage({ params }) {
  const course = COURSES[params.id];
  if (!course) notFound();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent-blue selection:text-white">
      <Navbar />
      <CourseDetailClient course={course} />
    </main>
  );
}