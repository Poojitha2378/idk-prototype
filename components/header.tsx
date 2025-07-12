"use client"

import { Bell, Search, Menu, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSidebar } from "@/components/ui/sidebar"

export function Header() {
  const { open, setOpen } = useSidebar()

  return (
    <header className="flex h-20 items-center gap-4 border-b border-starbucks-green/20 bg-gradient-to-r from-starbucks-cream to-white px-8 shadow-sm">
      {!open && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          className="h-10 w-10 text-starbucks-green hover:bg-starbucks-green/10"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      <div className="flex-1 flex items-center gap-6">
        <div className="relative max-w-lg flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-starbucks-green/60" />
          <Input
            placeholder="Search services, pipelines, or resources..."
            className="pl-12 h-12 text-base border-starbucks-green/30 focus:border-starbucks-green"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-12 w-12 text-starbucks-green hover:bg-starbucks-green/10">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-12 px-4 gap-3 text-starbucks-green hover:bg-starbucks-green/10">
              <div className="h-8 w-8 rounded-full bg-starbucks-green flex items-center justify-center">
                <Coffee className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-starbucks-green/70">Platform Admin</div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>John Doe</DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              john.doe@starbucks.com
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Team Management</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
