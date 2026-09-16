"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { login } from "@/app/actions/auth";
import { ArrowRight, AlertCircle, Loader2, Mail, Lock } from "lucide-react";

// 1. Create a sub-component that handles the form and search params
function LoginForm() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const searchParams = useSearchParams();
  
  // Grab the parameter from the URL (e.g. ?redirectTo=/courses)
  const redirectTo = searchParams.get('redirectTo') || '/dashboard';

  async function handleSubmit(formData) {
    setIsPending(true);
    setError(null);
    const result = await login(formData);
    
    if (result?.error) {
      setError(result.error);
      setIsPending(false);
    }
  }

  return (
    <>
      {error && (
        <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold animate-in zoom-in-95 duration-300 shadow-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form action={handleSubmit} className="flex flex-col gap-5">
        
        {/* The Hidden Field to pass the route to the server action */}
        <input type="hidden" name="redirectTo" value={redirectTo} />

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="you@arbotrix.com" 
              className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="password" 
              name="password" 
              required 
              minLength={6} 
              placeholder="••••••••••••" 
              className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-sm" 
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button type="button" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
            Forgot Password?
          </button>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="mt-4 w-full flex items-center justify-center gap-2 px-8 py-4 font-heading font-black text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:from-slate-300 disabled:to-slate-300 disabled:text-slate-500 rounded-xl shadow-md hover:shadow-lg uppercase tracking-widest text-[13px]"
        >
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Initialize Uplink"}
        </button>
      </form>

      {/* Pass the parameter to the register link as well so they don't lose it if they click "Apply Here" */}
      <div className="mt-8 text-center md:hidden">
        <p className="text-[13px] text-slate-500 font-medium">
          Don't have an account? <Link href={`/register?redirectTo=${redirectTo}`} className="text-blue-600 font-bold hover:text-blue-700">Apply Here</Link>
        </p>
      </div>
    </>
  );
}

// 2. The Main Page Component wrapped in Suspense
export default function LoginPage() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center bg-slate-50 font-sans p-6 relative overflow-hidden">
      
      {/* Structural Blueprint Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-80 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Glass Card */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white border border-slate-200 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden relative z-10">
        
        {/* Left Side: Branding & Context */}
        <div className="w-full md:w-1/2 bg-slate-50 p-10 md:p-14 flex flex-col items-center justify-center text-center relative border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <Link href="/" className="mb-10 group">
              <Image 
                src="/images/arbo-dark.png" 
                alt="Arbotrix" 
                width={160} 
                height={45} 
                className="transition-opacity duration-300 group-hover:opacity-70 drop-shadow-sm"
                priority
              />
            </Link>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Welcome Back.
            </h2>
            <p className="text-slate-500 font-medium text-sm mb-10 max-w-[280px] leading-relaxed">
              Initialize your uplink to access the Arbotrix network and resume your physical engineering missions.
            </p>
            
            {/* Notice how we use Suspense here just in case the link needs the params */}
            <Suspense fallback={<div className="h-12" />}>
                <SignupLink />
            </Suspense>
          </div>
        </div>

        {/* Right Side: Authentication Form */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-heading font-black text-slate-900 mb-2 tracking-tighter uppercase">Login</h1>
            <p className="text-sm font-medium text-slate-500">Authenticate to access the command center</p>
          </div>

          <Suspense fallback={<div className="h-64 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-600" /></div>}>
            <LoginForm />
          </Suspense>
        </div>

      </div>
    </main>
  );
}

// A tiny sub-component to handle the Desktop Signup link with the params
function SignupLink() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirectTo') || '/dashboard';
    
    return (
        <Link 
            href={`/register?redirectTo=${redirectTo}`}
            className="px-8 py-3.5 rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 font-heading font-black tracking-widest text-xs uppercase transition-all shadow-sm w-full max-w-[200px]"
        >
            Request Access
        </Link>
    )
}