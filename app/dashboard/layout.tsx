import type { ReactNode } from 'react';

import { AppSidebar } from '#/components/layout/dashboard/app-sidebar';
import { SiteHeader } from '#/components/layout/dashboard/site-header';
import { SidebarInset, SidebarProvider } from '#/components/ui/sidebar';

type LayoutProps = {
  readonly children: ReactNode;
};

export const dynamic = 'force-dynamic';

export default async function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex-1 p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
