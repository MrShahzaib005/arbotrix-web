import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "@/components/layout/NavbarClient"; // FIX: Swapped to Client Navbar
import { ChevronRight, Eye, Brain, Database, Target, ShieldCheck, Activity } from "lucide-react";

export const metadata = {
  title: "Omni-Vac System | Arbotrix Engineering",
  description: "Autonomous facility maintenance utilizing edge-computed spatial AI, MobileNetV2 classification, and LiDAR mapping.",
};

export default function OmniVacProductPage() {
  return (
    // FIX: Standardized font-sans and removed the dark wrapper
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans">
      
      <NavbarClient user={null} />

      {/* =========================================
          SECTION 1: THE CLINICAL HERO (LIGHT)
          ========================================= */}
      {/* FIX: Adjusted padding and tightened button margins */}
      <section className="relative pt-24 pb-16 lg:pt-25 lg:pb-30 px-6 overflow-hidden">
        
        {/* Soft Blueprint Grid & Ambient Lab Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none transition-all duration-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          <div className="flex flex-col">
            {/* Clinical Lab Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Spatial Maintenance
            </div>

            {/* Heavy Slate Headline */}
            <h1 className="text-6xl lg:text-7xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-3 leading-[0.95] drop-shadow-sm">
              Autonomous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Floor System
              </span>
            </h1>

            {/* FIX: Tightened margins (mb-3 and mb-6) to fix the vertical rhythm */}
            <p className="text-2xl font-heading font-black text-slate-700 tracking-tight mb-2 uppercase">
              Zero-Oversight Facility Management.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-xl font-medium">
              Labor shortages cripple indoor maintenance. This platform replaces manual routing with a deep learning classification engine, utilizing spatial perception and dynamic LiDAR mapping to sanitize complex environments flawlessly.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#ai-pipeline" className="flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
                View AI Specs
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 font-heading font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

         
          {/* HIGH-DEF PRODUCT RENDER */}
          {/* FIX: Reduced max container height to 450px to tighten the grid */}
          <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[450px] flex items-center justify-center group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100/60 blur-[80px] rounded-full -z-10" />
            <Image
              src="/images/optic-clean.png"
              alt="Autonomous Floor System"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain scale-75 hover:scale-[80%] drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] z-10 relative transition-transform duration-700"
              priority
            />
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: THE "APPLE" SPEC RIBBON
          ========================================= */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center px-4">
              <Eye className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">OKD</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Spatial Vision</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Brain className="w-6 h-6 text-indigo-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">MobileNetV2</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Classification Model</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Target className="w-6 h-6 text-purple-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">TensorFlow</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Inference Engine</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Activity className="w-6 h-6 text-cyan-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">RPLiDAR</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Dynamic Mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: EDGE AI PIPELINE
          ========================================= */}
      <section id="ai-pipeline" className="relative py-18 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            {/* FIX: Styled tag and gradient text to match the other pages */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              System Architecture
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-4 drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Perception
              </span>{" "}
              & Inference
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              A robot is only as capable as its dataset. We engineered a proprietary edge-computing pipeline that processes spatial data in real-time without relying on cloud latency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Engineering Features - Upgraded to specific hardware stack facts */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Dataset Auditing & Deduplication</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Training bias destroys real-world navigation. We deploy custom Python scripts utilizing perceptual image hashing algorithms to purge duplicate data across category sets, resulting in an exceptionally clean training matrix.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                  <Brain className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Edge Model Deployment</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Raw computational power is useless if it drains the battery. We run highly optimized floor type classification models—trained through collaborative engineering pipelines—to execute real-time inference directly on edge hardware like the Raspberry Pi 5.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Multi-Sensor Redundancy</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    By integrating an OKD stereoscopic camera alongside ultrasonic sensors and the primary RPLiDAR array, the system achieves redundant spatial awareness, guaranteeing obstacle avoidance even in complex, unmapped sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Visualizer - Terminal Block */}
            {/* FIX: Applied explicit h-[350px] lg:h-[420px] and the scan animation */}
            <div className="bg-[#0B0D14] rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-slate-800 w-full h-[350px] lg:h-[420px] flex flex-col">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-4 text-xs font-mono text-slate-500">dataset_hash_audit.py</span>
              </div>
              <pre className="text-xs font-mono text-blue-300 leading-loose overflow-x-auto flex-grow">
                <code>
                  {`def generate_perceptual_hash(image_path):
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    image = cv2.resize(image, (8, 8))
    avg = image.mean()
    _, threshold = cv2.threshold(image, avg, 255, 0)
    return hashlib.md5(threshold.tobytes()).hexdigest()

def purge_duplicates(dataset_dir):
    hashes = set()
    removed = 0
    for img in os.listdir(dataset_dir):
        h = generate_perceptual_hash(img)
        if h in hashes:
            os.remove(img)
            removed += 1
        else:
            hashes.add(h)
    return removed`}
                </code>
              </pre>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: BOTTOM CTA (LIGHT THEME)
          ========================================= */}
      {/* FIX: Converted to Light Theme to match and drop into the dark footer properly */}
      <section className="bg-white py-24 px-6 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-6 drop-shadow-sm">
            Upgrade Your Facility.
          </h2>
          <p className="text-slate-600 mb-10 font-medium text-lg leading-relaxed">
            Stop relying on manual labor logs. Deploy an autonomous system that learns its environment and executes flawlessly.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
            Consult Engineering Team 
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}