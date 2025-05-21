'use server';

import { revalidatePath } from 'next/cache';
import { toast } from 'sonner';

export async function sendContactMessageFn(formData: FormData) {
  const _rawFormData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    inquiry: formData.get('inquiry'),
    message: formData.get('message'),
  };

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(`Contact form submitted successfully${JSON.stringify(_rawFormData)}`); // TODO: implement email sending service
    revalidatePath('/');
  } catch (error) {
    throw new Error(`Failed to submit contact form ${error}`);
  }
}
