import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronRight, Wind, Compass, Radio, Rocket, Settings, ShieldAlert, Cpu } from "lucide-react";

export const metadata = {
  title: "Aero-X Drone | Arbotrix Engineering",
  description: "Autonomous aerial reconnaissance utilizing Pixhawk flight controllers, ArduPilot SITL simulation, and ROS2.",
};

export default function AeroXProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Navbar Wrapper */}
      <div className="bg-[#0B0D14]">
        <Navbar />
      </div>

      {/* =========================================
          SECTION 1: THE CINEMATIC HERO (DARK)
          ========================================= */}
      <section className="relative bg-[#0B0D14] pt-24 pb-32 lg:pt-32 lg:pb-48 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black uppercase tracking-widest text-amber-400 mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Aerial Reconnaissance
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-[1.05]">
              Aero-X <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                UAV System
              </span>
            </h1>
            
            <p className="text-xl font-black text-amber-400 tracking-tight mb-8 uppercase">
              Dominate The Airspace.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl font-medium">
              Bypass ground obstacles with real-time spatial awareness. The Aero-X integrates lightweight edge computing with precision flight hardware to execute automated perimeter mapping and continuous object tracking.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#flight-architecture" className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                Flight Architecture
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-transparent border border-gray-700 text-white hover:border-gray-500 font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-2">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
            {/* Hovering Render effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/20 blur-[100px] rounded-full -z-10" />
            <Image 
              src="/images/aero-x.png" 
              alt="Aero-X Drone" 
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl opacity-90 animate-[translate-y-[-10px]_6s_ease-in-out_infinite_alternate]"
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
              <Cpu className="w-6 h-6 text-amber-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Pixhawk</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Flight Controller</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Compass className="w-6 h-6 text-rose-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">SITL</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Digital Twin Simulation</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Radio className="w-6 h-6 text-indigo-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Telemetry</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Mission Planner Sync</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Rocket className="w-6 h-6 text-emerald-500 mb-3" />
              <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">ROS2</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Autonomous Nodes</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: FLIGHT CALIBRATION & SIMULATION
          ========================================= */}
      <section id="flight-architecture" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
              Calibration Protocol
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
              Zero-Risk Deployment
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Physical testing without software verification is a liability. Our flight architecture mandates rigorous virtual simulation and telemetry tuning before the drone ever spins a rotor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visualizer - Terminal block for SITL / Mission Planner Initialization */}
            <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-gray-800">
               <div className="flex items-center gap-2 mb-6">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                 <span className="ml-4 text-xs font-mono text-slate-500">ardupilot_sitl_init.sh</span>
               </div>
               <pre className="text-xs font-mono text-amber-300 leading-loose overflow-x-auto">
                 <code>
{`[INIT] Starting ArduPilot Software-In-The-Loop...
sim_vehicle.py -v ArduCopter -f quad --console --map
[MAVLink] Connecting to tcp:127.0.0.1:5760
[SYS] Pixhawk Firmware Version: 4.4.1
[PARAM] Loading default quadcopter parameters...
[PARAM] BATT_MONITOR = 4
[PARAM] ARMING_CHECK = 1 (Enabling Pre-Arm Failsafes)
[CALIBRATION] Verifying motor channel outputs 1-4... OK.
[GPS] EKF3 IMU0 is using GPS. 3D Fix acquired.
[STATUS] Ready to arm. Switching to GUIDED mode.`}
                 </code>
               </pre>
            </div>

            {/* Engineering Features */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100 shadow-sm">
                  <Settings className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">SITL Digital Twin Testing</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    We eliminate firmware anomalies by running ArduPilot Software-In-The-Loop (SITL) simulations. This allows us to inject virtual GPS data and validate ROS2 trajectory nodes in a risk-free environment prior to physical deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 shadow-sm">
                  <ShieldAlert className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Hardware Tuning & Failsafes</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Integration relies on perfect calibration. Through Mission Planner, we execute precise motor output channel tuning and configure strict battery pre-arm flags, guaranteeing the Pixhawk controller will reject takeoff if voltage drops or GPS lock is lost.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                  <Radio className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Live Telemetry & ROS2</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    The Aero-X is more than a remote-controlled vehicle. By bridging the MAVLink protocol with custom ROS2 nodes, we parse live telemetry data to execute dynamic, autonomous perimeter sweeps without manual pilot intervention.
                  </p>
                </div>
              </div>
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
            Secure Your Airspace
          </h2>
          <p className="text-slate-400 mb-10 font-medium">
            Stop relying on commercial drones with closed ecosystems. Integrate an autonomous aerial platform built for enterprise telemetry and custom payloads.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            Consult Engineering Team <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}