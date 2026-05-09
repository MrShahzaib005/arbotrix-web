"use client";
import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      {/* Big CTA */}
      <div className="bg-bg-secondary py-32 px-6 flex flex-col items-center text-center border-t border-[#1A2332]">
        <h2 className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Ready to build something real?
        </h2>
        <p className="font-body text-gray-400 text-lg mb-10 max-w-xl">
          Talk to us. No jargon. Just engineering.
        </p>
        <Button variant="solid" className="px-10 py-4 text-lg">Get In Touch</Button>
      </div>

      {/* Slim Footer */}
      <div className="bg-black py-8 px-6 border-t border-[#1A2332]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-heading text-xl font-black tracking-tighter">
            AR<span className="text-accent-cyan">BO</span>TRIX
          </div>
          <div className="flex gap-6 font-mono text-xs text-gray-500 uppercase">
            <a href="#" className="hover:text-accent-cyan transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">GitHub</a>
          </div>
          <div className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Arbotrix. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};