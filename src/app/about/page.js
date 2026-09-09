import { Navbar } from "@/components/layout/Navbar";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Arbotrix Engineering",
  description: "Arbotrix is an industrial robotics firm and advanced engineering academy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white pb-24">
      {/* 
        The Server Component (Navbar) sits safely at the root level, 
        and the Client Component (AboutClient) renders underneath it. 
      */}
      <Navbar />
      <AboutClient />
    </main>
  );
}