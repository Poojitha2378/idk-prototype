"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, ExternalLink, Download } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

interface PipelineStage {
  id: string
  name: string
  status: "pending" | "running" | "completed" | "failed"
  progress: number
  duration: string
  logs: string[]
}

interface PipelineIntegrationProps {
  onPrev: () => void
}

export function PipelineIntegration({ onPrev }: PipelineIntegrationProps) {
  const [pipelineStages, setPipelineStages] = useState<PipelineStage[]>([
    {
      id: "build",
      name: "Build",
      status: "pending",
      progress: 0,
      duration: "0s",
      logs: [],
    },
    {
      id: "test",
      name: "Test",
      status: "pending",
      progress: 0,
      duration: "0s",
      logs: [],
    },
    {
      id: "security",
      name: "Security Scan",
      status: "pending",
      progress: 0,
      duration: "0s",
      logs: [],
    },
    {
      id: "deploy",
      name: "Deploy",
      status: "pending",
      progress: 0,
      duration: "0s",
      logs: [],
    },
  ])

  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [pipelineId] = useState("PL-2024-001")

  useEffect(() => {
    // Auto-start the pipeline
    if (!isRunning) {
      setIsRunning(true)
    }
  }, [])

  useEffect(() => {
    if (isRunning && currentStageIndex < pipelineStages.length) {
      const currentStage = pipelineStages[currentStageIndex]

      // Start the current stage
      setPipelineStages((prev) =>
        prev.map((stage, index) =>
          index === currentStageIndex
            ? {
                ...stage,
                status: "running",
                logs: [`Starting ${stage.name} stage...`, `Initializing environment...`],
              }
            : stage,
        ),
      )

      // Simulate stage progress
      const interval = setInterval(() => {
        setPipelineStages((prev) =>
          prev.map((stage, index) => {
            if (index === currentStageIndex) {
              const newProgress = Math.min(stage.progress + 10, 100)
              const newLogs = [...stage.logs]

              // Add realistic log messages
              if (newProgress === 30) {
                newLogs.push(`${stage.name} dependencies resolved`)
              } else if (newProgress === 60) {
                newLogs.push(`${stage.name} execution in progress`)
              } else if (newProgress === 90) {
                newLogs.push(`${stage.name} validation successful`)
              }

              if (newProgress === 100) {
                newLogs.push(`${stage.name} completed successfully`)
                return {
                  ...stage,
                  status: "completed",
                  progress: 100,
                  duration: `${Math.floor(Math.random() * 60) + 30}s`,
                  logs: newLogs,
                }
              }
              return { ...stage, progress: newProgress, logs: newLogs }
            }
            return stage
          }),
        )
      }, 300)

      // Complete the stage after 3 seconds
      setTimeout(() => {
        clearInterval(interval)
        setCurrentStageIndex((prev) => prev + 1)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isRunning, currentStageIndex])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "running":
        return <Clock className="h-5 w-5 text-blue-600 animate-spin" />
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "running":
        return <Badge className="bg-blue-100 text-blue-800">Running</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const allCompleted = pipelineStages.every((stage) => stage.status === "completed")

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Pipeline Integration</h2>
        <p className="text-muted-foreground mt-2">Azure DevOps pipeline execution and monitoring</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Pipeline: {pipelineId}</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View in Azure DevOps
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {pipelineStages.map((stage, index) => (
            <div key={stage.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(stage.status)}
                  <span className="font-medium">{stage.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {stage.duration !== "0s" && `(${stage.duration})`}
                  </span>
                </div>
                {getStatusBadge(stage.status)}
              </div>

              {stage.status === "running" && <Progress value={stage.progress} className="h-2" />}

              {stage.logs.length > 0 && (
                <div className="ml-8 p-3 bg-gray-50 rounded-md">
                  <div className="text-xs font-mono space-y-1">
                    {stage.logs.map((log, logIndex) => (
                      <div key={logIndex} className="text-gray-700">
                        <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {allCompleted && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Infrastructure Provisioning Completed!</h3>
                <p className="text-green-700 mt-2">
                  All Azure resources have been successfully provisioned and deployed.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button asChild className="bg-starbucks-green hover:bg-starbucks-dark-green">
                  <Link href="/onboarding-success">Complete Onboarding</Link>
                </Button>
                <Button variant="outline">Download Summary</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} disabled={isRunning && !allCompleted}>
          Previous
        </Button>
        {allCompleted && <Button>Create New Request</Button>}
      </div>
    </div>
  )
}
