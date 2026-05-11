import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="font-heading text-2xl font-black tracking-tighter text-white mb-4 flex items-center">
            arb<span className="text-accent-blue text-3xl leading-none">O</span>trix
          </div>
          <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
            Bridging the gap between high-performance software architecture and precision hardware. Built for scale, engineered for reality.
          </p>
          <div className="text-xs text-gray-600">
            © {new Date().getFullYear()} Arbotrix Robotics. All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Architecture</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link href="/products" className="hover:text-accent-blue transition-colors">The Fleet</Link></li>
            <li><Link href="/services" className="hover:text-accent-blue transition-colors">Engineering Services</Link></li>
            <li><Link href="/careers" className="hover:text-accent-blue transition-colors">Student Courses</Link></li>
            <li><Link href="/contact" className="hover:text-accent-blue transition-colors">Contact Terminal</Link></li>
          </ul>
        </div>

        {/* Legal / Social */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Network</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-accent-blue transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent-blue transition-colors">GitHub Repository</a></li>
            <li><Link href="/privacy" className="hover:text-accent-blue transition-colors">Privacy Protocol</Link></li>
            <li><Link href="/terms" className="hover:text-accent-blue transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}