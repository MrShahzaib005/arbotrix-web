"use client";
import { useState } from "react";
import { submitEnrollment } from "@/app/actions/enrollment";
import { Loader2, AlertCircle, UploadCloud } from "lucide-react";

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
    <form action={handleSubmit} className="flex flex-col gap-6">
      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Operational Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">WhatsApp Number</label>
          <input type="text" name="whatsappNumber" required placeholder="0300 1234567" className="bg-[#0B0D14] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Payment Method</label>
          <select name="paymentMethod" required className="bg-[#0B0D14] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm appearance-none transition-colors">
            <option value="Easypaisa">Easypaisa</option>
            <option value="JazzCash">JazzCash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="SadaPay/NayaPay">SadaPay / NayaPay</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Sender Account Title</label>
        <input type="text" name="senderAccountName" required placeholder="Zaid Akhtar" className="bg-[#0B0D14] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm transition-colors" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Transaction ID / Reference Number</label>
        <input type="text" name="transactionId" required placeholder="e.g., 123456789012" className="bg-[#0B0D14] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm font-mono transition-colors" />
      </div>

      {/* File Upload Zone */}
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Upload Receipt Screenshot</label>
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-[#0B0D14] rounded-xl border border-dashed border-gray-700 group-hover:border-accent-blue/50 group-hover:bg-accent-blue/5 transition-all duration-300 pointer-events-none flex flex-col items-center justify-center gap-3">
            <UploadCloud className="w-7 h-7 text-gray-500 group-hover:text-accent-blue transition-colors" />
            <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
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
        className="mt-4 w-full flex items-center justify-center gap-2 px-8 py-5 font-black text-white transition-all duration-300 bg-accent-blue hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-500 rounded-xl uppercase tracking-widest text-[13px]"
      >
        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Details"}
      </button>
    </form>
  );
}