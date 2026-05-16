// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ArrowRight } from "lucide-react"; // Swapped User for ArrowRight

// const NAV_LINKS = ["Products", "Services", "Careers", "Contact", "Courses"];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const pathname = usePathname();

//   // Detect scroll to trigger the dark-to-light theme switch
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
//         className={`fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 rounded-full ${
//           isScrolled
//             ? "bg-[#F8F9FB] shadow-lg border border-gray-200 py-3" // Solid light theme when scrolled
//             : "bg-[#1A1D27]/60 backdrop-blur-md border border-white/10 py-4 shadow-sm" // Premium dark glass theme
//         }`}
//       >
//         <div className="px-6 md:px-8 flex items-center justify-between">
          
//           {/* Logo */}
//           <Link
//             href="/"
//             className={`font-heading text-2xl font-black tracking-tighter flex items-center transition-colors duration-300 ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
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
//                   className={`relative text-[15px] font-bold transition-colors duration-200 ${
//                     isActive
//                       ? "text-accent-blue" 
//                       : isScrolled
//                       ? "text-gray-600 hover:text-black" 
//                       : "text-gray-300 hover:text-white" 
//                   }`}
//                 >
//                   {link}
//                   {isActive && (
//                     <motion.div
//                       layoutId="navbar-indicator"
//                       className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-blue rounded-full"
//                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Desktop CTA - Framer-Style Slide-In Button */}
//           <div className="hidden md:flex items-center">
//             <Link
//               href="/contact"
//               className="group relative inline-flex items-center justify-center px-7 py-2.5 font-bold text-white transition-all duration-300 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:shadow-[0_0_25px_rgba(0,163,255,0.5)] overflow-hidden"
//             >
//               {/* Text shifts left on hover */}
//               <span className="transition-transform duration-300 group-hover:-translate-x-3">
//                 Get Started
//               </span>
//               {/* Arrow fades and slides in from right */}
//               <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
//             </Link>
//           </div>

//           {/* Mobile Toggle */}
//           <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
//             {isMobileOpen ? (
//               <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
//             ) : (
//               <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
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
//             className="fixed inset-0 z-40 bg-[#0B0D14]/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
//           >
//             <div className="flex flex-col space-y-6 text-center">
//               {NAV_LINKS.map((link) => {
//                 const href = `/${link.toLowerCase()}`;
//                 const isActive = pathname === href || pathname.startsWith(href + "/");
//                 return (
//                   <Link
//                     key={link}
//                     href={href}
//                     onClick={() => setIsMobileOpen(false)}
//                     className={`text-2xl font-black transition-colors ${
//                       isActive ? "text-accent-blue" : "text-white hover:text-accent-blue"
//                     }`}
//                   >
//                     {link}
//                   </Link>
//                 );
//               })}
//               <div className="h-px bg-gray-800 w-full my-4" />
              
//               {/* Mobile CTA - Slide-In Button */}
//               <Link
//                 href="/contact"
//                 onClick={() => setIsMobileOpen(false)}
//                 className="group relative flex items-center justify-center w-full py-4 mt-2 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full overflow-hidden"
//               >
//                 <span className="transition-transform duration-300 group-hover:-translate-x-3">
//                   Get Started
//                 </span>
//                 <ArrowRight className="absolute right-1/4 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = ["Products", "Services", "Careers", "Contact", "Courses"];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to trigger the density change
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
            ? "bg-[#131620]/90 backdrop-blur-xl border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3" // Dense frosted slate when scrolled
            : "bg-[#1A1D27]/40 backdrop-blur-md border border-white/5 py-4 shadow-sm" // Sheer glass at rest
        }`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo - Permanently White/Blue */}
          <Link
            href="/"
            className="font-heading text-2xl font-black tracking-tighter flex items-center text-white"
          >
            arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
          </Link>

          {/* Desktop Links - Permanently Light */}
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

          {/* Desktop CTA - Framer-Style Slide-In Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-7 py-2.5 font-bold text-white transition-all duration-300 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:shadow-[0_0_25px_rgba(0,163,255,0.5)] overflow-hidden"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-3">
                Get Started
              </span>
              <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>

          {/* Mobile Toggle - Permanently White */}
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
              
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="group relative flex items-center justify-center w-full py-4 mt-2 font-bold text-white transition-all duration-300 bg-accent-blue hover:bg-blue-600 rounded-full overflow-hidden"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-3">
                  Get Started
                </span>
                <ArrowRight className="absolute right-1/4 w-5 h-5 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};