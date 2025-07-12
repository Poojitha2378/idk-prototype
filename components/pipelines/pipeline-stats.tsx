import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, CheckCircle, XCircle, Clock } from "lucide-react"

const stats = [
  {
    title: "Active Pipelines",
    value: "23",
    change: "+3",
    icon: GitBranch,
    color: "text-blue-600",
  },
  {
    title: "Successful Runs",
    value: "156",
    change: "+12",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    title: "Failed Runs",
    value: "8",
    change: "-2",
    icon: XCircle,
    color: "text-red-600",
  },
  {
    title: "Avg Duration",
    value: "4.2m",
    change: "-0.3m",
    icon: Clock,
    color: "text-purple-600",
  },
]

export function PipelineStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
              from last week
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
