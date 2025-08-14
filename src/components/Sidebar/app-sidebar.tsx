// /components/Menu/app-sidebar.tsx

"use client";

import * as React from "react";
import { Home, Users, Settings, User, LogIn, UserPlus, type LucideIcon } from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Base data; itens serão filtrados por permissão
const data = {
  // user: {
  //   name: "Projeto Mais Vida",
  //   email: "site@projetomaisvida.com.br",
  //   avatar:
  //     "https://images.prismic.io/projetomaisvida/Z5JPe5bqstJ99yTn_icon.png?auto=format,compress",
  // },
  navMain: [
    {
      title: "Navegação",
      url: "#",
      icon: Home,
      isActive: false,
      items: [
        {
          title: "Página Inicial",
          url: "/",
        },
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Autenticação",
      url: "#",
      icon: User,
      items: [
        {
          title: "Login",
          url: "/login",
        },
        {
          title: "Cadastro",
          url: "/cadastro",
        },
      ],
    },
    
  ],
  
};

type AppRole = "USER" | "STAFF" | "COORD" | "CONCELHO" | "ADMIN";

function can(role: AppRole, required: AppRole): boolean {
  const order: AppRole[] = ["USER", "STAFF", "COORD", "CONCELHO", "ADMIN"];
  return order.indexOf(role) >= order.indexOf(required);
}

export function AppSidebar({ role, ...props }: React.ComponentProps<typeof Sidebar> & { role: AppRole }) {

  const adminOnly = {
    title: "Administração",
    url: "/admin",
    icon: Settings,
    items: [
      { title: "Dashboard Admin", url: "/admin" },
      { title: "Gerenciar Usuários", url: "/admin/usuarios" },
    ],
  };
  

  type NavItem = { title: string; url: string; icon?: LucideIcon; items?: { title: string; url: string }[] };
  const navMain: NavItem[] = [
    ...data.navMain,
    ...(can(role, "ADMIN") ? [adminOnly] : []),
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
