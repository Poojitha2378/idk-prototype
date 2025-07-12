"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Maximize2, Minimize2, Presentation, Eye, EyeOff, Zap, ChevronRight } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"

export function DemoControls() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const { open, setOpen } = useSidebar()

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.log("Fullscreen not supported")
    }
  }

  const toggleDemoMode = () => {
    setIsDemoMode(!isDemoMode)
    if (!isDemoMode) {
      // Auto-collapse sidebar in demo mode
      setOpen(false)
    }
  }

  const toggleSidebar = () => {
    setOpen(!open)
  }

  if (isDemoMode) {
    return (
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Card className="bg-black/80 text-white border-gray-600">
          <CardContent className="p-3 flex items-center gap-3">
            <Badge variant="secondary" className="bg-green-600 text-white">
              DEMO MODE
            </Badge>
            <Button variant="ghost" size="sm" onClick={toggleSidebar} className="text-white hover:bg-white/20 gap-2">
              {open ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {open ? "Hide Nav" : "Show Nav"}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="text-white hover:bg-white/20 gap-2">
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              {isFullscreen ? "Exit" : "Fullscreen"}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleDemoMode} className="text-white hover:bg-white/20">
              Exit Demo
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Presentation className="h-5 w-5" />
            <div className="text-sm font-medium">Ready for Demo?</div>
            <Button onClick={toggleDemoMode} size="sm" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
              <Zap className="h-4 w-4" />
              Start Demo Mode
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
