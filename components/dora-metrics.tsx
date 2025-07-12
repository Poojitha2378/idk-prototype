import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const doraMetrics = [
  {
    metric: "Deployment Frequency",
    value: "12.3/day",
    target: "15/day",
    progress: 82,
    status: "good",
  },
  {
    metric: "Lead Time for Changes",
    value: "2.1 hours",
    target: "< 2 hours",
    progress: 95,
    status: "excellent",
  },
  {
    metric: "Mean Time to Recovery",
    value: "45 minutes",
    target: "< 1 hour",
    progress: 75,
    status: "good",
  },
  {
    metric: "Change Failure Rate",
    value: "3.2%",
    target: "< 5%",
    progress: 88,
    status: "excellent",
  },
]

export function DoraMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>DORA Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {doraMetrics.map((metric) => (
          <div key={metric.metric} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{metric.metric}</span>
              <span className="text-muted-foreground">{metric.value}</span>
            </div>
            <Progress value={metric.progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Target: {metric.target}</span>
              <span
                className={
                  metric.status === "excellent"
                    ? "text-green-600"
                    : metric.status === "good"
                      ? "text-blue-600"
                      : "text-yellow-600"
                }
              >
                {metric.status}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
