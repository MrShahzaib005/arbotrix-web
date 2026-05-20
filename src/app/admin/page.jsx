import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import prisma from '@/utils/prisma'
import AdminClient from './AdminClient'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  // 1. Verify Admin Clearance
  const isAdmin = await prisma.adminDirectory.findUnique({
    where: { email: user.email }
  })

  if (!isAdmin) {
    console.warn(`[SECURITY] Unauthorized admin access attempt: ${user.email}`)
    redirect('/') 
  }

  // 2. Fetch REAL Data from your database
  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: 'desc' }
  })

  const enrollments = await prisma.enrollment.findMany({
    include: { user: true }, // Include student details
    orderBy: { createdAt: 'desc' }
  })

  // 3. Format and Combine Data
  const rawData = [
    ...leads.map(lead => ({ ...lead, dataType: 'LEAD' })), 
    ...enrollments.map(enr => ({ 
      ...enr, 
      dataType: 'ENROLLMENT',
      // Map these fields to match your AdminClient.jsx expectations
      senderAccountName: enr.senderAccountName,
      status: enr.status 
    }))
  ]

  return <AdminClient initialData={rawData} />
}