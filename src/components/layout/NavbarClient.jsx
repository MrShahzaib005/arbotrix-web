"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";
import { logout } from "@/app/actions/auth";

const NAV_LINKS = ["Products", "Services",/* "Careers"*/, "Contact", "Courses"];

export const NavbarClient = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-[#131620]/90 backdrop-blur-xl border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3"
            : "bg-[#1A1D27]/40 backdrop-blur-md border border-white/5 py-4 shadow-sm"
        }`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/arbotrix.png"
              alt="Arbotrix"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const href = `/${link.toLowerCase()}`;
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={link}
                  href={href}
                  className={`relative text-[15px] font-bold transition-colors duration-200 ${
                    isActive ? "text-accent-blue" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-blue rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA (Dynamic Auth State) */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
               // LOGGED IN STATE
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-700 text-white text-xs font-bold uppercase tracking-widest hover:border-accent-blue transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4 text-accent-blue" />
                  Command Center
                </Link>
                <form action={logout}>
                  <button 
                    title="Terminate Uplink"
                    className="p-2 rounded-full border border-gray-800 text-gray-500 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
               // LOGGED OUT STATE
              <Link
                href="/login"
                className="group relative inline-flex items-center justify-center px-7 py-2.5 font-bold text-white transition-all duration-300 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:shadow-[0_0_25px_rgba(0,163,255,0.5)] overflow-hidden"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-3">
                  Sign In
                </span>
                <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0B0D14]/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => {
                const href = `/${link.toLowerCase()}`;
                const isActive = pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={link}
                    href={href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-2xl font-black transition-colors ${
                      isActive ? "text-accent-blue" : "text-white hover:text-accent-blue"
                    }`}
                  >
                    {link}
                  </Link>
                );
              })}
              
              <div className="h-px bg-gray-800 w-full my-4" />
              
              {/* Mobile CTA (Dynamic Auth State) */}
              {user ? (
                 <div className="flex flex-col gap-4">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-4 font-bold text-white transition-all duration-300 border border-gray-700 hover:border-accent-blue rounded-full"
                    >
                      <LayoutDashboard className="w-5 h-5 text-accent-blue" />
                      Command Center
                    </Link>
                    <form action={logout} className="w-full">
                      <button 
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-4 font-bold text-red-400 transition-all duration-300 border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 rounded-full"
                      >
                        <LogOut className="w-5 h-5" />
                        Terminate Uplink
                      </button>
                    </form>
                 </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="group relative flex items-center justify-center w-full py-4 mt-2 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full overflow-hidden"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-3">
                    Sign In
                  </span>
                  <ArrowRight className="absolute right-1/4 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};