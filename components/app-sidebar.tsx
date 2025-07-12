"use client"

import { Cloud, Database, Home, Shield, Zap, BarChart3, GitBranch, Server, Activity, X } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import Link from "next/link"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Provision Services",
    url: "/provision",
    icon: Cloud,
  },
  {
    title: "Pipeline Status",
    url: "/pipelines",
    icon: GitBranch,
  },
  {
    title: "Infrastructure",
    url: "/infrastructure",
    icon: Server,
  },
  {
    title: "Monitoring",
    url: "/monitoring",
    icon: Activity,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
]

const serviceCategories = [
  {
    title: "Database Services",
    icon: Database,
    items: ["PostgreSQL", "Cosmos DB", "MySQL", "SQL MI", "MongoDB"],
  },
  {
    title: "Security Services",
    icon: Shield,
    items: ["Key Vault", "App Gateway", "Firewall"],
  },
  {
    title: "Compute Services",
    icon: Zap,
    items: ["Function App", "App Service", "AKS", "VM"],
  },
]

export function AppSidebar() {
  const { open, setOpen } = useSidebar()

  return (
    <Sidebar
      className="border-r border-starbucks-green/20 bg-gradient-to-b from-starbucks-dark-green to-starbucks-green"
      collapsible="icon"
    >
      <SidebarHeader className="p-4 relative border-b border-starbucks-green/30">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-starbucks-gold flex items-center justify-center">
            <Cloud className="h-5 w-5 text-starbucks-dark-green" />
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white">Starbucks IDP</span>
              <span className="text-xs text-starbucks-cream/80">Infrastructure Portal</span>
            </div>
          )}
        </div>

        {/* Close Button */}
        {open && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 h-6 w-6 text-white hover:bg-starbucks-green/30"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </SidebarHeader>

      <SidebarContent className="text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-starbucks-cream/90 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="text-white hover:bg-starbucks-green/30 hover:text-starbucks-gold"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {open && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-starbucks-cream/90 font-semibold">Quick Access</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {serviceCategories.map((category) => (
                  <SidebarMenuItem key={category.title}>
                    <SidebarMenuButton
                      tooltip={category.title}
                      className="text-white hover:bg-starbucks-green/30 hover:text-starbucks-gold"
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-starbucks-green/30">
        {open && <div className="text-xs text-starbucks-cream/70">Starbucks Infrastructure Portal v2.1</div>}
      </SidebarFooter>
    </Sidebar>
  )
}
