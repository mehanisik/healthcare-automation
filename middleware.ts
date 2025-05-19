import type { NextRequest } from 'next/server';
import { updateSession } from './db/db-middleware';

/**
 * Handles incoming requests to dashboard routes by updating the user session.
 *
 * Delegates session management to the {@link updateSession} function for all requests matching the `/dashboard/:path*` pattern.
 *
 * @param request - The incoming Next.js request object.
 * @returns The response from {@link updateSession}, which may modify the session or redirect the user.
 */
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
