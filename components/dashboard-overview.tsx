import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Database, GitBranch, Shield } from "lucide-react"

const stats = [
  {
    title: "Active Resources",
    value: "1,247",
    change: "+12%",
    icon: Cloud,
    color: "text-blue-600",
  },
  {
    title: "Running Pipelines",
    value: "23",
    change: "+5%",
    icon: GitBranch,
    color: "text-green-600",
  },
  {
    title: "Database Instances",
    value: "156",
    change: "+8%",
    icon: Database,
    color: "text-purple-600",
  },
  {
    title: "Security Policies",
    value: "89",
    change: "+2%",
    icon: Shield,
    color: "text-orange-600",
  },
]

export function DashboardOverview() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-base font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="text-green-600 font-medium">{stat.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
