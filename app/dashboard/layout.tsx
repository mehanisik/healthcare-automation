import type { ReactNode } from 'react';

import { AppSidebar } from '#/components/layout/dashboard/app-sidebar';
import { SiteHeader } from '#/components/layout/dashboard/site-header';
import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar';
import { cookies } from 'next/headers';

type LayoutProps = {
  readonly children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex-1 p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
