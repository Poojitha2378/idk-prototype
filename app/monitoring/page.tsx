import { MonitoringOverview } from "@/components/monitoring/monitoring-overview"
import { DatadogMetrics } from "@/components/monitoring/datadog-metrics"
import { SplunkMetrics } from "@/components/monitoring/splunk-metrics"
import { CNCFPlatformMetrics } from "@/components/monitoring/cncf-platform-metrics"
import { TeamOnboardingStats } from "@/components/monitoring/team-onboarding-stats"

export default function MonitoringPage() {
  return (
    <div className="flex-1 space-y-8 p-8 wide-content">
      <div className="flex items-center justify-between min-w-max">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-starbucks-dark-green">Platform Monitoring</h1>
          <p className="text-xl text-starbucks-green mt-2">CNCF Platform Engineering Observability</p>
        </div>
      </div>

      <div className="min-w-max">
        <MonitoringOverview />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 min-w-max">
        <DatadogMetrics />
        <SplunkMetrics />
      </div>

      <div className="min-w-max">
        <CNCFPlatformMetrics />
      </div>

      <div className="min-w-max">
        <TeamOnboardingStats />
      </div>
    </div>
  )
}
