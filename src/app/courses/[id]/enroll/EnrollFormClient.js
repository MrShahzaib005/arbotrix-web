"use client";
import { useState } from "react";
import { submitEnrollment } from "@/app/actions/enrollment";
import { Loader2, AlertCircle, UploadCloud, ChevronDown } from "lucide-react";

export default function EnrollFormClient({ courseId }) {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  async function handleSubmit(formData) {
    setIsPending(true);
    setError(null);
    
    // Attach the courseId securely
    formData.append("courseId", courseId);

    const result = await submitEnrollment(formData);
    
    if (result?.error) {
      setError(result.error);
      setIsPending(false);
    }
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-6 w-full">
      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold shadow-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Operational Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 pl-1">WhatsApp Number</label>
          <input 
            type="text" 
            name="whatsappNumber" 
            required 
            placeholder="0300 1234567" 
            className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors shadow-sm" 
          />
        </div>
        
        <div className="flex flex-col gap-2 relative">
          <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 pl-1">Payment Method</label>
          <div className="relative">
            <select 
              name="paymentMethod" 
              required 
              className="w-full bg-white border border-slate-200 rounded-xl pl-5 pr-12 py-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm appearance-none transition-colors shadow-sm cursor-pointer"
            >
              <option value="Easypaisa">Easypaisa</option>
              <option value="JazzCash">JazzCash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="SadaPay/NayaPay">SadaPay / NayaPay</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 pl-1">Sender Account Title</label>
        <input 
          type="text" 
          name="senderAccountName" 
          required 
          placeholder="e.g., Zaid Akhtar" 
          className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors shadow-sm" 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 pl-1">Transaction ID / Reference</label>
        <input 
          type="text" 
          name="transactionId" 
          required 
          placeholder="e.g., 123456789012" 
          className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm font-mono transition-colors shadow-sm" 
        />
      </div>

      {/* File Upload Zone */}
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500 pl-1">Upload Receipt Screenshot</label>
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all duration-300 pointer-events-none flex flex-col items-center justify-center gap-3">
            <UploadCloud className="w-7 h-7 text-slate-400 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-colors truncate max-w-[80%] px-4 text-center">
              {fileName}
            </span>
          </div>
          <input 
            type="file" 
            name="screenshot" 
            required 
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setFileName(e.target.files[0]?.name || "No file chosen")}
            className="w-full h-36 opacity-0 cursor-pointer" 
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="mt-4 w-full flex items-center justify-center gap-2 px-8 py-5 font-black text-white transition-all duration-300 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 disabled:text-slate-500 rounded-xl uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] disabled:shadow-none"
      >
        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Enrollment"}
      </button>
    </form>
  );
}