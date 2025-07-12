import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const cncfMetrics = [
  {
    component: "Kubernetes Clusters",
    health: 98,
    nodes: "156 active",
    pods: "2,847 running",
    cpu: 67,
    memory: 72,
  },
  {
    component: "Prometheus Monitoring",
    health: 99,
    nodes: "12 instances",
    pods: "45 targets",
    cpu: 45,
    memory: 58,
  },
  {
    component: "Istio Service Mesh",
    health: 96,
    nodes: "89 services",
    pods: "234 sidecars",
    cpu: 52,
    memory: 61,
  },
  {
    component: "Jaeger Tracing",
    health: 94,
    nodes: "8 collectors",
    pods: "156 spans/sec",
    cpu: 38,
    memory: 44,
  },
]

export function CNCFPlatformMetrics() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-gold to-starbucks-brown text-white rounded-t-lg">
        <CardTitle>CNCF Platform Engineering Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          {cncfMetrics.map((metric) => (
            <div key={metric.component} className="space-y-4 p-4 border border-starbucks-green/20 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-starbucks-dark-green">{metric.component}</h3>
                <span className="text-sm font-medium text-starbucks-green">{metric.health}% healthy</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-starbucks-green">Nodes/Instances:</span>
                  <div className="font-semibold text-starbucks-dark-green">{metric.nodes}</div>
                </div>
                <div>
                  <span className="text-starbucks-green">Pods/Targets:</span>
                  <div className="font-semibold text-starbucks-dark-green">{metric.pods}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-starbucks-green">CPU Usage</span>
                    <span className="text-starbucks-dark-green">{metric.cpu}%</span>
                  </div>
                  <Progress value={metric.cpu} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-starbucks-green">Memory Usage</span>
                    <span className="text-starbucks-dark-green">{metric.memory}%</span>
                  </div>
                  <Progress value={metric.memory} className="h-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
