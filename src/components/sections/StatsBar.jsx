"use client";
import { StatCounter } from "../ui/StatCounter";

export const StatsBar = () => {
  return (
    <section className="bg-bg-secondary w-full py-16 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <StatCounter value={12} suffix="+" label="Projects Delivered" />
        <StatCounter value={3} label="Robotics Domains" />
        <StatCounter value={200} suffix="+" label="Students Trained" />
        <StatCounter value={1} label="Product in Dev" />
      </div>
    </section>
  );
};