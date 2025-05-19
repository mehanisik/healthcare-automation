'use client';
import type { User } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu';
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from '#/components/ui/sidebar';
import { sidebarItems } from '#/constants/sidebar';

import { supabaseClient } from '#/db/supabase/client';
import { cn } from '#/lib/utils';
import {
  ChevronRight,
  LogOut,
  UserIcon,

} from 'lucide-react';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import * as React from 'react';

export function AppSidebar({ user }: { user: User }) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    redirect('/auth');
  };
  return (

    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="p-2 flex items-center gap-2">
          {!isCollapsed
            ? (
                <Logo type="text" width={100} height={30} />
              )
            : (
                <Logo type="icon" width={32} height={32} />
              )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {sidebarItems.map(group => (
          <SidebarGroup key={group.id} className="mb-6 last:mb-0">
            {group.label && !isCollapsed && (
              <SidebarGroupLabel className="text-sm font-medium text-muted-foreground mb-2">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarMenu className="space-y-1">
              {group.items.map(item =>
                'subItems' in item && Array.isArray(item.subItems) && item.subItems.length > 0
                  ? (
                      <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={pathname.startsWith(item.url)}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              tooltip={item.title}
                              isActive={pathname.startsWith(item.url)}
                              className={cn(
                                'w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200',
                                'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                                isCollapsed ? 'justify-center' : 'justify-between',
                              )}
                            >
                              {item.icon && (
                                <item.icon className={cn(
                                  'h-4 w-4 shrink-0',
                                  isCollapsed ? 'mx-auto' : 'mr-2',
                                )}
                                />
                              )}
                              {!isCollapsed && <span className="truncate">{item.title}</span>}
                              {!isCollapsed && (
                                <ChevronRight className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              )}
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="mt-1 space-y-1">
                              {Array.isArray(item.subItems) && item.subItems.map(subItem => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === subItem.url}
                                    className={cn(
                                      'w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200',
                                      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                                      isCollapsed ? 'justify-center' : 'justify-start',
                                    )}
                                  >
                                    <Link href={subItem.url} className="flex items-center gap-2 w-full">
                                      {subItem.icon && (
                                        <subItem.icon className={cn(
                                          'h-4 w-4 shrink-0',
                                          isCollapsed ? 'mx-auto' : 'mr-2',
                                        )}
                                        />
                                      )}
                                      {!isCollapsed && <span className="truncate">{subItem.title}</span>}
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    )
                  : (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          isActive={pathname === item.url}
                          className={cn(
                            'w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200',
                            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                            isCollapsed ? 'justify-center' : 'justify-start',
                          )}
                        >
                          <Link href={item.url} className="flex items-center gap-2 w-full">
                            {item.icon && (
                              <item.icon className={cn(
                                'h-4 w-4 shrink-0',
                                isCollapsed ? 'mx-auto' : 'mr-2',
                              )}
                              />
                            )}
                            {!isCollapsed && <span className="truncate">{item.title}</span>}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ),
              )}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-2 border-t border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-border">
              <AvatarImage src={user.user_metadata?.avatar_url} />
              <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
                {user.user_metadata?.name
                  ? user.user_metadata.name.split(' ').map((n: string) => n[0]).join('')
                  : user.email?.slice(0, 2).toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-popover text-popover-foreground border-border"
            sideOffset={8}
          >
            <DropdownMenuLabel className="text-muted-foreground font-normal">
              {user.user_metadata?.name || user.email || 'User'}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem className="focus:bg-accent focus:text-accent-foreground cursor-pointer">
              <UserIcon className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
