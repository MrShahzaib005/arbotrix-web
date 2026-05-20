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

  // 2. Sync User
  await prisma.user.upsert({
    where: { id: user.id },
    update: {}, 
    create: {
      id: user.id,
      email: user.email,
    },
  });

  // 3. Resolve the Course UUID from the slug
  const courseSlug = formData.get('courseId');
  const dbCourse = await prisma.course.findUnique({
    where: { slug: courseSlug }
  });

  if (!dbCourse) {
    return { error: "Course not found." };
  }

  // 4. Extract Data
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
      return { error: "Failed to upload screenshot." };
    }

    const { data: { publicUrl } } = supabase.storage
      .from('payment-screenshots')
      .getPublicUrl(fileName);

    // 6. Create Enrollment using the actual UUID
    await prisma.enrollment.create({
      data: {
        userId: user.id,
        courseId: dbCourse.id, // Using the verified UUID
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