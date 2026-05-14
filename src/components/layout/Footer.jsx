// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-16 border-t border-gray-900">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
//         {/* Brand */}
//         <div className="col-span-1 md:col-span-2">
//           <div className="font-heading text-2xl font-black tracking-tighter text-white mb-4 flex items-center">
//             arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
//           </div>
//           <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
//             Bridging the gap between high-performance software architecture and precision hardware. Built for scale, engineered for reality.
//           </p>
//           <div className="text-xs text-gray-600">
//             © {new Date().getFullYear()} Arbotrix Robotics. All rights reserved.
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Architecture</h4>
//           <ul className="space-y-4 text-sm text-gray-500">
//             <li><Link href="/products" className="hover:text-accent-blue transition-colors">The Fleet</Link></li>
//             <li><Link href="/services" className="hover:text-accent-blue transition-colors">Engineering Services</Link></li>
//             <li><Link href="/careers" className="hover:text-accent-blue transition-colors">Student Courses</Link></li>
//             <li><Link href="/contact" className="hover:text-accent-blue transition-colors">Contact Terminal</Link></li>
//           </ul>
//         </div>

//         {/* Network / Social */}
//         <div>
//           <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Network</h4>
//           <ul className="space-y-4 text-sm text-gray-500">
//             <li>
//               <a href="https://www.linkedin.com/company/arbotrix/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
//                 💼 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a href="https://wa.me/923195447944" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
//                 💬 WhatsApp
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/arbotrix_?igsh=MWxzYzQzY25va3d0dQ==" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
//                 📸 Instagram
//               </a>
//             </li>
//             <li><Link href="/privacy" className="hover:text-accent-blue transition-colors">Privacy Protocol</Link></li>
//             <li><Link href="/terms" className="hover:text-accent-blue transition-colors">Terms of Service</Link></li>
//           </ul>
//         </div>

//       </div>
//     </footer>
//   );
// }

// UPDATED FOOTER

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#05050A] text-white pt-20 pb-8 border-t border-gray-900 overflow-hidden">
      {/* Subtle Dot Grid Background restricted to the footer */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand & Socials */}
          <div className="col-span-1">
            <Link href="/" className="font-heading text-2xl font-black tracking-tighter text-white mb-4 flex items-center">
              arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
            </Link>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Engineering the future of autonomy,<br />
              one robot at a time.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/MrShahzaib005" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-400 hover:text-white">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/arbotrix/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-400 hover:text-white">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/arbotrix_?igsh=MWxzYzQzY25va3d0dQ==" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-400 hover:text-white">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/923195447944" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-all text-gray-400 hover:text-white">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="font-bold text-gray-300 mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-accent-blue transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent-blue transition-colors">Engineering Services</Link></li>
              <li><Link href="/courses" className="hover:text-accent-blue transition-colors">Student Courses</Link></li>
              <li><Link href="/contact" className="hover:text-accent-blue transition-colors">Contact Terminal</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="font-bold text-gray-300 mb-6 uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/products/tera-x" className="hover:text-accent-blue transition-colors">Project Tera-X</Link></li>
              <li><Link href="/products/fleet" className="hover:text-accent-blue transition-colors">The Fleet Hub</Link></li>
              <li><Link href="/services" className="hover:text-accent-blue transition-colors">Custom Hardware</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-bold text-gray-300 mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-accent-blue transition-colors">Privacy Protocol</Link></li>
              <li><Link href="/terms" className="hover:text-accent-blue transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="hover:text-accent-blue transition-colors">Security</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div>
            © {new Date().getFullYear()} Arbotrix Robotics. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <span className="text-accent-blue text-sm">⚡</span> in Islamabad, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
}

// MINIMALISTIC DESIGN

// import Link from "next/link";
// import { MapPin, Mail, Phone } from "lucide-react";
// import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-[#05050A] text-white pt-16 pb-8 border-t border-gray-900">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
//         {/* Main Content Layout */}
//         <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-16">
          
//           {/* Left Side: Brand, Statement & CTA */}
//           <div className="max-w-sm">
//             <Link href="/" className="font-heading text-2xl font-black tracking-tighter text-white mb-4 flex items-center inline-block">
//               arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
//             </Link>
//             <p className="text-gray-300 text-sm leading-relaxed mb-8 mt-2">
//               Engineering the future of autonomy. High level experience in robotics and software architecture, producing quality autonomous systems.
//             </p>
//             <Link 
//               href="/contact" 
//               className="inline-block bg-white text-black font-bold py-3 px-10 rounded-full hover:bg-gray-200 transition-colors text-sm"
//             >
//               Get started
//             </Link>
//           </div>

//           {/* Right Side: Contact & Socials Grid */}
//           <div className="flex-1 lg:pt-2">
//             <div className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-y-10 items-start md:items-center">
              
//               {/* Row 1: Contact Us */}
//               <div className="font-bold text-white text-sm">Contact Us</div>
//               <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4 text-sm text-gray-300">
//                 <div className="flex items-center gap-3">
//                   <MapPin className="w-4 h-4 text-gray-400" />
//                   <span>Islamabad, Pakistan</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Mail className="w-4 h-4 text-gray-400" />
//                   <span>hello@arbotrix.com</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-4 h-4 text-gray-400" />
//                   <span className="font-mono">+92 319 5447944</span>
//                 </div>
//               </div>

//               {/* Row 2: Follow Us */}
//               <div className="font-bold text-white text-sm mt-2 md:mt-0">Follow Us</div>
//               <div className="flex items-center gap-4">
//                 <a href="https://github.com/MrShahzaib005" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
//                   <FaGithub className="w-4 h-4" />
//                 </a>
//                 <a href="https://www.linkedin.com/company/arbotrix/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
//                   <FaLinkedin className="w-4 h-4" />
//                 </a>
//                 <a href="https://www.instagram.com/arbotrix_?igsh=MWxzYzQzY25va3d0dQ==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
//                   <FaInstagram className="w-4 h-4" />
//                 </a>
//                 <a href="https://wa.me/923195447944" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
//                   <FaWhatsapp className="w-4 h-4" />
//                 </a>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Full Width Separator & Copyright */}
//         <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
//           © {new Date().getFullYear()} Arbotrix Robotics. All Rights Reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }