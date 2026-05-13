import { Navbar } from "@/components/layout/Navbar";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ClientSatisfaction from "@/components/sections/contact/ClientSatisfaction";

export const metadata = {
  title: "Contact | Arbotrix Robotics",
  description: "Get in touch with the Arbotrix team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-black selection:bg-accent-blue selection:text-white">
      <Navbar />
      <ContactHero />
      <div className="bg-[#000000] px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          <ClientSatisfaction />
        </div>
      </div>
    </main>
  );
}