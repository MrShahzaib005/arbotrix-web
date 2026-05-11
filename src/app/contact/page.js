import { Navbar } from "@/components/layout/Navbar";
import UnifiedContactForm from "@/components/sections/contact/UnifiedContactForm";
import DirectContactInfo from "@/components/sections/contact/DirectContactInfo";

export const metadata = {
  title: "Contact Us | Arbotrix Robotics",
  description: "Get in touch for custom robotics solutions or enroll in our engineering courses.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-black selection:bg-accent-blue selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 max-w-4xl mx-auto px-6 w-full flex flex-col space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
            Join the Revolution
          </h1>
          <p className="text-gray-500 font-medium">
            Whether you are a business needing automation or a student ready to build, we are here.
          </p>
        </div>

        <UnifiedContactForm />
        <DirectContactInfo />
      </div>
    </main>
  );
}