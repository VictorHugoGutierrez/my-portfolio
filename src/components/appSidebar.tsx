"use client";

import * as React from "react";
import { Brain, User, MessageCircleMore, NotebookPen } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./navMain";
import { NavTitle } from "./navTitle";
import ModeToggle from "./themeButton";
import LanguageBtn from "./languageBtn";

const data = {
  title: {
    name: "Victor Hugo Gutierrez",
  },
  navMainPortuguese: [
    {
      title: "Sobre",
      url: "about",
      icon: User,
      isActive: true,
    },
    {
      title: "Conhecimentos",
      url: "knowledge",
      icon: Brain,
      isActive: true,
    },
    {
      title: "Projetos",
      url: "projects",
      icon: NotebookPen,
      isActive: true,
      items: [
        {
          title: "API Alô Doctor",
          openNewPage: true,
          url: "https://github.com/VictorHugoGutierrez/api-alodoctor",
          id: "projects",
        },
        {
          title: "Web Alô Doctor",
          openNewPage: true,
          url: "https://github.com/VictorHugoGutierrez/web-alodoctor",
          id: "projects",
        },
        {
          title: "API de Pedidos",
          openNewPage: true,
          url: "https://github.com/VictorHugoGutierrez/Pedidos-API",
          id: "projects",
        },
      ],
    },
    {
      title: "Contato",
      url: "contact",
      icon: MessageCircleMore,
      isActive: true,
      items: [
        {
          title: "Email",
          url: "mailto:hugovictorgutierrez@gmail.com",
          openNewPage: true,
          id: "contact",
        },
        {
          title: "Telefone",
          url: "https://api.whatsapp.com/send?phone=5519992168212",
          openNewPage: true,
          id: "contact",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/victor-hugo-gutierrez?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSn37BDeDSPqmibzV%2BW5kjg%3D%3D",
          openNewPage: true,
          id: "contact",
        },
        {
          title: "GitHub",
          url: "https://github.com/VictorHugoGutierrez",
          openNewPage: true,
          id: "contact",
        },
      ],
    },
  ],
  navMainEnglish: [
    {
      title: "About",
      url: "about",
      icon: User,
      isActive: true,
    },
    {
      title: "Knowledge",
      url: "knowledge",
      icon: Brain,
      isActive: true,
    },
    {
      title: "Projects",
      url: "projects",
      icon: NotebookPen,
      isActive: true,
      items: [
        {
          title: "API Alô Doctor",
          openNewPage: true,
          url: "https://github.com/VictorHugoGutierrez/api-alodoctor",
          id: "projects",
        },
        {
          title: "Web Alô Doctor",
          openNewPage: true,
          url: "https://github.com/VictorHugoGutierrez/web-alodoctor",
          id: "projects",
        },
        {
          title: "API de Pedidos",
          openNewPage: true,
          url: "https://github.com/VictorHugoGutierrez/Pedidos-API",
          id: "projects",
        },
      ],
    },
    {
      title: "Contact",
      url: "contact",
      icon: MessageCircleMore,
      isActive: true,
      items: [
        {
          title: "E-mail",
          url: "mailto:hugovictorgutierrez@gmail.com",
          openNewPage: true,
          id: "contact",
        },
        {
          title: "Phone",
          url: "https://api.whatsapp.com/send?phone=5519992168212",
          openNewPage: true,
          id: "contact",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/victor-hugo-gutierrez?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSn37BDeDSPqmibzV%2BW5kjg%3D%3D",
          openNewPage: true,
          id: "contact",
        },
        {
          title: "GitHub",
          url: "https://github.com/VictorHugoGutierrez",
          openNewPage: true,
          id: "contact",
        },
      ],
    },
  ],
};

interface AppSidebarProps {
  language: string;
  onClick?: () => void;
}

export function AppSidebar({
  language,
  onClick,
  ...props
}: React.ComponentProps<typeof Sidebar> & AppSidebarProps) {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavTitle title={data.title} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={
            language === "Portuguese"
              ? data.navMainPortuguese
              : data.navMainEnglish
          }
        />
      </SidebarContent>
      <SidebarFooter>
        <div
          className={`transition-all duration-300 ${
            state === "expanded"
              ? "flex flex-row gap-x-1"
              : "flex flex-col gap-y-1"
          }`}
        >
          <ModeToggle language={language} />
          <LanguageBtn language={language} onClick={onClick} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
