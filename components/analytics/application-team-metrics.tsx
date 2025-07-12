import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const appTeamMetrics = [
  {
    team: "Mobile Engineering",
    deployments: 156,
    leadTime: "3.2 hours",
    errorRate: "2.1%",
    satisfaction: 92,
  },
  {
    team: "Data Platform",
    deployments: 89,
    leadTime: "2.8 hours",
    errorRate: "1.8%",
    satisfaction: 95,
  },
  {
    team: "Customer Experience",
    deployments: 134,
    leadTime: "4.1 hours",
    errorRate: "3.2%",
    satisfaction: 87,
  },
  {
    team: "Store Operations",
    deployments: 201,
    leadTime: "2.5 hours",
    errorRate: "1.5%",
    satisfaction: 96,
  },
  {
    team: "Supply Chain",
    deployments: 67,
    leadTime: "5.2 hours",
    errorRate: "4.1%",
    satisfaction: 78,
  },
]

export function ApplicationTeamMetrics() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-gold to-starbucks-brown text-white rounded-t-lg">
        <CardTitle>Application Team Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {appTeamMetrics.map((team) => (
          <div key={team.team} className="space-y-3 p-4 border border-starbucks-green/20 rounded-lg">
            <div className="font-semibold text-starbucks-dark-green">{team.team}</div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-starbucks-green">Deployments:</span>
                <div className="font-semibold text-starbucks-dark-green">{team.deployments}/month</div>
              </div>
              <div>
                <span className="text-starbucks-green">Lead Time:</span>
                <div className="font-semibold text-starbucks-dark-green">{team.leadTime}</div>
              </div>
              <div>
                <span className="text-starbucks-green">Error Rate:</span>
                <div className="font-semibold text-starbucks-dark-green">{team.errorRate}</div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-starbucks-green">Team Satisfaction</span>
                <span className="font-semibold text-starbucks-dark-green">{team.satisfaction}%</span>
              </div>
              <Progress value={team.satisfaction} className="h-2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
