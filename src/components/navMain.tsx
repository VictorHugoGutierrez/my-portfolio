"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      openNewPage?: boolean;
      id: string;
    }[];
  }[];
}) {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Portfólio</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <a
                onClick={() => scrollToElement(item.url)}
                className="font-medium"
                role="button"
              >
                {item.icon && <item.icon />}
                {item.title}
              </a>
            </SidebarMenuButton>
            {item.items?.length ? (
              <SidebarMenuSub>
                {item.items.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild isActive={item.isActive}>
                      {item.openNewPage ? (
                        <a
                          href={item.url}
                          target="_blank"
                          onClick={() => scrollToElement(item.id)}
                        >
                          {item.title}
                        </a>
                      ) : (
                        <a
                          href={item.url}
                          onClick={() => scrollToElement(item.id)}
                        >
                          {item.title}
                        </a>
                      )}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
