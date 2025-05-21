'use client';
import { logOutFn } from '#/actions/logout';
import { Button } from '#/components/ui/button';
import LinkWithLoader from '#/components/ui/link-with-loader';
import { Logo } from '#/components/ui/logo';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '#/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '#/components/ui/tooltip';
import { sidebarItems } from '#/constants/sidebar';
import { cn } from '#/lib/utils';
import {
  Loader2,
  LogOut,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-2">
        <Logo type={isCollapsed ? 'icon' : 'text'} width={isCollapsed ? 32 : 100} height={isCollapsed ? 32 : 30} />
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        {sidebarItems.map(group => (
          <SidebarGroup key={group.id} className="mb-6 last:mb-0">
            {group.label && !isCollapsed && (
              <SidebarGroupLabel className="text-sm font-medium text-muted-foreground mb-2">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarMenu className="space-y-1">
              {group.items.map(item =>
                (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      className="px-3 py-2 rounded-md transition-colors duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <LinkWithLoader
                        className={cn(
                          'w-full flex items-center transition-all duration-200 relative',
                          isCollapsed ? 'justify-center' : 'justify-start gap-2',
                        )}
                        href={item.url}
                        loader={<Loader2 className="size-4 animate-spin absolute right-2" />}
                      >
                        {item.icon && (
                          <item.icon className="h-4 w-4" />
                        )}
                        {!isCollapsed && (
                          <span className="truncate">{item.title}</span>
                        )}
                      </LinkWithLoader>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-2 border-t border-border">
        <div className={cn('w-full p-2 rounded-lg flex items-center justify-between transition-all duration-200', isCollapsed && ' flex-col-reverse')}>
          <p className={cn('text-sm', isCollapsed && 'hidden')}>
            john.doe@example.com
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={logOutFn}>
                  <LogOut className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Log out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
