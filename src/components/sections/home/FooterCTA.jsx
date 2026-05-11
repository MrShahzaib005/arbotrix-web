"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="bg-accent-blue py-24 text-center px-6">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
        Ready to build something?
      </h2>
      <Link href="/services" className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
        Start a Conversation <ArrowRight className="ml-3 w-5 h-5" />
      </Link>
    </section>
  );
}