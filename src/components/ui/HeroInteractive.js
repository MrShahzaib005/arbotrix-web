"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroInteractive() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  // 1. THE TYPEWRITER EFFECT
  const words = ["Engineers", "Architects", "Innovators"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // 2. THE PARTICLE DISPERSION ENGINE
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouseRef.current.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouseRef.current.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * innerWidth - size * 2;
        let y = Math.random() * innerHeight - size * 2;
        let directionX = Math.random() * 2 - 1.5;
        let directionY = Math.random() * 2 - 1.5;
        let color = "rgba(0, 212, 255, 0.5)"; // Arbotrix Cyan
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className="relative w-full h-screen bg-[#0B0D14] overflow-hidden flex flex-col justify-center items-center"
      onMouseMove={(e) => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      }}
      onMouseLeave={() => {
        mouseRef.current.x = null;
        mouseRef.current.y = null;
      }}
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Training the Next Generation of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 block h-[1.2em]">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWord]}
            </motion.span>
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Master Applied Python, Connected Embedded Systems, and Autonomous Robotics.
        </p>

        {/* The Glassmorphic Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
          <div className="text-center">
            <h3 className="text-3xl font-black text-cyan-400">500+</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Active Nodes</p>
          </div>
          <div className="w-px bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-3xl font-black text-cyan-400">99.9%</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Uptime</p>
          </div>
          <div className="w-px bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-3xl font-black text-emerald-400">Verified</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Clearance</p>
          </div>
        </div>
      </div>
    </div>
  );
}