import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "@/components/layout/NavbarClient"; // FIX: Swapped to Client Navbar
import { ChevronRight, Wind, Compass, Radio, Rocket, Settings, ShieldAlert, Cpu } from "lucide-react";

export const metadata = {
  title: "Aero-X Drone | Arbotrix Engineering",
  description: "Autonomous aerial reconnaissance utilizing Pixhawk flight controllers, ArduPilot SITL simulation, and ROS2.",
};

export default function AeroXProductPage() {
  return (
    // FIX: Standardized font-sans and removed dark wrapper
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white font-sans">
      
      <NavbarClient user={null} />

      {/* =========================================
          SECTION 1: THE CLINICAL HERO (LIGHT)
          ========================================= */}
      {/* FIX: Adjusted padding and removed dark background */}
      <section className="relative pt-24 pb-16 lg:pt-15 lg:pb-20 px-6 overflow-hidden">
        
        {/* Soft Blueprint Grid & Ambient Lab Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-orange-100/40 blur-[120px] rounded-full pointer-events-none transition-all duration-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          <div className="flex flex-col">
            {/* Clinical Lab Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Aerial Reconnaissance
            </div>

            {/* Heavy Slate Headline */}
            <h1 className="text-6xl lg:text-7xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-3 leading-[0.95] drop-shadow-sm">
              Aero-X <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                UAV System
              </span>
            </h1>
            
            <p className="text-2xl font-heading font-black text-slate-700 tracking-tight mb-2 uppercase">
              Dominate The Airspace.
            </p>

            {/* FIX: Reduced margin-bottom from mb-10 to mb-6 */}
            <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-xl font-medium">
              Bypass ground obstacles with real-time spatial awareness. The Aero-X integrates lightweight edge computing with precision flight hardware to execute automated perimeter mapping and continuous object tracking.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#flight-architecture" className="flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
                Flight Architecture
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 font-heading font-bold text-xs uppercase tracking-widest transition-all shadow-sm hover:shadow">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* HIGH-DEF PRODUCT RENDER */}
          {/* FIX: Replaced aspect-square with responsive heights and added sizes prop */}
          <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[550px] flex items-center justify-center group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-100/50 blur-[80px] rounded-full -z-10" />
            <Image 
              src="/images/aero-x.png" 
              alt="Aero-X Drone" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.2)] z-10 relative animate-[translate-y-[-10px]_6s_ease-in-out_infinite_alternate]"
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
              <Cpu className="w-6 h-6 text-orange-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">Pixhawk</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Flight Controller</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Compass className="w-6 h-6 text-rose-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">SITL</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Digital Twin Sim</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Radio className="w-6 h-6 text-blue-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">Telemetry</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mission Planner</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Rocket className="w-6 h-6 text-emerald-500 mb-3" />
              <h4 className="text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">ROS2</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Autonomous Nodes</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: FLIGHT CALIBRATION & SIMULATION
          ========================================= */}
      <section id="flight-architecture" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            {/* FIX: Upgraded tag to match Hero section styling (white bg, slate text, pulsing dot) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Calibration Protocol
            </div>
            
            {/* FIX: Injected gradient into "Zero-Risk" to break up the solid block of text */}
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-4 drop-shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Zero-Risk
              </span>{" "}
              Deployment
            </h2>
            
            <p className="text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Physical testing without software verification is a liability. Our flight architecture mandates rigorous virtual simulation and telemetry tuning before the drone ever spins a rotor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Visualizer - Terminal Block (Kept dark for authentic terminal aesthetics) */}
            <div className="bg-[#0B0D14] rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-slate-800 w-full h-[350px] lg:h-[420px] flex flex-col">
               <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                 <span className="ml-4 text-xs font-mono text-slate-500">ardupilot_sitl_init.sh</span>
               </div>
               <pre className="text-xs font-mono text-emerald-400 leading-loose overflow-x-auto flex-grow">
                 <code>
{`[INIT] Starting ArduPilot Software-In-The-Loop...
sim_vehicle.py -v ArduCopter -f quad --console --map
[MAVLink] Connecting to tcp:127.0.0.1:5760
[SYS] Pixhawk Firmware Version: 4.4.1
[PARAM] Loading default quadcopter parameters...
[PARAM] BATT_MONITOR = 4
[PARAM] ARMING_CHECK = 1
[CALIBRATION] Verifying motor channel outputs 1-4... OK.
[GPS] EKF3 IMU0 is using GPS. 3D Fix acquired.
[STATUS] Ready to arm. Switching to GUIDED mode.`}
                 </code>
               </pre>
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
            </div>

            {/* Engineering Features */}
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">SITL Digital Twin Testing</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    We eliminate firmware anomalies by running ArduPilot Software-In-The-Loop (SITL) simulations. This allows us to inject virtual GPS data and validate ROS2 trajectory nodes in a risk-free environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                  <ShieldAlert className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Hardware Calibration & Failsafes</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    Integration relies on perfect calibration. Through Mission Planner, we execute precise channel configuration and Pixhawk motor testing, guaranteeing the flight controller will reject takeoff if voltage drops or GPS lock is lost.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                  <Radio className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-slate-900 mb-2">Live Telemetry & ROS2</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    By bridging the MAVLink protocol with custom ROS2 nodes, we parse live telemetry data to execute dynamic, autonomous perimeter sweeps without manual pilot intervention.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: BOTTOM CTA (LIGHT THEME)
          ========================================= */}
      {/* FIX: Converted to Light Theme to match Tera-X and drop into the dark footer properly */}
      <section className="bg-white py-24 px-6 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-6 drop-shadow-sm">
            Secure Your Airspace.
          </h2>
          <p className="text-slate-600 mb-10 font-medium text-lg leading-relaxed">
            Stop relying on commercial drones with closed ecosystems. Integrate an autonomous aerial platform built for enterprise telemetry and custom payloads.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg">
            Consult Engineering Team 
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}