import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, Shield, Cloud } from "lucide-react"

const resourceTypes = [
  {
    name: "Databases",
    count: 45,
    healthy: 42,
    icon: Database,
    color: "text-blue-600",
  },
  {
    name: "Compute",
    count: 78,
    healthy: 75,
    icon: Server,
    color: "text-green-600",
  },
  {
    name: "Security",
    count: 23,
    healthy: 23,
    icon: Shield,
    color: "text-orange-600",
  },
  {
    name: "Storage",
    count: 34,
    healthy: 32,
    icon: Cloud,
    color: "text-purple-600",
  },
]

export function InfrastructureOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {resourceTypes.map((type) => (
        <Card key={type.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{type.name}</CardTitle>
            <type.icon className={`h-4 w-4 ${type.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{type.count}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">{type.healthy}</span> healthy
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
