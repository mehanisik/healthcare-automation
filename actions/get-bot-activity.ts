'use server';
import { botActivityData } from '#/constants/analytics';
import { createClient } from '#/lib/supabase/server';

export async function getBotActivityFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('bot_activity').select('*');

    return data || botActivityData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during getBotActivityFn');
  }
}
