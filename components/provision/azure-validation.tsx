"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, XCircle } from "lucide-react"
import { useState, useEffect } from "react"

interface ValidationStep {
  id: string
  name: string
  status: "pending" | "running" | "completed" | "failed"
  progress: number
  message: string
}

interface AzureValidationProps {
  onNext: () => void
  onPrev: () => void
}

export function AzureValidation({ onNext, onPrev }: AzureValidationProps) {
  const [validationSteps, setValidationSteps] = useState<ValidationStep[]>([
    {
      id: "auth",
      name: "Azure Authentication",
      status: "pending",
      progress: 0,
      message: "Waiting to start...",
    },
    {
      id: "quota",
      name: "Resource Quota Check",
      status: "pending",
      progress: 0,
      message: "Waiting to start...",
    },
    {
      id: "permissions",
      name: "Permission Validation",
      status: "pending",
      progress: 0,
      message: "Waiting to start...",
    },
    {
      id: "naming",
      name: "Naming Convention Check",
      status: "pending",
      progress: 0,
      message: "Waiting to start...",
    },
    {
      id: "dependencies",
      name: "Dependency Validation",
      status: "pending",
      progress: 0,
      message: "Waiting to start...",
    },
  ])

  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isValidating, setIsValidating] = useState(false)

  useEffect(() => {
    if (isValidating && currentStepIndex < validationSteps.length) {
      const currentStep = validationSteps[currentStepIndex]

      // Start the current step
      setValidationSteps((prev) =>
        prev.map((step, index) =>
          index === currentStepIndex ? { ...step, status: "running", message: "Validating..." } : step,
        ),
      )

      // Simulate validation progress
      const interval = setInterval(() => {
        setValidationSteps((prev) =>
          prev.map((step, index) => {
            if (index === currentStepIndex) {
              const newProgress = Math.min(step.progress + 20, 100)
              if (newProgress === 100) {
                return {
                  ...step,
                  status: "completed",
                  progress: 100,
                  message: "Validation completed successfully",
                }
              }
              return { ...step, progress: newProgress }
            }
            return step
          }),
        )
      }, 500)

      // Complete the step after 2.5 seconds
      setTimeout(() => {
        clearInterval(interval)
        setCurrentStepIndex((prev) => prev + 1)
      }, 2500)

      return () => clearInterval(interval)
    }
  }, [isValidating, currentStepIndex])

  const startValidation = () => {
    setIsValidating(true)
    setCurrentStepIndex(0)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "running":
        return <Clock className="h-5 w-5 text-blue-600 animate-spin" />
      case "failed":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />
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

  const allCompleted = validationSteps.every((step) => step.status === "completed")

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Azure Response Validation</h2>
        <p className="text-muted-foreground mt-2">Verifying resource provisioning requirements</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Validation Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {validationSteps.map((step, index) => (
            <div key={step.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(step.status)}
                  <span className="font-medium">{step.name}</span>
                </div>
                {getStatusBadge(step.status)}
              </div>

              {step.status === "running" && <Progress value={step.progress} className="h-2" />}

              <p className="text-sm text-muted-foreground ml-8">{step.message}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {!isValidating && (
        <div className="text-center">
          <Button onClick={startValidation} size="lg">
            Start Azure Validation
          </Button>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} disabled={isValidating}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!allCompleted}>
          Continue to Pipeline Integration
        </Button>
      </div>
    </div>
  )
}
