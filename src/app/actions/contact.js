'use server'

import prisma from '@/utils/prisma'
import { Resend } from 'resend'

// Initialize the Email API
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactLead(formData) {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const type = formData.get('type')
  const message = formData.get('message')

  if (!firstName || !lastName || !email || !type || !message) {
    return { error: "All fields are required to transmit." }
  }

  try {
    // 1. Write to the immutable ledger (Postgres)
    await prisma.contactLead.create({
      data: { firstName, lastName, email, type, message }
    })

    // 2. Fire the Tactical Alert (Email)
    const { error: emailError } = await resend.emails.send({
      from: 'Arbotrix System <onboarding@resend.dev>', // Update this once you verify your domain
      to: process.env.ADMIN_CONTACT_EMAIL,
      subject: `[NEW LEAD] ${type.replace('_', ' ')} - ${firstName} ${lastName}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${type}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    if (emailError) {
      console.error("Email dispatch failed:", emailError)
      // We still return success to the user because the DB write succeeded.
      // We don't want them thinking their message was lost.
    }

    return { success: true }
    
  } catch (error) {
    console.error("Database error capturing lead:", error)
    return { error: "Transmission failed. The network might be congested." }
  }
}