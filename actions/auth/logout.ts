'use server';
import { createClient } from '#/db/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function logOutFn(): Promise<void> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect('/auth');
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during logout');
  }
}
