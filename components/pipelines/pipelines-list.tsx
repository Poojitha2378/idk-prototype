import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ExternalLink, MoreHorizontal, Play, Square } from "lucide-react"

const pipelines = [
  {
    id: "PL-2024-001",
    name: "Starbucks-PostgreSQL-Prod",
    status: "running",
    progress: 65,
    stage: "Deploy",
    duration: "4m 32s",
    branch: "main",
    commit: "a1b2c3d",
    triggeredBy: "Sarah Chen",
  },
  {
    id: "PL-2024-002",
    name: "Starbucks-KeyVault-Staging",
    status: "completed",
    progress: 100,
    stage: "Completed",
    duration: "3m 15s",
    branch: "develop",
    commit: "e4f5g6h",
    triggeredBy: "Mike Johnson",
  },
  {
    id: "PL-2024-003",
    name: "Starbucks-FunctionApp-Dev",
    status: "failed",
    progress: 45,
    stage: "Security Scan",
    duration: "2m 08s",
    branch: "feature/auth",
    commit: "i7j8k9l",
    triggeredBy: "Alex Rodriguez",
  },
  {
    id: "PL-2024-004",
    name: "Starbucks-CosmosDB-Prod",
    status: "pending",
    progress: 0,
    stage: "Queued",
    duration: "-",
    branch: "main",
    commit: "m0n1o2p",
    triggeredBy: "Emily Davis",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "running":
      return "bg-blue-100 text-blue-800"
    case "failed":
      return "bg-red-100 text-red-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function PipelinesList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Pipeline Runs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pipelines.map((pipeline) => (
            <div key={pipeline.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{pipeline.name}</span>
                  <Badge className={getStatusColor(pipeline.status)}>{pipeline.status}</Badge>
                  <span className="text-sm text-muted-foreground">{pipeline.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    {pipeline.status === "running" ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {pipeline.status === "running" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Stage: {pipeline.stage}</span>
                    <span>{pipeline.progress}%</span>
                  </div>
                  <Progress value={pipeline.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>Branch: {pipeline.branch}</span>
                  <span>Commit: {pipeline.commit}</span>
                  <span>Duration: {pipeline.duration}</span>
                </div>
                <span>Triggered by {pipeline.triggeredBy}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
