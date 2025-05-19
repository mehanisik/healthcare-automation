import type { ReactNode } from 'react';

import { AppSidebar } from '#/components/layout/dashboard/app-sidebar';
import { SiteHeader } from '#/components/layout/dashboard/site-header';
import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar';
import { createClient } from '#/db/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type LayoutProps = {
  readonly children: ReactNode;
};

/**
 * Renders the authenticated dashboard layout with a persistent sidebar and header.
 *
 * Redirects unauthenticated users to the authentication page. The sidebar's initial open state is determined by a cookie value.
 *
 * @param children - The main content to display within the dashboard layout.
 *
 * @returns The dashboard layout JSX for authenticated users.
 */
export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/auth');
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar user={user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex-1 p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
