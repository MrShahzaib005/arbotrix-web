import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import prisma from '@/utils/prisma'
import AdminClient from './AdminClient'
import { Navbar } from '@/components/layout/Navbar' // 1. Added Navbar

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  // Verify Admin Clearance
  const isAdmin = await prisma.adminDirectory.findUnique({
    where: { email: user.email }
  })

  if (!isAdmin) {
    console.warn(`[SECURITY] Unauthorized admin access attempt: ${user.email}`)
    redirect('/') 
  }

  // Fetch Contact Leads
  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // FIX 1: Fetch Enrollments AND include BOTH the User and the Course
  const enrollments = await prisma.enrollment.findMany({
    include: { 
      user: true,
      course: true // This fixes the UUID trap!
    }, 
    orderBy: { createdAt: 'desc' }
  })

  // FIX 2: Fetch Active Students for the Promotion/Graduation tab
  const students = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  })

  // Format and Combine Data for the Client
  const rawData = [
    ...leads.map(lead => ({ ...lead, dataType: 'LEAD' })), 
    ...enrollments.map(enr => ({ 
      ...enr, 
      dataType: 'ENROLLMENT',
      // Map these clean strings so your AdminClient doesn't have to dig for them
      courseTitle: enr.course.title, 
      realUserName: enr.user.firstName ? `${enr.user.firstName} ${enr.user.lastName || ''}` : enr.user.email
    }))
  ]

  return (
    <main className="min-h-screen bg-[#0B0D14] pb-24">
      <Navbar />
      
      <div className="pt-28">
        {/* Pass rawData and the new students array down to your interactive client */}
        <AdminClient initialData={rawData} students={students} />
      </div>
    </main>
  )
}