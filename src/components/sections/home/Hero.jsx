// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      
//       {/* Animated Ambient Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square pointer-events-none z-0">
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.15, 0.25, 0.15],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="w-full h-full bg-accent-blue blur-[120px] rounded-full opacity-20"
//         />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-col items-center w-full">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight"
//         >
//           Engineering the Future <br className="hidden md:block" /> of <span className="text-accent-blue">Autonomy.</span>
//         </motion.h1>
        
//         <motion.p 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
//         >
//           We bridge the gap between high-performance software architecture and precision hardware. Built for scale, engineered for reality.
//         </motion.p>

//         <motion.div 
//           initial={{ opacity: 0, y: 10 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.5 }}
//           className="flex flex-col sm:flex-row gap-4 w-full justify-center"
//         >
//           <Link href="/services" className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2">
//             Work With Us <ArrowRight className="w-4 h-4" />
//           </Link>
//           <Link href="/courses" className="bg-[#0a0a0f] hover:bg-gray-900 border border-gray-800 text-white font-bold py-4 px-8 rounded-full transition-all text-center">
//             Explore Courses
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// ROBOT ARM VIDEO BELOW

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* 1. The Background Video */}
      <video
        /* Replace this URL with your actual Arbotrix robotics footage */
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. The Dark Overlay Gradient (Crucial for text readability) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-[#05050A]" />

      {/* 3. The Foreground Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-6 max-w-7xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Engineering the Future <br className="hidden md:block" /> of <span className="text-accent-blue drop-shadow-lg">Autonomy.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed drop-shadow-md"
        >
          We bridge the gap between high-performance software architecture and precision hardware. Built for scale, engineered for reality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link href="/services" className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-accent-blue/20">
            Work With Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/courses" className="bg-black/50 backdrop-blur-md hover:bg-black/80 border border-gray-600 hover:border-gray-400 text-white font-bold py-4 px-8 rounded-full transition-all text-center">
            Explore Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


// SPLINE 3D ARM BELOW

// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Spline from '@splinetool/react-spline';

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#05050A]">
      
//       {/* 1. The Interactive Spline 3D Background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <Spline scene="https://prod.spline.design/u57X4gGgu6LxSJXg/scene.splinecode" />
//       </div>

//       {/* 2. The Dark Overlay Gradient 
//           NOTE: pointer-events-none allows mouse clicks to pass through to the 3D model
//       */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-[#05050A] pointer-events-none" />

//       {/* 3. The Foreground Content */}
//       <div className="relative z-20 flex flex-col items-center w-full px-6 max-w-7xl mx-auto pt-20 pointer-events-none">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight drop-shadow-2xl"
//         >
//           Engineering the Future <br className="hidden md:block" /> of <span className="text-accent-blue drop-shadow-lg">Autonomy.</span>
//         </motion.h1>
        
//         <motion.p 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed drop-shadow-md"
//         >
//           We bridge the gap between high-performance software architecture and precision hardware. Built for scale, engineered for reality.
//         </motion.p>

//         {/* Restore pointer events strictly for the buttons so they are clickable */}
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.5 }}
//           className="flex flex-col sm:flex-row gap-4 w-full justify-center pointer-events-auto"
//         >
//           <Link href="/services" className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-accent-blue/20">
//             Work With Us <ArrowRight className="w-4 h-4" />
//           </Link>
//           <Link href="/courses" className="bg-black/50 backdrop-blur-md hover:bg-black/80 border border-gray-600 hover:border-gray-400 text-white font-bold py-4 px-8 rounded-full transition-all text-center">
//             Explore Courses
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// LAST UPDATED DESIGN
// HAS A ZOOM EFFECT WHICH IS GETTING IN THE WAY OF SCROLLING

// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Spline from '@splinetool/react-spline';

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050A]">
      
//       {/* 1. The Interactive Spline 3D Background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <Spline scene="https://prod.spline.design/u57X4gGgu6LxSJXg/scene.splinecode" />
//       </div>

//       {/* 2. Edge Darkening Gradients 
//           This fades the left and right sides to black so text is readable,
//           but leaves the center fully transparent for the robot arm.
//       */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#05050A] via-transparent to-[#05050A] pointer-events-none opacity-90" />
//       <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#05050A] via-transparent to-[#05050A]/50 pointer-events-none opacity-80" />

//       {/* 3. The Foreground Content - 3 Column Layout */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center pointer-events-none">
        
//         {/* Left Column: Primary Hook & Main CTA */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="flex flex-col items-start text-left pointer-events-auto"
//         >
//           <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4">
//             Arbotrix Robotics
//           </span>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.1] drop-shadow-2xl">
//             Engineering <br /> the Future <br /> of <span className="text-accent-blue drop-shadow-lg">Autonomy.</span>
//           </h1>
//           <Link href="/services" className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 shadow-xl hover:shadow-accent-blue/20">
//             Work With Us <ArrowRight className="w-4 h-4" />
//           </Link>
//         </motion.div>

//         {/* Center Column: Empty Space 
//             This forces the grid to leave a massive gap in the middle of the screen 
//             where your Spline model will be fully visible.
//         */}
//         <div className="hidden lg:block h-[400px]"></div>

//         {/* Right Column: Subtext & Secondary CTA */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//           className="flex flex-col items-start lg:items-end text-left lg:text-right pointer-events-auto mt-10 lg:mt-0"
//         >
//           <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
//             Built for Scale.
//           </h2>
//           <p className="text-lg text-gray-300 max-w-[280px] lg:max-w-sm mb-8 leading-relaxed drop-shadow-md">
//             We bridge the gap between high-performance software architecture and precision hardware. Engineered for reality.
//           </p>
//           <Link href="/courses" className="bg-black/50 backdrop-blur-md hover:bg-black/80 border border-gray-600 hover:border-gray-400 text-white font-bold py-4 px-8 rounded-full transition-all">
//             Explore Courses
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }