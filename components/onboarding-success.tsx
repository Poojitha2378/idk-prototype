"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OnboardingSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-starbucks-cream to-starbucks-light-green p-4 text-center">
      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-xl max-w-2xl w-full">
        <CheckCircle className="h-24 w-24 text-starbucks-green mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold text-starbucks-dark-green dark:text-starbucks-cream mb-4">
          You’re All Set — Welcome to the Starbucks Enterprise Cloud Platform!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Thank you for completing your onboarding!
        </p>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-8">
          You now have everything you need to start coding, deploying, and innovating with our cloud infrastructure.
          Build the next generation of applications that power Starbucks coffee company.
        </p>
        <Link href="/" passHref>
          <Button className="bg-starbucks-green hover:bg-starbucks-dark-green text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
