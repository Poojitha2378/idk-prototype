"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AzureValidationProps {
  onNext: () => void
  onPrev: () => void
}

const initialValidationSteps = [
  {
    id: 1,
    name: "Azure Subscription Check",
    status: "pending" as "pending" | "in-progress" | "completed" | "failed",
    progress: 0,
  },
  {
    id: 2,
    name: "Resource Group Availability",
    status: "pending" as "pending" | "in-progress" | "completed" | "failed",
    progress: 0,
  },
  {
    id: 3,
    name: "Network Configuration Validation",
    status: "pending" as "pending" | "in-progress" | "completed" | "failed",
    progress: 0,
  },
  {
    id: 4,
    name: "Service Principal Permissions",
    status: "pending" as "pending" | "in-progress" | "completed" | "failed",
    progress: 0,
  },
  {
    id: 5,
    name: "Quota and Limits Check",
    status: "pending" as "pending" | "in-progress" | "completed" | "failed",
    progress: 0,
  },
]

export function AzureValidation({ onNext, onPrev }: AzureValidationProps) {
  const [validationSteps, setValidationSteps] = useState(initialValidationSteps)
  const [overallProgress, setOverallProgress] = useState(0)
  const [isValidationRunning, setIsValidationRunning] = useState(false)
  const currentStepIndexRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Effect to manage the validation process
  useEffect(() => {
    // Clear any existing timers to prevent multiple instances
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    if (!isValidationRunning || currentStepIndexRef.current >= initialValidationSteps.length) {
      return // Stop if validation is not running or all steps are done
    }

    const currentStepIndex = currentStepIndexRef.current

    // Set current step to 'in-progress'
    setValidationSteps((prevSteps) =>
      prevSteps.map((step, index) => (index === currentStepIndex ? { ...step, status: "in-progress" } : step)),
    )

    // Simulate progress for the current step
    intervalRef.current = setInterval(() => {
      setValidationSteps((prevSteps) =>
        prevSteps.map((step, index) => {
          if (index === currentStepIndex) {
            const newProgress = Math.min(step.progress + 10, 100)
            return { ...step, progress: newProgress }
          }
          return step
        }),
      )
    }, 200)

    // Simulate completion of the current step
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current) // Clear interval for this step

      setValidationSteps((prevSteps) =>
        prevSteps.map((step, index) =>
          index === currentStepIndex ? { ...step, status: "completed", progress: 100 } : step,
        ),
      )

      currentStepIndexRef.current += 1 // Move to the next step

      // Update overall progress
      setOverallProgress(Math.floor((currentStepIndexRef.current / initialValidationSteps.length) * 100))

      // If all steps are completed, stop validation
      if (currentStepIndexRef.current >= initialValidationSteps.length) {
        setIsValidationRunning(false)
      }
    }, 2000) // Each step takes 2 seconds

    // Cleanup function for this effect instance
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      intervalRef.current = null
      timeoutRef.current = null
    }
  }, [isValidationRunning, currentStepIndexRef.current]) // Dependencies for this effect

  // Effect to automatically navigate when all validations are complete
  useEffect(() => {
    if (!isValidationRunning && overallProgress === 100) {
      const finalNavigationTimeout = setTimeout(() => {
        onNext()
      }, 1000) // Small delay before navigating
      return () => clearTimeout(finalNavigationTimeout)
    }
  }, [isValidationRunning, overallProgress, onNext])

  const startValidation = () => {
    setValidationSteps(initialValidationSteps.map((step) => ({ ...step, progress: 0, status: "pending" })))
    setOverallProgress(0)
    currentStepIndexRef.current = 0
    setIsValidationRunning(true)
  }

  const allStepsCompleted = validationSteps.every((step) => step.status === "completed")

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="bg-starbucks-dark-green text-white rounded-t-lg p-6">
        <CardTitle className="text-2xl font-bold">Azure Validation</CardTitle>
        <p className="text-starbucks-cream/80">
          Performing automated checks to ensure your Azure environment is ready for provisioning.
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <span>Overall Progress</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <Progress
            value={overallProgress}
            className="h-2 bg-starbucks-green/20"
            indicatorClassName="bg-starbucks-green"
          />
        </div>
        <div className="space-y-4">
          {validationSteps.map((step) => (
            <div
              key={step.id}
              className="flex items-center justify-between p-3 border rounded-md bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                {step.status === "completed" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {step.status === "failed" && <XCircle className="h-5 w-5 text-red-500" />}
                {(step.status === "pending" || step.status === "in-progress") && (
                  <Loader2
                    className={cn("h-5 w-5 text-gray-500 animate-spin", {
                      "text-starbucks-green": step.status === "in-progress",
                    })}
                  />
                )}
                <span
                  className={cn("font-medium", {
                    "text-gray-500 dark:text-gray-400": step.status === "pending",
                    "text-starbucks-dark-green dark:text-starbucks-cream": step.status === "completed",
                    "text-red-600 dark:text-red-400": step.status === "failed",
                  })}
                >
                  {step.name}
                </span>
              </div>
              {step.status === "completed" && (
                <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
              )}
              {step.status === "in-progress" && (
                <span className="text-sm text-starbucks-green">In Progress ({Math.round(step.progress)}%)</span>
              )}
              {step.status === "pending" && <span className="text-sm text-gray-500 dark:text-gray-400">Pending</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={onPrev}
            className="text-starbucks-dark-green border-starbucks-green hover:bg-starbucks-green/10 bg-transparent"
            disabled={isValidationRunning}
          >
            Previous
          </Button>
          {!isValidationRunning && !allStepsCompleted && (
            <Button onClick={startValidation} className="bg-starbucks-green hover:bg-starbucks-dark-green">
              Start Validation
            </Button>
          )}
          {isValidationRunning && (
            <Button disabled className="bg-starbucks-green/50">
              Validating...
            </Button>
          )}
          {allStepsCompleted && (
            <Button disabled className="bg-starbucks-green">
              Validation Complete!
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
