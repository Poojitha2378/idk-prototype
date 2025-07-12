import { Check } from "lucide-react"

interface Step {
  id: number
  name: string
  description: string
}

interface ProgressTrackerProps {
  steps: Step[]
  currentStep: number
}

export function ProgressTracker({ steps, currentStep }: ProgressTrackerProps) {
  return (
    <nav aria-label="Progress" className="py-6">
      <ol className="flex items-center justify-center max-w-4xl mx-auto">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={`${stepIdx !== steps.length - 1 ? "pr-8 sm:pr-16 lg:pr-20" : ""} relative flex-1`}
          >
            {step.id < currentStep ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-1 w-full bg-green-600 rounded-full" />
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-lg">
                  <Check className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </>
            ) : step.id === currentStep ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-1 w-full bg-gray-200 rounded-full" />
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-600 bg-white shadow-lg">
                  <span className="h-4 w-4 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-1 w-full bg-gray-200 rounded-full" />
                </div>
                <div className="group relative flex h-12 w-12 items-center justify-center rounded-full border-3 border-gray-300 bg-white shadow-sm">
                  <span
                    className="h-3 w-3 rounded-full bg-transparent group-hover:bg-gray-300 transition-colors"
                    aria-hidden="true"
                  />
                </div>
              </>
            )}
            <div className="ml-6 min-w-0 mt-4 text-center">
              <span
                className={`text-base font-semibold block ${step.id <= currentStep ? "text-blue-600" : "text-gray-500"}`}
              >
                {step.name}
              </span>
              <p className="text-sm text-gray-500 mt-1">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
