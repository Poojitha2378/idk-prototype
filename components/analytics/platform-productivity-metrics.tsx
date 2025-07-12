import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const platformMetrics = [
  {
    metric: "Self-Service Adoption",
    value: "87%",
    change: "+15%",
    description: "Teams using automated provisioning",
  },
  {
    metric: "Platform Reliability",
    value: "99.8%",
    change: "+0.3%",
    description: "Infrastructure uptime SLA",
  },
  {
    metric: "Developer Velocity",
    value: "3.2x",
    change: "+0.8x",
    description: "Faster deployment cycles",
  },
  {
    metric: "Cost Optimization",
    value: "$2.3M",
    change: "+$450K",
    description: "Annual infrastructure savings",
  },
  {
    metric: "Security Compliance",
    value: "98.5%",
    change: "+2.1%",
    description: "Policy adherence rate",
  },
  {
    metric: "Time to Production",
    value: "2.1 days",
    change: "-1.3 days",
    description: "Average service deployment time",
  },
]

export function PlatformProductivityMetrics() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-green to-starbucks-light-green text-white rounded-t-lg">
        <CardTitle>Platform Team Productivity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {platformMetrics.map((metric) => (
          <div
            key={metric.metric}
            className="flex items-center justify-between p-4 border border-starbucks-green/20 rounded-lg"
          >
            <div className="flex-1">
              <div className="font-semibold text-starbucks-dark-green">{metric.metric}</div>
              <div className="text-sm text-starbucks-green mt-1">{metric.description}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-starbucks-dark-green">{metric.value}</div>
              <div
                className={`text-sm ${
                  metric.change.startsWith("+") || metric.change.startsWith("-")
                    ? metric.change.startsWith("+") || (metric.change.startsWith("-") && metric.metric.includes("Time"))
                      ? "text-green-600"
                      : "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
