import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { ExecutiveDashboard } from "@/components/executive-dashboard"
import { RecentProvisionings } from "@/components/recent-provisionings"
import { DoraMetrics } from "@/components/dora-metrics"
import { DashboardOverview } from "@/components/dashboard-overview"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6 wide-content">
      <DashboardOverview />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 min-w-max">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ExecutiveDashboard />
          </CardContent>
        </Card>
        <RecentProvisionings className="col-span-3" />
      </div>
      <DoraMetrics />
    </div>
  )
}
