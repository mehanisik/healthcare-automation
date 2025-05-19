'use client';
import { ThemeToggle } from '#/components/providers/theme-toggle';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '#/components/ui/breadcrumb';
import { Separator } from '#/components/ui/separator';
import { SidebarTrigger } from '#/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import * as React from 'react';

/**
 * Renders the site header with a sidebar trigger, breadcrumb navigation, and theme toggle.
 *
 * The breadcrumb trail is dynamically generated from the current URL path, with each segment displayed as a navigable link.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const breadcrumbs = pathname.split('/').slice(1).map((crumb, index, array) => ({
    label: crumb,
    href: `/${array.slice(0, index + 1).join('/')}`,
  }));

  return (
    <header className="flex h-12 shrink-0 items-center gap-2 px-4 lg:px-6 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-1 ">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem key={crumb.href}>
                <BreadcrumbLink href={crumb.href}>
                  {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                </BreadcrumbLink>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ThemeToggle />
    </header>
  );
}
