import { env } from '#/env';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/**
 * Creates and returns a Supabase server client configured for SSR in a Next.js environment, with integrated cookie management for authentication and session handling.
 *
 * @returns A Supabase server client instance with custom cookie handling.
 *
 * @remark
 * If the cookie setter fails (e.g., when called from a Server Component), errors are silently ignored. This is safe if middleware is used to refresh user sessions.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
