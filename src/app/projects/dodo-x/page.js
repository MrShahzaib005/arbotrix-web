import { Navbar } from "@/components/layout/Navbar";
import DodoXClient from "@/components/sections/DodoXClient";

export const metadata = {
  title: "Dodo | Arbotrix Robotics",
  description: "Autonomous floor navigation platform built on ROS2, Raspberry Pi 5, and OAK-D spatial AI.",
};

export default function DodoXPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent-blue selection:text-white">
      <Navbar />
      <DodoXClient />
    </main>
  );
}