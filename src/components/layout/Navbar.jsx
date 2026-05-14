// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "../ui/Button";
// import { cn } from "../../lib/utils";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// const NAV_LINKS = ["Products", "Services", "Careers", "Contact", "Courses"];

// // All pages that use the dark (black) theme
// const DARK_PAGES = [
//   "/products",
//   "/products/tera-x",
//   "/services",
//   "/careers",
//   "/courses",
//   "/contact",
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const pathname = usePathname();

//   // True for any dark-themed page (also matches sub-routes like /products/*)
//   const isDarkTheme = DARK_PAGES.some((p) => pathname === p || pathname.startsWith(p + "/"));

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className={cn(
//           "fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-full",
//           isScrolled
//             ? isDarkTheme
//               ? "bg-black/85 backdrop-blur-xl border border-gray-800 py-3"
//               : "bg-white/85 backdrop-blur-xl shadow-lg border border-gray-200 py-3"
//             : isDarkTheme
//               ? "bg-white/5 backdrop-blur-md border border-white/10 py-4 shadow-sm"
//               : "bg-white/40 backdrop-blur-md border border-white/40 py-4 shadow-sm"
//         )}
//       >
//         <div className="px-6 md:px-8 flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             className={cn(
//               "font-heading text-2xl font-black tracking-tighter flex items-center transition-colors duration-300",
//               isDarkTheme ? "text-white" : "text-black"
//             )}
//           >
//             arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {NAV_LINKS.map((link) => {
//               const href = `/${link.toLowerCase()}`;
//               const isActive = pathname === href || pathname.startsWith(href + "/");
//               return (
//                 <Link
//                   key={link}
//                   href={href}
//                   className={cn(
//                     "relative text-sm font-bold transition-colors duration-200",
//                     isActive
//                       ? "text-accent-blue"
//                       : isDarkTheme
//                         ? "text-gray-400 hover:text-white"
//                         : "text-gray-500 hover:text-black"
//                   )}
//                 >
//                   {link}
//                   {isActive && (
//                     <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-blue rounded-full" />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Desktop Auth */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link
//               href="/login"
//               className={cn(
//                 "text-sm font-bold transition-colors duration-200",
//                 isDarkTheme ? "text-white hover:text-accent-blue" : "text-black hover:text-accent-blue"
//               )}
//             >
//               Log In
//             </Link>
//             <Button variant="solid" className="py-2.5 px-6 text-xs">
//               Register
//             </Button>
//           </div>

//           {/* Mobile Toggle */}
//           <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
//             {isMobileOpen ? (
//               <X className={cn("w-6 h-6", isDarkTheme ? "text-white" : "text-black")} />
//             ) : (
//               <Menu className={cn("w-6 h-6", isDarkTheme ? "text-white" : "text-black")} />
//             )}
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Full-Screen Menu */}
//       <AnimatePresence>
//         {isMobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
//           >
//             <div className="flex flex-col space-y-6 text-center">
//               {NAV_LINKS.map((link) => (
//                 <Link
//                   key={link}
//                   href={`/${link.toLowerCase()}`}
//                   onClick={() => setIsMobileOpen(false)}
//                   className="text-2xl font-black text-white hover:text-accent-blue transition-colors"
//                 >
//                   {link}
//                 </Link>
//               ))}
//               <div className="h-px bg-gray-800 w-full my-4" />
//               <Link
//                 href="/login"
//                 onClick={() => setIsMobileOpen(false)}
//                 className="text-lg font-bold text-gray-400 hover:text-white transition-colors"
//               >
//                 Log In
//               </Link>
//               <Button variant="solid" className="py-4 mt-4 w-full">
//                 Create Account
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// UPDATED THE NAVBAR FOR GLASS MORPHISM

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Products", "Services", "Careers", "Contact", "Courses"];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to trigger the dark-to-light theme switch
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
            ? "bg-[#F8F9FB] shadow-lg border border-gray-200 py-3" // Solid light theme when scrolled
            : "bg-white/5 backdrop-blur-md border border-white/10 py-4 shadow-sm" // Dark glass theme at rest
        }`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className={`font-heading text-2xl font-black tracking-tighter flex items-center transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
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
                    isActive
                      ? "text-accent-blue" // Active link is always blue
                      : isScrolled
                      ? "text-gray-600 hover:text-black" // Scrolled (Light background)
                      : "text-gray-300 hover:text-white" // At Rest (Dark background)
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

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className={`text-[15px] font-bold transition-colors duration-200 ${
                isScrolled ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-accent-blue hover:bg-blue-600 text-white text-[15px] font-bold px-7 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:shadow-[0_0_25px_rgba(0,163,255,0.5)]"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu (Remains Dark for consistency) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#05050A]/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
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
              <Link
                href="/login"
                onClick={() => setIsMobileOpen(false)}
                className="text-lg font-bold text-gray-400 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileOpen(false)}
                className="bg-accent-blue hover:bg-blue-600 text-white font-bold py-4 mt-4 w-full rounded-full transition-colors"
              >
                Create Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};