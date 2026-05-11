"use client";
import { Mail, MessageCircle, Globe, MapPin } from "lucide-react";

export default function DirectContactInfo() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
      
      <a href="mailto:hello@arbotrix.com" className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-accent-blue transition-colors group">
        <Mail className="w-6 h-6 text-gray-400 group-hover:text-accent-blue mb-3 transition-colors" />
        <span className="text-sm font-bold text-gray-800">Email Us</span>
      </a>

      <a href="#" className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-accent-blue transition-colors group">
        <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-accent-blue mb-3 transition-colors" />
        <span className="text-sm font-bold text-gray-800">WhatsApp</span>
      </a>

      <a href="#" className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-accent-blue transition-colors group">
        <Globe className="w-6 h-6 text-gray-400 group-hover:text-accent-blue mb-3 transition-colors" />
        <span className="text-sm font-bold text-gray-800">LinkedIn</span>
      </a>

      <div className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-accent-blue transition-colors group">
        <MapPin className="w-6 h-6 text-gray-400 group-hover:text-accent-blue mb-3 transition-colors" />
        <span className="text-sm font-bold text-gray-800 text-center">Islamabad, PK</span>
      </div>

    </div>
  );
}