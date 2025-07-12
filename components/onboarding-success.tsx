"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Coffee, Rocket, Book, MessageCircle, Code, Zap, Users } from "lucide-react"
import Link from "next/link"

export function OnboardingSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-starbucks-cream via-white to-starbucks-gold/20 flex items-center justify-center p-8">
      <Card className="max-w-4xl w-full border-starbucks-green/20 shadow-2xl">
        <CardContent className="p-12">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-12">
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-starbucks-green to-starbucks-dark-green flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-starbucks-gold flex items-center justify-center">
                  <Coffee className="h-4 w-4 text-starbucks-dark-green" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-starbucks-dark-green">
                ✅ You're All Set — Welcome to the Starbucks Enterprise Cloud Platform!
              </h1>
              <p className="text-xl text-starbucks-green font-medium">Thank you for completing your onboarding!</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-starbucks-cream to-white p-8 rounded-xl border border-starbucks-green/20 mb-8">
            <p className="text-lg text-starbucks-dark-green leading-relaxed text-center">
              You now have everything you need to start coding, deploying, and innovating with our cloud infrastructure.
              <br />
              <br />
              <span className="font-semibold">
                Build the next generation of applications that power Starbucks — across{" "}
                <span className="text-starbucks-green">Corporate</span>,{" "}
                <span className="text-starbucks-green">Customer</span>,{" "}
                <span className="text-starbucks-green">Retail</span>, and{" "}
                <span className="text-starbucks-green">GenAI</span> teams.
              </span>
            </p>
          </div>

          {/* What's Next Section */}
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-3 justify-center">
              <Rocket className="h-6 w-6 text-starbucks-green" />
              <h2 className="text-2xl font-bold text-starbucks-dark-green">🚀 What's Next?</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-starbucks-green/20 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-starbucks-dark-green">Launch your dev environment</h3>
                  <p className="text-sm text-starbucks-green">Get your development workspace ready in minutes</p>
                </CardContent>
              </Card>

              <Card className="border-starbucks-green/20 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mx-auto">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-starbucks-dark-green">Explore platform tools & APIs</h3>
                  <p className="text-sm text-starbucks-green">Discover our comprehensive developer toolkit</p>
                </CardContent>
              </Card>

              <Card className="border-starbucks-green/20 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-starbucks-dark-green">Start building and collaborating</h3>
                  <p className="text-sm text-starbucks-green">Join your team and start creating amazing solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-starbucks-green hover:bg-starbucks-dark-green text-white px-8 py-3 text-lg font-semibold"
            >
              <Link href="/provision">
                <Rocket className="h-5 w-5 mr-2" />
                Start Building Now
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-starbucks-green text-starbucks-green hover:bg-starbucks-green hover:text-white px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Link href="/">
                <Coffee className="h-5 w-5 mr-2" />
                Go to Dashboard
              </Link>
            </Button>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-starbucks-gold/20 to-starbucks-cream p-6 rounded-xl border border-starbucks-gold/30">
            <p className="text-center text-starbucks-dark-green">
              <span className="font-medium">Need help?</span> Check out the{" "}
              <Button
                variant="link"
                className="p-0 h-auto text-starbucks-green hover:text-starbucks-dark-green font-semibold"
              >
                <Book className="h-4 w-4 mr-1" />
                Getting Started Guide
              </Button>{" "}
              or reach out via{" "}
              <Button
                variant="link"
                className="p-0 h-auto text-starbucks-green hover:text-starbucks-dark-green font-semibold"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Support Portal
              </Button>
              .
            </p>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-8 pt-6 border-t border-starbucks-green/20">
            <p className="text-xl font-semibold text-starbucks-dark-green">Let's build what's next — together. ☕</p>
            <p className="text-sm text-starbucks-green mt-2">Starbucks Technology • Enterprise Cloud Platform • v2.1</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
