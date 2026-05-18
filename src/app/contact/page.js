import { Navbar } from "@/components/layout/Navbar";
import ClientSatisfaction from "@/components/sections/contact/ClientSatisfaction";
import ContactForm from "@/components/sections/contact/ContactForm"; // Adjust path if yours is different

export const metadata = {
  title: "Contact | Arbotrix Robotics",
  description: "Get in touch with the Arbotrix engineering team.",
};

export default function ContactPage() {
  return (
    // FIX: Locked in the global #0B0D14 slate background
    <main className="min-h-screen bg-[#0B0D14] selection:bg-accent-blue selection:text-white">
      <Navbar />
      
      {/* Added pt-32 to clear the navbar cleanly */}
      <div className="pt-25 pb-24 relative overflow-hidden">
        {/* Subtle ambient glow to match the rest of the site */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <ContactForm />
        {/* <ClientSatisfaction /> */}
      </div>
    </main>
  );
}