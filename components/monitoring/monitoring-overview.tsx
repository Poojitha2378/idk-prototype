import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Platform Health",
    value: "99.8%",
    change: "+0.2%",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "-5",
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Service Uptime",
    value: "99.95%",
    change: "+0.1%",
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Performance Score",
    value: "94.2",
    change: "+2.1",
    icon: TrendingUp,
    color: "text-starbucks-green",
    bg: "bg-starbucks-cream",
  },
]

export function MonitoringOverview() {
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
                <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
                from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
