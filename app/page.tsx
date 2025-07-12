import { DashboardOverview } from "@/components/dashboard-overview"
import { DoraMetrics } from "@/components/dora-metrics"
import { ExecutiveDashboard } from "@/components/executive-dashboard"
import { RecentProvisionings } from "@/components/recent-provisionings"
import { DemoControls } from "@/components/demo-controls"

export default function HomePage() {
  return (
    <>
      <div className="flex-1 space-y-8 p-8 wide-content">
        <div className="flex items-center justify-between min-w-max">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Infrastructure Provisioning Portal</h1>
            <p className="text-xl text-muted-foreground mt-2">Starbucks Internal Developer Platform</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-medium">Welcome back, John Doe</div>
            <div className="text-base text-muted-foreground">Starbucks Technology Team</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 min-w-max">
          <DashboardOverview />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 min-w-max">
          <DoraMetrics />
          <ExecutiveDashboard />
        </div>

        <div className="min-w-max">
          <RecentProvisionings />
        </div>
      </div>

      <DemoControls />
    </>
  )
}
