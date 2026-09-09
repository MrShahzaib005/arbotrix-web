import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronRight, Eye, Brain, Database, Target, ShieldCheck, Activity } from "lucide-react";

export const metadata = {
  title: "Omni-Vac System | Arbotrix Engineering",
  description: "Autonomous facility maintenance utilizing edge-computed spatial AI, MobileNetV2 classification, and LiDAR mapping.",
};

export default function OmniVacProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* Navbar Wrapper */}
      <div className="bg-[#0B0D14]">
        <Navbar />
      </div>

      {/* =========================================
          SECTION 1: THE CINEMATIC HERO (DARK)
          ========================================= */}
      <section className="relative bg-[#0B0D14] pt-24 pb-32 lg:pt-32 lg:pb-48 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Spatial Maintenance
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-[1.05]">
              Autonomous <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                Floor System
              </span>
            </h1>
            
            <p className="text-xl font-black text-blue-400 tracking-tight mb-8 uppercase">
              Zero-Oversight Facility Management.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl font-medium">
              Labor shortages cripple indoor maintenance. This platform replaces manual routing with a deep learning classification engine, utilizing spatial perception and dynamic LiDAR mapping to sanitize complex environments flawlessly.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#ai-pipeline" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                View AI Specs
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-transparent border border-gray-700 text-white hover:border-gray-500 font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-2">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
            {/* Hovering Render effect matching your landing page */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] rounded-full -z-10" />
            <Image 
              src="/images/swipe-x.png" 
              alt="Autonomous Floor System" 
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl opacity-90"
              priority
            />
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: THE "APPLE" SPEC RIBBON (WHITE)
          ========================================= */}
      <section className="relative z-20 -mt-16 max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center px-4">
              <Eye className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">OAK-D</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Spatial Vision</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Brain className="w-6 h-6 text-indigo-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">MobileNetV2</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Classification Model</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Target className="w-6 h-6 text-rose-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">TensorFlow</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Inference Engine</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Activity className="w-6 h-6 text-emerald-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">LiDAR</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Dynamic Mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: EDGE AI PIPELINE
          ========================================= */}
      <section id="ai-pipeline" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
              System Architecture
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
              Perception & Inference
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              A robot is only as capable as its dataset. We engineered a proprietary edge-computing pipeline that processes spatial data in real-time without relying on cloud latency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Engineering Features */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Dataset Auditing & Deduplication</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Training bias destroys real-world navigation. We deploy custom Python scripts utilizing perceptual image hashing algorithms to purge duplicate data across category sets, resulting in an exceptionally clean training matrix for floor classification.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                  <Brain className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">MobileNetV2 Edge Deployment</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Raw computational power is useless if it drains the battery. We run highly optimized TensorFlow models based on the MobileNetV2 architecture to execute real-time floor type detection directly on the hardware edge.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">OAK-D Spatial Redundancy</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    2D cameras fail in dynamic lighting. By integrating OAK-D Lite stereoscopic vision alongside the primary LiDAR array, the system achieves redundant spatial awareness, guaranteeing obstacle avoidance even in complex, unmapped sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Visualizer - A clean code/terminal block to prove you write the actual AI */}
            <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-gray-800">
               <div className="flex items-center gap-2 mb-6">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                 <span className="ml-4 text-xs font-mono text-slate-500">dataset_hash_audit.py</span>
               </div>
               <pre className="text-xs font-mono text-blue-300 leading-loose overflow-x-auto">
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
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: BOTTOM CTA (DARK)
          ========================================= */}
      <section className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-6">
            Upgrade Your Facility
          </h2>
          <p className="text-slate-400 mb-10 font-medium">
            Stop relying on manual labor logs. Deploy an autonomous system that learns its environment and executes flawlessly.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Consult Engineering Team <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}