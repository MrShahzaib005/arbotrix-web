"use client";
import { useState } from "react";
import { verifyOTP } from "@/app/actions/auth";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // If there's no email in the URL, someone navigated here by accident
  if (!email) {
    return <div className="min-h-screen bg-[#0B0D14] flex items-center justify-center text-white">Invalid Request</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await verifyOTP(formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D14] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-black text-white mb-2">Verify Command Access</h2>
        <p className="text-gray-400 mb-8">
          We sent a 6-digit secure code to <span className="text-accent-blue">{email}</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden inputs to pass state to the server action */}
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Verification Code
            </label>
            <input
              type="text"
              name="code"
              maxLength={6}
              required
              className="w-full bg-[#0B0D14] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-center text-2xl tracking-[0.5em] font-mono"
              placeholder="000000"
            />
          </div>

          {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Confirm Access"} <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}