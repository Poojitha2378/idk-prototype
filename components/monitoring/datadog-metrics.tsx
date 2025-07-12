import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const datadogMetrics = [
  {
    service: "API Gateway",
    latency: "45ms",
    errorRate: "0.02%",
    throughput: "15.2K req/min",
    health: 98,
    status: "healthy",
  },
  {
    service: "Database Cluster",
    latency: "12ms",
    errorRate: "0.01%",
    throughput: "8.7K queries/min",
    health: 99,
    status: "healthy",
  },
  {
    service: "Message Queue",
    latency: "8ms",
    errorRate: "0.05%",
    throughput: "25.1K msgs/min",
    health: 95,
    status: "warning",
  },
  {
    service: "Cache Layer",
    latency: "2ms",
    errorRate: "0.00%",
    throughput: "45.8K ops/min",
    health: 100,
    status: "healthy",
  },
]

export function DatadogMetrics() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-white flex items-center justify-center">
            <span className="text-xs font-bold text-starbucks-green">DD</span>
          </div>
          Datadog Application Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {datadogMetrics.map((metric) => (
          <div key={metric.service} className="space-y-3 p-4 border border-starbucks-green/20 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium text-starbucks-dark-green">{metric.service}</span>
              <Badge
                className={
                  metric.status === "healthy" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }
              >
                {metric.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-starbucks-green">Latency:</span>
                <div className="font-semibold text-starbucks-dark-green">{metric.latency}</div>
              </div>
              <div>
                <span className="text-starbucks-green">Error Rate:</span>
                <div className="font-semibold text-starbucks-dark-green">{metric.errorRate}</div>
              </div>
              <div>
                <span className="text-starbucks-green">Throughput:</span>
                <div className="font-semibold text-starbucks-dark-green">{metric.throughput}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-starbucks-green">Health Score</span>
                <span className="font-semibold text-starbucks-dark-green">{metric.health}%</span>
              </div>
              <Progress value={metric.health} className="h-2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
