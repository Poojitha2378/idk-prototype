"use client"

import { useState } from "react"
import { ServiceSelection } from "@/components/provision/service-selection"
import { PrerequisiteValidation } from "@/components/provision/prerequisite-validation"
import { ComputeSelection } from "@/components/provision/compute-selection"
import { AzureValidation } from "@/components/provision/azure-validation"
import { PipelineIntegration } from "@/components/provision/pipeline-integration"
import { ProgressTracker } from "@/components/provision/progress-tracker"
import { DemoControls } from "@/components/demo-controls"

const steps = [
  { id: 1, name: "Service Selection", description: "Choose Azure services" },
  { id: 2, name: "Compute Platform", description: "Select hosting platform" },
  { id: 3, name: "Prerequisites", description: "Provide required information" },
  { id: 4, name: "Azure Validation", description: "Verify resource provisioning" },
  { id: 5, name: "Pipeline Integration", description: "Deploy and monitor" },
]

export default function ProvisionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedCompute, setSelectedCompute] = useState("")
  const [prerequisites, setPrerequisites] = useState({})

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <>
      <div className="flex-1 space-y-8 p-8 wide-content min-h-screen">
        <div className="flex items-center justify-between min-w-max">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Provision Azure Services</h1>
            <p className="text-xl text-muted-foreground mt-2">Deploy infrastructure with enterprise-grade automation</p>
          </div>
        </div>

        <div className="min-w-max">
          <ProgressTracker steps={steps} currentStep={currentStep} />
        </div>

        <div className="mt-12 min-w-max">
          {currentStep === 1 && (
            <ServiceSelection
              selectedServices={selectedServices}
              onServicesChange={setSelectedServices}
              onNext={nextStep}
            />
          )}
          {currentStep === 2 && (
            <ComputeSelection
              selectedCompute={selectedCompute}
              onComputeChange={setSelectedCompute}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 3 && (
            <PrerequisiteValidation
              prerequisites={prerequisites}
              onPrerequisitesChange={setPrerequisites}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 4 && <AzureValidation onNext={nextStep} onPrev={prevStep} />}
          {currentStep === 5 && <PipelineIntegration onPrev={prevStep} />}
        </div>
      </div>

      <DemoControls />
    </>
  )
}
