"use client"

import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface AzureValidationProps {
  onNext: () => void
  onPrev: () => void // Changed from onBack to onPrev for consistency with page.tsx
}

const validationStepsData = [
  // Renamed to avoid conflict with state variable
  { id: "resourceGroup", name: "Resource Group Availability", status: "pending" },
  { id: "networkConfig", name: "Network Configuration Check", status: "pending" },
  { id: "permissions", name: "Azure Permissions Validation", status: "pending" },
  { id: "quota", name: "Subscription Quota Check", status: "pending" },
  { id: "namingConvention", name: "Naming Convention Adherence", status: "pending" },
]

export function AzureValidation({ onNext, onPrev }: AzureValidationProps) {
  const [steps, setSteps] = useState(validationStepsData)
  const [progress, setProgress] = useState(0)
  const [allCompleted, setAllCompleted] = useState(false)
  const [isValidating, setIsValidating] = useState(false) // Added isValidating state
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isValidating && !allCompleted) {
      // Only run if validating and not already completed
      let currentStepIndex = 0
      const totalSteps = validationStepsData.length

      intervalRef.current = setInterval(() => {
        if (currentStepIndex < totalSteps) {
          setSteps((prevSteps) => {
            const newSteps = [...prevSteps]
            // Simulate success for current step
            newSteps[currentStepIndex] = { ...newSteps[currentStepIndex], status: "completed" }
            return newSteps
          })
          currentStepIndex++
          setProgress(Math.floor((currentStepIndex / totalSteps) * 100))
        } else {
          clearInterval(intervalRef.current!)
          setAllCompleted(true)
          setIsValidating(false) // Stop validating once all steps are done
        }
      }, 1000) // Simulate each step taking 1 second
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isValidating, allCompleted]) // Depend on isValidating and allCompleted

  useEffect(() => {
    if (allCompleted) {
      // Automatically proceed to the next step after a short delay
      timeoutRef.current = setTimeout(() => {
        onNext()
      }, 1500) // Wait 1.5 seconds before moving to the next step
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [allCompleted, onNext])

  const startValidation = () => {
    setIsValidating(true)
    setAllCompleted(false) // Reset completion status
    setProgress(0) // Reset progress
    setSteps(validationStepsData.map((step) => ({ ...step, status: "pending" }))) // Reset step statuses
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="bg-starbucks-dark-green text-white rounded-t-lg p-6">
        <CardTitle className="text-2xl font-bold">Azure Validation</CardTitle>
        <p className="text-starbucks-cream/80">
          Performing automated checks to ensure your Azure environment is ready for provisioning.
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center justify-between p-3 border rounded-md bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                {step.status === "pending" && <Loader2 className="h-5 w-5 animate-spin text-starbucks-gold" />}
                {step.status === "completed" && <CheckCircle className="h-5 w-5 text-starbucks-green" />}
                {step.status === "failed" && <XCircle className="h-5 w-5 text-red-500" />}
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
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-starbucks-green/20" indicatorClassName="bg-starbucks-green" />
        </div>
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={onPrev}
            className="text-starbucks-dark-green border-starbucks-green hover:bg-starbucks-green/10 bg-transparent"
            disabled={isValidating} // Disable back button during validation
          >
            Previous
          </Button>
          {!isValidating && !allCompleted && (
            <Button onClick={startValidation} className="bg-starbucks-green hover:bg-starbucks-dark-green">
              Start Validation
            </Button>
          )}
          {isValidating && (
            <Button disabled className="bg-starbucks-green/50">
              Validating...
            </Button>
          )}
          {allCompleted && (
            <Button disabled className="bg-starbucks-green">
              Validation Complete!
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
