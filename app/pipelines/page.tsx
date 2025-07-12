import { PipelinesList } from "@/components/pipelines/pipelines-list"
import { PipelineStats } from "@/components/pipelines/pipeline-stats"

export default function PipelinesPage() {
  return (
    <div className="flex-1 space-y-6 p-6 wide-content">
      <div className="flex items-center justify-between min-w-max">
        <h1 className="text-3xl font-bold tracking-tight">Pipeline Status</h1>
      </div>

      <div className="min-w-max">
        <PipelineStats />
      </div>

      <div className="min-w-max">
        <PipelinesList />
      </div>
    </div>
  )
}
