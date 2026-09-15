// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ArrowRight, LayoutDashboard, LogOut } from "lucide-react";
// import Image from "next/image";
// import { logout } from "@/app/actions/auth";

// const NAV_LINKS = ["Products", "Services", "About", "Contact", "Courses"];

// export const NavbarClient = ({ user }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* DESKTOP STERILE GLASS PILL NAVBAR */}
//       <motion.nav
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 flex items-center justify-between px-6 rounded-full font-sans ${
//           isScrolled
//             ? "bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] py-2.5"
//             : "bg-white/60 backdrop-blur-md border border-slate-200/50 py-3.5 shadow-sm"
//         }`}
//       >
//         {/* Logo */}
//         <Link href="/" className="flex items-center shrink-0">
//           <Image
//             src="/images/arbo-dark.png" 
//             alt="Arbotrix"
//             width={130}
//             height={32}
//             className="h-7 w-auto object-contain"
//             priority
//             /* MENTOR NOTE: If your logo is white, you MUST change this image source to a dark version */
//           />
//         </Link>

//         {/* Desktop Links (Dark Slate Text) */}
//         <div className="hidden md:flex items-center gap-8">
//           {NAV_LINKS.map((link) => {
//             const href = `/${link.toLowerCase()}`;
//             const isActive = pathname === href || pathname.startsWith(href + "/");
//             return (
//               <Link
//                 key={link}
//                 href={href}
//                 className={`relative text-sm font-medium tracking-wide font-sans transition-colors duration-200 ${
//                   isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
//                 }`}
//               >
//                 {link}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden md:flex items-center gap-3 shrink-0">
//           {user ? (
//             <>
//               <Link
//                 href="/dashboard"
//                 className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium tracking-wide hover:border-blue-500 hover:text-blue-600 transition-colors bg-white font-sans shadow-sm hover:shadow"
//               >
//                 <LayoutDashboard className="w-4 h-4" />
//                 Command Center
//               </Link>
//               <form action={logout}>
//                 <button
//                   title="Terminate Uplink"
//                   className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm hover:shadow"
//                 >
//                   <LogOut className="w-4 h-4" />
//                 </button>
//               </form>
//             </>
//           ) : (
//             <Link
//               href="/login"
//               // Kept the gradient so the primary CTA still pops aggressively against the white glass
//               className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium tracking-wide transition-all font-sans shadow-md hover:shadow-lg"
//             >
//               Sign In
//             </Link>
//           )}
//         </div>

//         {/* Mobile Toggle (Dark Icon) */}
//         <button
//           className="md:hidden shrink-0"
//           onClick={() => setIsMobileOpen(!isMobileOpen)}
//         >
//           {isMobileOpen ? (
//             <X className="w-6 h-6 text-slate-900" />
//           ) : (
//             <Menu className="w-6 h-6 text-slate-900" />
//           )}
//         </button>
//       </motion.nav>

//       {/* MOBILE FULL-SCREEN MENU (Light Theme) */}
//       <AnimatePresence>
//         {isMobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-0 z-40 bg-slate-50/98 backdrop-blur-2xl md:hidden flex flex-col pt-32 px-6 font-sans"
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
//                     className={`text-xl font-medium tracking-wide font-sans transition-colors ${
//                       isActive
//                         ? "text-blue-600"
//                         : "text-slate-600 hover:text-blue-600"
//                     }`}
//                   >
//                     {link}
//                   </Link>
//                 );
//               })}

//               <div className="h-px bg-slate-200 w-full my-4" />

//               {/* Mobile CTA */}
//               {user ? (
//                 <div className="flex flex-col gap-4">
//                   <Link
//                     href="/dashboard"
//                     onClick={() => setIsMobileOpen(false)}
//                     className="flex items-center justify-center gap-2 w-full py-4 text-sm font-medium tracking-wide text-slate-700 transition-all duration-300 border border-slate-200 hover:border-blue-500 hover:text-blue-600 rounded-full bg-white font-sans shadow-sm"
//                   >
//                     <LayoutDashboard className="w-4 h-4 text-blue-600" />
//                     Command Center
//                   </Link>
//                   <form action={logout} className="w-full">
//                     <button
//                       onClick={() => setIsMobileOpen(false)}
//                       className="flex items-center justify-center gap-2 w-full py-4 text-sm font-medium tracking-wide text-red-600 transition-all duration-300 border border-red-200 bg-red-50 hover:bg-red-100 rounded-full font-sans"
//                     >
//                       <LogOut className="w-4 h-4" />
//                       Terminate Uplink
//                     </button>
//                   </form>
//                 </div>
//               ) : (
//                 <Link
//                   href="/login"
//                   onClick={() => setIsMobileOpen(false)}
//                   className="group relative flex items-center justify-center w-full py-4 mt-2 text-sm font-medium tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full overflow-hidden font-sans shadow-md"
//                 >
//                   <span className="transition-transform duration-300 group-hover:-translate-x-3">
//                     Sign In
//                   </span>
//                   <ArrowRight className="absolute right-1/4 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
//                 </Link>
//               )}
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
import { Menu, X, ArrowRight, LayoutDashboard, LogOut, ChevronDown } from "lucide-react";
import Image from "next/image";
import { logout } from "@/app/actions/auth";

// STRUCTURAL UPGRADE: Converted flat array to an object array to handle nested routing
const NAV_LINKS = [
  { name: "Products", href: "/products" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Autonomous Systems", href: "/services/autonomous-systems" },
      { name: "Full Stack Web & Mobile", href: "/services/web-mobile" },
      { name: "Embedded Designs", href: "/services/embedded-designs" },
      { name: "ROS2 Simulation", href: "/services/ros2-simulation" },
      { name: "AI & Machine Learning", href: "/services/ai-ml" },
      { name: "CAD Design", href: "/services/cad-design" },
      { name: "Video Editing", href: "/services/video-editing" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Courses", href: "/courses" },
];

export const NavbarClient = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closes the mobile menu entirely when a route is clicked
  const handleMobileNavClick = () => {
    setIsMobileOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <>
      {/* DESKTOP STERILE GLASS PILL NAVBAR */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 flex items-center justify-between px-6 rounded-full font-sans ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] py-2.5"
            : "bg-white/60 backdrop-blur-md border border-slate-200/50 py-3.5 shadow-sm"
        }`}
      >
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/arbo-dark.png" 
            alt="Arbotrix"
            width={130}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links with Dropdown Logic */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 text-sm font-medium tracking-wide font-sans transition-colors duration-200 py-2 ${
                    isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* THE HOVER BRIDGE: The pt-4 creates an invisible physical bridge so the mouse doesn't fall off */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 p-2 w-64 flex flex-col">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors flex items-center justify-between group/item"
                        >
                          {subItem.name}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium tracking-wide hover:border-blue-500 hover:text-blue-600 transition-colors bg-white font-sans shadow-sm hover:shadow"
              >
                <LayoutDashboard className="w-4 h-4" />
                Command Center
              </Link>
              <form action={logout}>
                <button
                  title="Terminate Uplink"
                  className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm hover:shadow"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium tracking-wide transition-all font-sans shadow-md hover:shadow-lg"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden shrink-0 p-2 -mr-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </motion.nav>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-50/98 backdrop-blur-2xl md:hidden flex flex-col pt-32 px-6 font-sans overflow-y-auto pb-10"
          >
            <div className="flex flex-col space-y-2 text-center">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                
                return (
                  <div key={link.name} className="flex flex-col">
                    {link.dropdown ? (
                      // Mobile Accordion Trigger
                      <button
                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name)}
                        className={`flex items-center justify-center gap-2 py-4 text-xl font-medium tracking-wide font-sans transition-colors ${
                          isActive || activeMobileDropdown === link.name ? "text-blue-600" : "text-slate-700"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      // Standard Mobile Link
                      <Link
                        href={link.href}
                        onClick={handleMobileNavClick}
                        className={`py-4 text-xl font-medium tracking-wide font-sans transition-colors ${
                          isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* Mobile Dropdown Content */}
                    <AnimatePresence>
                      {link.dropdown && activeMobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-200/50 rounded-2xl mx-4 my-2"
                        >
                          <div className="flex flex-col py-2">
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={handleMobileNavClick}
                                className="py-3 px-6 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="h-px bg-slate-200 w-full my-6" />

              {/* Mobile CTA */}
              {user ? (
                <div className="flex flex-col gap-4">
                  <Link
                    href="/dashboard"
                    onClick={handleMobileNavClick}
                    className="flex items-center justify-center gap-2 w-full py-4 text-sm font-medium tracking-wide text-slate-700 transition-all duration-300 border border-slate-200 hover:border-blue-500 hover:text-blue-600 rounded-full bg-white font-sans shadow-sm"
                  >
                    <LayoutDashboard className="w-4 h-4 text-blue-600" />
                    Command Center
                  </Link>
                  <form action={logout} className="w-full">
                    <button
                      onClick={handleMobileNavClick}
                      className="flex items-center justify-center gap-2 w-full py-4 text-sm font-medium tracking-wide text-red-600 transition-all duration-300 border border-red-200 bg-red-50 hover:bg-red-100 rounded-full font-sans"
                    >
                      <LogOut className="w-4 h-4" />
                      Terminate Uplink
                    </button>
                  </form>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={handleMobileNavClick}
                  className="group relative flex items-center justify-center w-full py-4 mt-2 text-sm font-medium tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full overflow-hidden font-sans shadow-md"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-3">
                    Sign In
                  </span>
                  <ArrowRight className="absolute right-1/4 w-4 h-4 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};