'use server';
import type { Bot } from '#/types/bots';
import { createClient } from '#/lib/supabase/server';

export async function createBotFn(bot: Bot) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('bots').insert(bot).select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during creating a new bot');
  }
}
