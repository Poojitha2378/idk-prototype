import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const teamStats = [
  {
    team: "Mobile Engineering",
    onboardedDate: "2024-01-10",
    services: 12,
    deployments: 45,
    adoption: 85,
    status: "active",
  },
  {
    team: "Data Platform",
    onboardedDate: "2024-01-08",
    services: 8,
    deployments: 23,
    adoption: 92,
    status: "active",
  },
  {
    team: "Customer Experience",
    onboardedDate: "2024-01-15",
    services: 6,
    deployments: 18,
    adoption: 67,
    status: "onboarding",
  },
  {
    team: "Store Operations",
    onboardedDate: "2024-01-12",
    services: 15,
    deployments: 67,
    adoption: 78,
    status: "active",
  },
  {
    team: "Supply Chain",
    onboardedDate: "2024-01-20",
    services: 4,
    deployments: 8,
    adoption: 45,
    status: "onboarding",
  },
]

export function TeamOnboardingStats() {
  return (
    <Card className="border-starbucks-green/20">
      <CardHeader className="bg-gradient-to-r from-starbucks-green to-starbucks-light-green text-white rounded-t-lg">
        <CardTitle>Team Platform Adoption</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="grid gap-4">
          {teamStats.map((team) => (
            <div
              key={team.team}
              className="flex items-center justify-between p-4 border border-starbucks-green/20 rounded-lg"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-starbucks-dark-green">{team.team}</span>
                  <Badge
                    className={team.status === "active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                  >
                    {team.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-starbucks-green">Services:</span>
                    <div className="font-semibold text-starbucks-dark-green">{team.services}</div>
                  </div>
                  <div>
                    <span className="text-starbucks-green">Deployments:</span>
                    <div className="font-semibold text-starbucks-dark-green">{team.deployments}</div>
                  </div>
                  <div>
                    <span className="text-starbucks-green">Onboarded:</span>
                    <div className="font-semibold text-starbucks-dark-green">{team.onboardedDate}</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-starbucks-green">Platform Adoption</span>
                    <span className="font-semibold text-starbucks-dark-green">{team.adoption}%</span>
                  </div>
                  <Progress value={team.adoption} className="h-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-starbucks-cream rounded-lg">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-starbucks-dark-green">5</div>
              <div className="text-sm text-starbucks-green">Teams Onboarded</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-starbucks-dark-green">45</div>
              <div className="text-sm text-starbucks-green">Total Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-starbucks-dark-green">161</div>
              <div className="text-sm text-starbucks-green">Total Deployments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-starbucks-dark-green">73%</div>
              <div className="text-sm text-starbucks-green">Avg Adoption</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
