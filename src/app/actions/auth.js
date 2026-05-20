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
  
  // Extract the hidden redirect URL
  const redirectTo = formData.get('redirectTo') || '/dashboard'

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
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
      console.error("Database sync failed:", dbError)
      return { error: "Failed to create user profile in database." }
    }
  }

  // Redirect to the targeted route instead of hardcoding /dashboard
  redirect(redirectTo)
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}