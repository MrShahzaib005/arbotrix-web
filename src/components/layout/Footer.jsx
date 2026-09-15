import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const FOOTER_LINKS = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Arbotrix Academy", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Autonomous Systems", href: "/services" },
    { name: "Full Stack Web & Mobile", href: "/services" },
    { name: "Embedded Designs", href: "/services" },
    { name: "ROS2 Simulation", href: "/services" },
    { name: "AI & Machine Learning", href: "/services" },
    { name: "CAD Design", href: "/services" },
    { name: "Video Editing", href: "/services" },
  ],
  industries: [
    { name: "Defense & Security", href: "/industries" },
    { name: "Facility Management", href: "/industries" },
    { name: "Logistics & Warehousing", href: "/industries" },
    { name: "Agriculture", href: "/industries" },
    { name: "Construction", href: "/industries" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0D14] text-slate-400 pt-20 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP GRID (Fixed Math: 4 + 2 + 3 + 3 = 12) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* BRANDING & CONTACT - 4 Columns */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="font-heading text-2xl font-black tracking-tighter text-white mb-6 flex items-center inline-block">
              arb<span className="text-blue-500 text-3xl leading-none">O</span>trix
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-medium max-w-sm">
              Engineering the future of autonomy. High-level experience in robotics and software architecture, producing quality autonomous systems for the real world.
            </p>
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:arbotrixpk@gmail.com" className="hover:text-white transition-colors">arbotrixpk@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500" />
                <a href="tel:+923195447944" className="hover:text-white transition-colors font-mono">+92 319 5447944</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* COMPANY LINKS - 2 Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-slate-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES LINKS - 3 Columns */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-slate-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES & SOCIALS - 3 Columns */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6">Industries</h3>
            <ul className="space-y-3 mb-10">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-slate-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-sm mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Arbotrix" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/arbotrix/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/arbotrix_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/923195447944" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Arbotrix Robotics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}