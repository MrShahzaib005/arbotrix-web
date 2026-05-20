import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Box } from 'lucide-react'
import EnrollFormClient from './EnrollFormClient'

export default async function EnrollPage({ params }) {
  const resolvedParams = await params
  const courseId = resolvedParams.id

  // Format the courseId from the URL into a readable title (e.g., 'ros2-fundamentals' -> 'Ros2 Fundamentals')
  const formattedCourseTitle = courseId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect(`/login?redirectTo=/courses/${courseId}/enroll`)
  }

  return (
    <main className="min-h-[100svh] bg-[#0B0D14] p-6 md:p-12 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        
        <Link href={`/courses/${courseId}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-bold transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Cancel & Return
        </Link>

        <div className="bg-[#131620] border border-accent-blue/30 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,163,255,0.05)]">
          
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-accent-blue" />
              <div>
                <h1 className="text-xl font-black text-white uppercase tracking-widest">Secure Enrollment</h1>
                <p className="text-gray-400 text-xs">Operator: {data.user.email}</p>
              </div>
            </div>
          </div>

          {/* --- NEW: THE ORDER SUMMARY --- */}
          <div className="mb-6 flex items-center justify-between bg-[#0B0D14] border border-gray-800 p-5 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-blue/10 rounded-lg">
                <Box className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Target Course</p>
                <h2 className="text-lg font-bold text-white">{formattedCourseTitle}</h2>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Total Fee</p>
              <p className="text-xl font-black text-emerald-400">1000 PKR</p>
            </div>
          </div>

          <div className="mb-8 p-5 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <h3 className="text-accent-blue font-bold mb-2">Payment Instructions</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Please transfer <strong className="text-white">1000 PKR</strong> to the following account to secure your seat.
            </p>
            <div className="bg-[#0B0D14] p-4 rounded-lg font-mono text-sm text-gray-400">
              <p>Bank: <span className="text-white">Meezan Bank</span></p>
              <p>Title: <span className="text-white">Arbotrix Robotics</span></p>
              <p>Account: <span className="text-white text-base">012345678910</span></p>
            </div>
          </div>

          <EnrollFormClient courseId={courseId} />

        </div>
      </div>
    </main>
  )
}