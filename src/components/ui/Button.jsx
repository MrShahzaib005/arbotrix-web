"use client";
import { cn } from "../../lib/utils";

export const Button = ({ children, variant = "solid", className, ...props }) => {
  const baseClass = "px-6 py-3 font-bold rounded-lg tracking-wide transition-all duration-300 text-sm";
  
  const variants = {
    solid: "bg-accent-blue text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10",
  };

  return (
    <button className={cn(baseClass, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};