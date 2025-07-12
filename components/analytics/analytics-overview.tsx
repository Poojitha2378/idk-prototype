import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Target, Award } from "lucide-react"

const stats = [
  {
    title: "Platform Adoption",
    value: "87%",
    change: "+15%",
    icon: TrendingUp,
    color: "text-starbucks-green",
    bg: "bg-starbucks-cream",
  },
  {
    title: "Active Teams",
    value: "23",
    change: "+5",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "DORA Score",
    value: "Elite",
    change: "↑ High",
    icon: Target,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Satisfaction",
    value: "4.8/5",
    change: "+0.3",
    icon: Award,
    color: "text-starbucks-gold",
    bg: "bg-yellow-50",
  },
]

export function AnalyticsOverview() {
  return (
    <div className="horizontal-scroll">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 min-w-max md:min-w-0">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow border-starbucks-green/20">
            <CardHeader className={`flex flex-row items-center justify-between space-y-0 pb-3 ${stat.bg} rounded-t-lg`}>
              <CardTitle className="text-base font-medium text-starbucks-dark-green">{stat.title}</CardTitle>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-starbucks-dark-green">{stat.value}</div>
              <p className="text-sm text-starbucks-green mt-2">
                <span className="text-green-600">{stat.change}</span> from last quarter
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
