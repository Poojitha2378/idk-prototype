import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, Target } from "lucide-react"

const executiveMetrics = [
  {
    title: "Cost Optimization",
    value: "$2.3M saved",
    change: "+15%",
    icon: DollarSign,
    description: "YTD infrastructure cost savings",
  },
  {
    title: "Developer Velocity",
    value: "85%",
    change: "+12%",
    icon: TrendingUp,
    description: "Faster deployment cycles",
  },
  {
    title: "Platform Adoption",
    value: "1,247",
    change: "+28%",
    icon: Users,
    description: "Active developers using IDP",
  },
  {
    title: "SLA Compliance",
    value: "99.8%",
    change: "+0.3%",
    icon: Target,
    description: "Infrastructure uptime",
  },
]

export function ExecutiveDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Executive Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {executiveMetrics.map((metric) => (
          <div key={metric.title} className="flex items-center space-x-4">
            <div className="p-2 bg-muted rounded-lg">
              <metric.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{metric.title}</span>
                <span className="text-sm font-bold">{metric.value}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{metric.description}</span>
                <span className="text-green-600">{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
