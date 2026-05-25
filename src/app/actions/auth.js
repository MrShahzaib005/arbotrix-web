// 'use server'

// import { createClient } from '@/utils/supabase/server'
// import prisma from '@/utils/prisma'
// import { redirect } from 'next/navigation'

// export async function login(formData) {
//   const supabase = await createClient()
//   const email = formData.get('email')
//   const password = formData.get('password')

//   // Extract the hidden redirect URL
//   const redirectTo = formData.get('redirectTo') || '/dashboard'

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   })

//   if (error) {
//     return { error: error.message }
//   }

//   // Redirect to the targeted route instead of hardcoding /dashboard
//   redirect(redirectTo)
// }

// export async function signup(formData) {
//   const supabase = await createClient()

//   const email = formData.get('email')
//   const password = formData.get('password')
//   const firstName = formData.get('firstName')
//   const lastName = formData.get('lastName')

//   // Extract the hidden redirect URL
//   const redirectTo = formData.get('redirectTo') || '/dashboard'

//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   })

//   if (error) {
//     return { error: error.message }
//   }

//   if (data.user) {
//     try {
//       await prisma.user.create({
//         data: {
//           id: data.user.id, 
//           email: data.user.email,
//           firstName: firstName,
//           lastName: lastName,
//         }
//       })
//     } catch (dbError) {
//       console.error("Database sync failed:", dbError)
//       return { error: "Failed to create user profile in database." }
//     }
//   }

//   // Redirect to the targeted route instead of hardcoding /dashboard
//   redirect(redirectTo)
// }

// export async function logout() {
//   const supabase = await createClient()
//   await supabase.auth.signOut()
//   redirect('/')
// }

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
  
  // THE MISSING LINK: You must extract the redirectTo value from the form
  const redirectTo = formData.get('redirectTo') || '/dashboard'

  // THE PASSWORD VAULT: Strict Regex Constraint
  // Reverted to {8,} to match your error message and enforce security
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

  if (!passwordRegex.test(password)) {
    return {
      error: "Password must be at least 8 characters long, and include an uppercase letter, a number, and a special character."
    }
  }

  // --- THE FIX 1: INJECTING THE METADATA OPTIONS ---
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      }
    }
  })

  if (error) {
    return { error: error.message }
  }

  if (data.user) {
    try {
      await prisma.user.create({
        data: {
          id: data.user.id,
          email: data.user.email,
          firstName: firstName,
          lastName: lastName,
        }
      })
    } catch (dbError) {
      // --- THE FIX 2: LOUD CRASH DETECTION ---
      console.error("🚨 PRISMA CRASH DETECTED 🚨:", dbError)
      return { error: "CRITICAL: Database sync failed. Check your VS Code terminal for the exact Prisma error." }
    }
  }

  // Return the payload. The frontend will catch this and route them to /verify
  return { success: true, email: email, redirectTo: redirectTo }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

export async function verifyOTP(formData) {
  const supabase = await createClient()

  const email = formData.get('email')
  const code = formData.get('code')
  const redirectTo = formData.get('redirectTo') || '/dashboard'

  // Supabase takes the email and the 6-digit code and verifies them
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token: code,
    type: 'signup' // Tells Supabase this is for a new account
  })

  if (error) {
    return { error: "Invalid or expired verification code." }
  }

  // If successful, log them in and redirect them exactly where they were
  redirect(redirectTo)
}