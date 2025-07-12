import { DoraMetricsAnalytics } from "@/components/analytics/dora-metrics-analytics"
import { PlatformProductivityMetrics } from "@/components/analytics/platform-productivity-metrics"
import { ApplicationTeamMetrics } from "@/components/analytics/application-team-metrics"
import { AnalyticsOverview } from "@/components/analytics/analytics-overview"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-8 p-8 wide-content">
      <div className="flex items-center justify-between min-w-max">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-starbucks-dark-green">Analytics Dashboard</h1>
          <p className="text-xl text-starbucks-green mt-2">DORA Metrics & Team Productivity Analytics</p>
        </div>
      </div>

      <div className="min-w-max">
        <AnalyticsOverview />
      </div>

      <div className="min-w-max">
        <DoraMetricsAnalytics />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 min-w-max">
        <PlatformProductivityMetrics />
        <ApplicationTeamMetrics />
      </div>
    </div>
  )
}
