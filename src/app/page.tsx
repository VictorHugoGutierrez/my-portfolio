"use client";

import About from "@/components/about";
import { AppSidebar } from "@/components/appSidebar";
import Contact from "@/components/contact";
import Knowledge from "@/components/knowledge";
import Projects from "@/components/projects";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Welcome from "@/components/welcome";
import useEnOrPt from "@/hooks/useEnOrPt";

export default function Page() {
  const { showEnglish, showPortuguese, portugueseVisible } = useEnOrPt();

  return (
    <SidebarProvider>
      <AppSidebar
        language={portugueseVisible ? "Portuguese" : "English"}
        onClick={portugueseVisible ? showEnglish : showPortuguese}
      />
      <SidebarInset>
        <header className="flex md:fixed h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>
                    {portugueseVisible ? "Portfólio" : "Portfolio"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {portugueseVisible ? "Principal" : "Main"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Welcome
          language={portugueseVisible ? "Portuguese" : "English"}
          textTitle={
            portugueseVisible
              ? "OLÁ, EU SOU O VICTOR\u00A0HUGO"
              : "HI, I'M VICTOR\u00A0HUGO"
          }
          textSubTitle={
            portugueseVisible ? "Desenvolvedor .NET" : ".NET Developer"
          }
        />
        <About language={portugueseVisible ? "Portuguese" : "English"} />
        <Knowledge language={portugueseVisible ? "Portuguese" : "English"} />
        <Projects language={portugueseVisible ? "Portuguese" : "English"} />
        <Contact language={portugueseVisible ? "Portuguese" : "English"} />
      </SidebarInset>
    </SidebarProvider>
  );
}
