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
        <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold animate-in zoom-in-95 duration-300">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form action={handleSubmit} className="flex flex-col gap-5">
        
        {/* The Hidden Field to pass the route to the server action */}
        <input type="hidden" name="redirectTo" value={redirectTo} />

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-gray-300">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="email" name="email" required placeholder="you@arbotrix.tech" className="w-full bg-[#0B0D14] border border-gray-800 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all text-sm shadow-inner" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-gray-300">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="password" name="password" required minLength={6} placeholder="••••••••••••" className="w-full bg-[#0B0D14] border border-gray-800 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all text-sm shadow-inner" />
          </div>
        </div>

        <div className="flex justify-end">
          <button type="button" className="text-xs font-medium text-gray-400 hover:text-accent-blue transition-colors">
            Forgot Password?
          </button>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="mt-4 w-full flex items-center justify-center gap-2 px-8 py-4 font-black text-white transition-all duration-300 bg-accent-blue hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-500 rounded-xl shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_35px_rgba(0,163,255,0.5)] uppercase tracking-widest text-[13px]"
        >
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
        </button>
      </form>

      {/* Pass the parameter to the register link as well so they don't lose it if they click "Apply Here" */}
      <div className="mt-8 text-center md:hidden">
        <p className="text-[13px] text-gray-400">
          Don't have an account? <Link href={`/register?redirectTo=${redirectTo}`} className="text-accent-blue font-bold">Apply Here</Link>
        </p>
      </div>
    </>
  );
}

// 2. The Main Page Component wrapped in Suspense
export default function LoginPage() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center bg-[#0B0D14] p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-[#131620] border border-gray-800 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden relative z-10">
        
        <div className="w-full md:w-1/2 bg-[#0B0D14] p-10 md:p-14 flex flex-col items-center justify-center text-center relative border-b md:border-b-0 md:border-r border-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)] opacity-40 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <Link href="/" className="mb-8 group">
              <Image 
                src="/images/arbotrix.png" 
                alt="Arbotrix" 
                width={160} 
                height={45} 
                className="transition-opacity duration-300 group-hover:opacity-80"
                priority
              />
            </Link>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Welcome Back!
            </h2>
            <p className="text-gray-400 text-sm mb-10 max-w-[280px] leading-relaxed">
              Initialize your uplink to access the Arbotrix network and resume your physical engineering missions.
            </p>
            
            {/* Notice how we use Suspense here just in case the link needs the params */}
            <Suspense fallback={<div className="h-12" />}>
                <SignupLink />
            </Suspense>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Sign In</h1>
            <p className="text-sm text-gray-400">Login to your account to continue</p>
          </div>

          <Suspense fallback={<div className="h-64 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-accent-blue" /></div>}>
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
            className="px-8 py-3 rounded-full border border-gray-600 text-white font-bold tracking-widest text-xs uppercase hover:bg-white/5 transition-colors duration-300 w-full max-w-[200px]"
        >
            Sign Up
        </Link>
    )
}