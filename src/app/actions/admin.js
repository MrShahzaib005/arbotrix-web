"use server";
import { createClient } from "@/utils/supabase/server";
import prisma from "@/utils/prisma";

export async function approveEnrollment(enrollmentId) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 1. Double-check Admin Clearance
  const isAdmin = await prisma.adminDirectory.findUnique({ where: { email: user.email } });
  if (!isAdmin) throw new Error("Unauthorized");

  // 2. Perform the update
  return await prisma.enrollment.update({
    where: { id: enrollmentId },
    data: { status: 'APPROVED', verifiedAt: new Date() }
  });
}