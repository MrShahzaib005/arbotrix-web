import { Navbar } from "@/components/layout/Navbar";
// Using your exact component path
import ContactClient from "@/components/sections/contact/ContactClient";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactHero";

export const metadata = {
  title: "Contact | Arbotrix Robotics",
  description: "Get in touch with the Arbotrix engineering team.",
};

export default function ContactPage() {
  return (
    // Locked in the Light Theme (slate-50) we agreed upon
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white pb-24 relative overflow-hidden">
      
      {/* The Blueprint Grid (Restricted to the top area) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
      
      <div className="relative z-20">
        <Navbar />
      </div>
      <ContactClient />
    </main>
  );
}