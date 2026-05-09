"use client";
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-25 bg-bg-primary">
      
      {/* FRAMER MOTION ANIMATED BACKGROUND 
        pointer-events-none is critical so it doesn't block button clicks.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Left Drift */}
        <motion.div 
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[100px]"
        />
        {/* Bottom Right Drift */}
        <motion.div 
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#e0f2fe] rounded-full blur-[120px]"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-accent-blue text-xs uppercase tracking-[0.2em] mb-2 font-bold"
          >
            [ Robotics Engineering Studio ]
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold uppercase font-heading leading-[1.05] mb-6 text-black"
          >
            Building <br/>
            <span className="text-text-muted">The Future</span> <br/>
            Of Service <br/>
            Robots
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg mb-8 max-w-md font-body"
          >
            Custom robotics, precision engineering, and automation solutions designed to scale your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="solid">Work With Us</Button>
            <button className="px-6 py-3 font-bold rounded-lg tracking-wide transition-all duration-300 text-sm border-2 border-gray-300 text-text-main hover:border-black">
              Explore Courses
            </button>
          </motion.div>
        </div>

        {/* Right: Robot Arm Image/3D Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] md:h-[700px] w-full flex justify-center items-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" 
            alt="Robotic Arm" 
            className="object-contain w-full h-full drop-shadow-2xl mix-blend-multiply" 
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          />
        </motion.div>

      </div>
    </section>
  );
};