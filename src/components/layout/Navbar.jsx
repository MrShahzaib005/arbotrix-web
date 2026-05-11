"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- Import the router hook

const NAV_LINKS = ["Products", "Services", "Careers", "Contact", "Portfolio"];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // <-- Get the current URL path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-full",
        isScrolled 
          ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-200 py-3" 
          : "bg-white/40 backdrop-blur-md border border-white/40 py-4 shadow-sm"
      )}
    >
      <div className="px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-black tracking-tighter text-black flex items-center">
          arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const href = `/${link.toLowerCase()}`;
            const isActive = pathname === href; // Check if the current URL matches the link

            return (
              <Link
                key={link}
                href={href}
                className={cn(
                  "relative cursor-pointer text-sm font-bold transition-colors duration-200",
                  isActive 
                    ? "text-accent-blue" // Hard-highlight the active page
                    : "text-gray-500 hover:text-black" // Dim inactive links, darken on hover
                )}
              >
                {link}
                
                {/* Simple static underline for the active page */}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-blue rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Area */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="text-sm font-bold text-black hover:text-accent-blue transition-colors">
            Log In
          </Link>
          <Button variant="solid" className="py-2.5 px-6 text-xs">Register</Button>
        </div>
      </div>
    </motion.nav>
  );
};