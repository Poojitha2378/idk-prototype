import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const doraMetrics = [
  {
    metric: "Deployment Frequency",
    platform: "15.2/day",
    appTeams: "8.7/day",
    target: "20/day",
    platformProgress: 76,
    appProgress: 44,
    trend: "+12%",
  },
  {
    metric: "Lead Time for Changes",
    platform: "1.2 hours",
    appTeams: "4.8 hours",
    target: "< 2 hours",
    platformProgress: 95,
    appProgress: 58,
    trend: "-15%",
  },
  {
    metric: "Mean Time to Recovery",
    platform: "25 minutes",
    appTeams: "85 minutes",
    target: "< 1 hour",
    platformProgress: 88,
    appProgress: 70,
    trend: "-8%",
  },
  {
    metric: "Change Failure Rate",
    platform: "1.8%",
    appTeams: "4.2%",
    target: "< 5%",
    platformProgress: 92,
    appProgress: 84,
    trend: "-2.1%",
  },
]

export function DoraMetricsAnalytics() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-dark-green to-starbucks-green text-white rounded-t-lg">
        <CardTitle>DORA Metrics Comparison</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {doraMetrics.map((metric) => (
          <div key={metric.metric} className="space-y-4 p-4 border border-starbucks-green/20 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-starbucks-dark-green">{metric.metric}</h3>
              <Badge
                className={
                  metric.trend.startsWith("+") || metric.trend.startsWith("-")
                    ? metric.trend.startsWith("+")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-800"
                }
              >
                {metric.trend}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-starbucks-green">Platform Team:</span>
                <div className="font-semibold text-starbucks-dark-green">{metric.platform}</div>
              </div>
              <div>
                <span className="text-starbucks-green">App Teams Avg:</span>
                <div className="font-semibold text-starbucks-dark-green">{metric.appTeams}</div>
              </div>
              <div>
                <span className="text-starbucks-green">Target:</span>
                <div className="font-semibold text-starbucks-dark-green">{metric.target}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-starbucks-green">Platform Team Progress</span>
                  <span className="text-starbucks-dark-green">{metric.platformProgress}%</span>
                </div>
                <Progress value={metric.platformProgress} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-starbucks-green">Application Teams Progress</span>
                  <span className="text-starbucks-dark-green">{metric.appProgress}%</span>
                </div>
                <Progress value={metric.appProgress} className="h-2" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
