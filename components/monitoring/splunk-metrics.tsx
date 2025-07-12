import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const splunkLogs = [
  {
    timestamp: "2024-01-15 14:32:15",
    level: "INFO",
    service: "auth-service",
    message: "User authentication successful",
    count: "1.2K events/min",
  },
  {
    timestamp: "2024-01-15 14:31:45",
    level: "WARN",
    service: "payment-service",
    message: "High response time detected",
    count: "45 events/min",
  },
  {
    timestamp: "2024-01-15 14:30:22",
    level: "ERROR",
    service: "inventory-service",
    message: "Database connection timeout",
    count: "3 events/min",
  },
  {
    timestamp: "2024-01-15 14:29:18",
    level: "INFO",
    service: "order-service",
    message: "Order processing completed",
    count: "850 events/min",
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "ERROR":
      return "bg-red-100 text-red-800"
    case "WARN":
      return "bg-yellow-100 text-yellow-800"
    case "INFO":
      return "bg-blue-100 text-blue-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function SplunkMetrics() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-dark-green to-starbucks-green text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-white flex items-center justify-center">
            <span className="text-xs font-bold text-starbucks-green">SP</span>
          </div>
          Splunk Log Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {splunkLogs.map((log, index) => (
          <div key={index} className="space-y-2 p-4 border border-starbucks-green/20 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge className={getLevelColor(log.level)}>{log.level}</Badge>
                <span className="font-medium text-starbucks-dark-green">{log.service}</span>
              </div>
              <span className="text-xs text-starbucks-green">{log.count}</span>
            </div>

            <p className="text-sm text-starbucks-dark-green">{log.message}</p>
            <p className="text-xs text-starbucks-green">{log.timestamp}</p>
          </div>
        ))}

        <div className="mt-4 p-3 bg-starbucks-cream rounded-lg">
          <div className="text-sm font-medium text-starbucks-dark-green mb-2">Log Volume Summary</div>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-starbucks-green">Total Events:</span>
              <div className="font-semibold text-starbucks-dark-green">2.1M/hour</div>
            </div>
            <div>
              <span className="text-starbucks-green">Error Rate:</span>
              <div className="font-semibold text-starbucks-dark-green">0.14%</div>
            </div>
            <div>
              <span className="text-starbucks-green">Avg Response:</span>
              <div className="font-semibold text-starbucks-dark-green">125ms</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
