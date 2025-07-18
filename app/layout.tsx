import { cn } from "@/lib/utils"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from "@/components/ui/sidebar" // Import SidebarProvider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infrastructure Portal",
  description: "Internal Developer Platform for Azure Provisioning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased overflow-auto app-container", inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            {" "}
            {/* Wrap AppSidebar and main content with SidebarProvider */}
            <div className="flex min-h-screen">
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 overflow-auto">
                  {" "}
                  {/* Ensure main content can scroll */}
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
