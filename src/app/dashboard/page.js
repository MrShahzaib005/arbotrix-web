import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { ShieldCheck, LogOut } from 'lucide-react'
import { logout } from '@/app/actions/auth'
import { Navbar } from '@/components/layout/Navbar'
import prisma from '@/utils/prisma' // 1. Added missing import

export default async function DashboardPage() {
  const supabase = await createClient()

  // 1. Securely check the active session
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const user = data.user // 2. Define user so we can use user.id

  // 2. Fetch Enrollments
  const enrollments = await prisma.enrollment.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <main className="min-h-[100svh] bg-[#0B0D14] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131620_1px,transparent_1px),linear-gradient(to_bottom,#131620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-gray-800 mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">Command Center</h1>
            <p className="text-sm text-gray-400">Arbotrix Secure Network • Active Session</p>
          </div>
          <form action={logout}>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all text-sm font-bold tracking-wider uppercase">
              <LogOut className="w-4 h-4" /> Terminate Uplink
            </button>
          </form>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[#131620] border border-accent-blue/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,163,255,0.05)] flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/50">
              <ShieldCheck className="w-6 h-6 text-accent-blue" />
              <h2 className="text-sm font-black text-white uppercase tracking-widest">Operator Identity</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Network ID</label>
                <p className="text-white text-sm font-medium mt-1">{user.email}</p>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">System UUID</label>
                <p className="text-gray-400 text-xs font-mono mt-1 break-all">{user.id}</p>
              </div>
            </div>
          </div>

          {/* Dynamic Mission List */}
          <div className="lg:col-span-2 space-y-4">
            {enrollments.length > 0 ? (
              enrollments.map((enr) => (
                <div key={enr.id} className="bg-[#131620] p-6 rounded-2xl border border-gray-800 flex justify-between items-center shadow-lg">
                  <div>
                    <h3 className="text-white font-black uppercase tracking-wider">{enr.courseId.replace('-', ' ')}</h3>
                    <p className="text-xs text-gray-500 mt-1">Submitted: {new Date(enr.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                    enr.status === 'PENDING' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'
                  }`}>
                    {enr.status}
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-[#131620] border border-gray-800 rounded-2xl p-6 min-h-[250px] flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
                  <span className="text-gray-500">∅</span>
                </div>
                <h3 className="text-white font-bold mb-2">No Active Missions</h3>
                <p className="text-sm text-gray-500 max-w-sm">You are not currently enrolled in any physical engineering courses.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}