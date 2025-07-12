import { InfrastructureOverview } from "@/components/infrastructure/infrastructure-overview"
import { ResourcesList } from "@/components/infrastructure/resources-list"

export default function InfrastructurePage() {
  return (
    <div className="flex-1 space-y-6 p-6 wide-content">
      <div className="flex items-center justify-between min-w-max">
        <h1 className="text-3xl font-bold tracking-tight">Infrastructure Overview</h1>
      </div>

      <div className="min-w-max">
        <InfrastructureOverview />
      </div>

      <div className="min-w-max">
        <ResourcesList />
      </div>
    </div>
  )
}
