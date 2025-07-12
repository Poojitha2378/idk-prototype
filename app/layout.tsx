import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar" // Import SidebarProvider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infrastructure Portal",
  description: "Internal Developer Platform for Azure Infrastructure Provisioning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="app-container">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            {" "}
            {/* Wrap AppSidebar and main content with SidebarProvider */}
            <AppSidebar />
            <main className="flex flex-1 flex-col overflow-x-auto">
              {" "}
              {/* Added overflow-x-auto for horizontal scroll */}
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
