'use client';
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible';
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
import { cn } from '#/lib/utils';
import {
  ChevronRight,
  DraftingCompass,
} from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (

    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="p-2 flex items-center gap-2">
          {!isCollapsed ? <Logo width={70} height={70} /> : <DraftingCompass className="size-4" />}
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
                              isActive={pathname === item.url}
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
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
