"use server";
import { createClient } from '@/utils/supabase/server';
import prisma from '@/utils/prisma';
import { redirect } from 'next/navigation';

export async function submitEnrollment(formData) {
  const supabase = await createClient();

  // 1. Verify Authentication
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: "Unauthorized. Please log in." };
  }

  // 2. Sync User (Safety net in case auth profile didn't sync)
  await prisma.user.upsert({
    where: { id: user.id },
    update: {}, 
    create: {
      id: user.id,
      email: user.email,
    },
  });

  // 3. Extract the ID and verify the course
  const courseId = formData.get('courseId');
  const dbCourse = await prisma.course.findUnique({
    where: { id: courseId } // FIXED: Searching by the actual ID, not the slug
  });

  if (!dbCourse) {
    return { error: "Course not found." };
  }

  // 4. Extract Form Data
  const whatsappNumber = formData.get('whatsappNumber');
  const paymentMethod = formData.get('paymentMethod');
  const senderAccountName = formData.get('senderAccountName');
  const transactionId = formData.get('transactionId');
  const file = formData.get('screenshot');

  if (!file || file.size === 0) {
    return { error: "Payment screenshot is required." };
  }

  try {
    // 5. Upload Screenshot
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}-${dbCourse.id}-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('payment-screenshots')
      .upload(fileName, file);

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return { error: "Failed to upload screenshot. Please try again." };
    }

    const { data: { publicUrl } } = supabase.storage
      .from('payment-screenshots')
      .getPublicUrl(fileName);

    // 6. Create Enrollment
    await prisma.enrollment.create({
      data: {
        userId: user.id,
        courseId: dbCourse.id, 
        whatsappNumber,
        paymentMethod,
        senderAccountName,
        transactionId,
        screenshotUrl: publicUrl,
        status: "PENDING"
      }
    });

  } catch (error) {
    console.error("Database error:", error);
    if (error.code === 'P2002') {
       return { error: "You have already submitted an enrollment for this course." };
    }
    return { error: "An unexpected error occurred." };
  }

  redirect('/dashboard');
}