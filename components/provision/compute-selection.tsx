"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Server, Container, Globe } from "lucide-react"

const computeOptions = [
  {
    id: "aks",
    name: "Azure Kubernetes Service (AKS)",
    description: "Managed Kubernetes container orchestration",
    icon: Container,
    features: ["Auto-scaling", "Namespace isolation", "Built-in monitoring", "CI/CD integration"],
  },
  {
    id: "vm",
    name: "Virtual Machine",
    description: "Traditional virtual machine hosting",
    icon: Server,
    features: ["Full OS control", "Custom configurations", "Legacy app support", "Direct access"],
  },
  {
    id: "appservice",
    name: "App Service",
    description: "Platform-as-a-Service web hosting",
    icon: Globe,
    features: ["Managed platform", "Auto-scaling", "Built-in CI/CD", "Multiple frameworks"],
  },
]

interface ComputeSelectionProps {
  selectedCompute: string
  onComputeChange: (compute: string) => void
  onNext: () => void
  onPrev: () => void
}

export function ComputeSelection({ selectedCompute, onComputeChange, onNext, onPrev }: ComputeSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Select Compute Platform</h2>
        <p className="text-muted-foreground mt-2">Choose where your services will be hosted</p>
      </div>

      <RadioGroup value={selectedCompute} onValueChange={onComputeChange}>
        <div className="grid gap-4 md:grid-cols-3">
          {computeOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-colors ${
                selectedCompute === option.id ? "ring-2 ring-blue-600" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <option.icon className="h-5 w-5" />
                      <span className="font-medium">{option.name}</span>
                    </div>
                  </Label>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <ul className="text-xs space-y-1">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </RadioGroup>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!selectedCompute}>
          Continue to Prerequisites
        </Button>
      </div>
    </div>
  )
}
