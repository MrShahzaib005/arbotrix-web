'use server'

import { createClient } from '@/utils/supabase/server'
import prisma from '@/utils/prisma'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const supabase = await createClient()
  const email = formData.get('email')
  const password = formData.get('password')

  // Extract the hidden redirect URL
  const redirectTo = formData.get('redirectTo') || '/dashboard'

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  // Redirect to the targeted route instead of hardcoding /dashboard
  redirect(redirectTo)
}

export async function signup(formData) {
  const supabase = await createClient()

  const email = formData.get('email')
  const password = formData.get('password')
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const redirectTo = formData.get('redirectTo') || '/dashboard'

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/
  if (!passwordRegex.test(password)) {
    return { error: "Password must be at least 8 characters long, and include an uppercase letter, a number, and a special character." }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      }
    }
  })

  // If Supabase completely rejects the signup (e.g., password too weak, email invalid)
  if (error) {
    return { error: error.message }
  }

  // Notice: The Trap is gone. Prisma is gone. 
  // We just return success and let the frontend push them to the OTP screen.
  return { success: true, email: email, redirectTo: redirectTo }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

// export async function verifyOTP(formData) {
//   const supabase = await createClient()

//   const email = formData.get('email')
//   const code = formData.get('code')
//   const redirectTo = formData.get('redirectTo') || '/dashboard'

//   // 1. Validate the 6-digit code
//   const { data, error } = await supabase.auth.verifyOtp({
//     email,
//     token: code,
//     type: 'signup'
//   })

//   if (error) {
//     return { error: "Invalid or expired verification code." }
//   }

//   // 2. The Database Injection (Post-Verification)
//   if (data.user) {
//     try {
//       // Extract the names we stored during the initial signup
//       const firstName = data.user.user_metadata?.first_name || "Unknown"
//       const lastName = data.user.user_metadata?.last_name || "Unknown"

//       await prisma.user.create({
//         data: {
//           id: data.user.id,
//           email: data.user.email,
//           firstName: firstName,
//           lastName: lastName,
//         }
//       })

//       console.log("✅ PRISMA SYNC SUCCESSFUL AFTER OTP VERIFICATION")

//     } catch (dbError) {
//       // If P2002 triggers, the user verified twice and is already in Prisma. We safely ignore it.
//       if (dbError.code !== 'P2002') {
//         console.error("🚨 PRISMA CRASH DETECTED 🚨:", dbError)
//         return { error: "Secure database sync failed. Contact Admin." }
//       }
//     }
//   }

//   // 3. Open the gates to the dashboard
//   redirect(redirectTo)
// }

export async function verifyOTP(formData) {
  const supabase = await createClient()

  const email = formData.get('email')
  const code = formData.get('code')
  const redirectTo = formData.get('redirectTo') || '/dashboard'

  // 1. Validate the 6-digit code
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token: code,
    type: 'signup'
  })

  if (error) {
    return { error: "Invalid or expired verification code." }
  }

  // 2. The Database Injection (Post-Verification)
  if (data.user) {
    try {
      const firstName = data.user.user_metadata?.first_name || "Unknown"
      const lastName = data.user.user_metadata?.last_name || "Unknown"

      // --- THE VIP CHECK ---
      // Query the AdminDirectory to see if this email is pre-approved
      const adminRecord = await prisma.adminDirectory.findUnique({
        where: { email: data.user.email }
      })

      // If they are in the directory, promote them. Otherwise, standard clearance.
      const assignedRole = adminRecord ? 'ADMIN' : 'STUDENT'

      await prisma.user.create({
        data: {
          id: data.user.id,
          email: data.user.email,
          firstName: firstName,
          lastName: lastName,
          role: assignedRole, // Automatically assign the correct role
        }
      })
      
      console.log(`✅ PRISMA SYNC SUCCESSFUL. ROLE ASSIGNED: ${assignedRole}`)
      
    } catch (dbError) {
      if (dbError.code !== 'P2002') {
        console.error("🚨 PRISMA CRASH DETECTED 🚨:", dbError)
        return { error: "Secure database sync failed. Contact Admin." }
      }
    }
  }

  // 3. Open the gates to the dashboard
  redirect(redirectTo)
}