<script setup lang="ts">
import SidebarProvider from "./ui/sidebar/SidebarProvider.vue";
import SidebarTrigger from "./ui/sidebar/SidebarTrigger.vue";

import {
  Home,
  HeartHandshake,
  ShieldQuestionMark,
  Book,
  Users,
  LogIn
} from "lucide-vue-next"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Página Inicial",
    url: "#",
    icon: Home,
  },
  {
    title: "Currículo",
    url: "",
    icon: Book,
  },
  {
    title: "Recrutamento",
    url: "/recruitment",
    icon: HeartHandshake,
  },
  {
    title: "Equipa",
    url: "",
    icon: Users,
  },
  {
    title: "FAQs",
    url: "/faqs",
    icon: ShieldQuestionMark,
  },
  {
    title: "Login",
    url: "#",
    icon: LogIn
  }
];
</script>

<template>
  <SidebarProvider :defaultOpen="false">
  <SidebarTrigger />
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CoderDojo Braga</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem v-for="item in items" :key="item.title">
                  <SidebarMenuButton asChild>
                      <a :href="item.url">
                        <component :is="item.icon" />
                        <span>{{item.title}}</span>
                      </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>
