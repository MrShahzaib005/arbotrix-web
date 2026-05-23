"use server";
import { createClient } from "@/utils/supabase/server";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

// ==========================================
// ACTION 1: APPROVE COURSE ENROLLMENT
// ==========================================
export async function approveEnrollment(enrollmentId) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // 1. Double-check Admin Clearance
    const isAdmin = await prisma.adminDirectory.findUnique({ where: { email: user?.email } });
    if (!isAdmin) throw new Error("Unauthorized: Admin access required.");

    // 2. Perform the update
    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: { status: 'APPROVED', verifiedAt: new Date() }
    });

    // 3. Instantly refresh the admin dashboard UI
    revalidatePath("/admin");
    return { success: true };
    
  } catch (error) {
    console.error("Approval error:", error);
    return { error: error.message || "Failed to approve enrollment." };
  }
}

// ==========================================
// ACTION 2: GRADUATE STUDENT (UPGRADE CLEARANCE)
// ==========================================
export async function upgradeClearance(userId, newLevel) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // 1. Double-check Admin Clearance (Crucial security step)
    const isAdmin = await prisma.adminDirectory.findUnique({ where: { email: user?.email } });
    if (!isAdmin) throw new Error("Unauthorized: Admin access required.");

    // 2. Perform the clearance upgrade
    await prisma.user.update({
      where: { id: userId },
      data: { clearanceLevel: newLevel } 
    });

    // 3. Instantly refresh the admin dashboard UI
    revalidatePath("/admin");
    return { success: true };

  } catch (error) {
    console.error("Clearance upgrade error:", error);
    return { error: error.message || "Failed to upgrade clearance." };
  }
}