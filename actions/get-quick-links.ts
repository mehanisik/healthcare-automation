'use server';

import { quickLinks } from '#/constants/overview';
import { createClient } from '#/lib/supabase/server';

export async function getQuickLinksFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('quick_links').select('*');

    return data || quickLinks;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during get quick links');
  }
}
