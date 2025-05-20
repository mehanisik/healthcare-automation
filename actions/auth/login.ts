'use server';
import { createClient } from '#/db/supabase/server';
import { loginSchema } from '#/schema/login-schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginFn(formData: FormData): Promise<void> {
  try {
    const validatedFields = loginSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      throw new Error(
        Object.values(validatedFields.error.flatten().fieldErrors)
          .flat()
          .join(', '),
      );
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword(validatedFields.data);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect('/dashboard');
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during login');
  }
}
