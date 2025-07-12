import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MoreHorizontal } from "lucide-react"
import Link from "next/link"

const recentProvisionings = [
  {
    id: "PRV-001",
    service: "PostgreSQL Database",
    environment: "Production",
    status: "Completed",
    requestedBy: "Sarah Chen",
    createdAt: "2 hours ago",
    region: "East US 2",
  },
  {
    id: "PRV-002",
    service: "Azure Key Vault",
    environment: "Staging",
    status: "In Progress",
    requestedBy: "Mike Johnson",
    createdAt: "4 hours ago",
    region: "West US 2",
  },
  {
    id: "PRV-003",
    service: "Function App",
    environment: "Development",
    status: "Failed",
    requestedBy: "Alex Rodriguez",
    createdAt: "6 hours ago",
    region: "Central US",
  },
  {
    id: "PRV-004",
    service: "Cosmos DB",
    environment: "Production",
    status: "Pending Approval",
    requestedBy: "Emily Davis",
    createdAt: "8 hours ago",
    region: "East US 2",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800"
    case "In Progress":
      return "bg-blue-100 text-blue-800"
    case "Failed":
      return "bg-red-100 text-red-800"
    case "Pending Approval":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function RecentProvisionings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Provisioning Requests</CardTitle>
        <Button asChild>
          <Link href="/provision">New Request</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentProvisionings.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{request.service}</span>
                  <Badge variant="outline">{request.environment}</Badge>
                  <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {request.id} • Requested by {request.requestedBy} • {request.createdAt}
                </div>
                <div className="text-xs text-muted-foreground">Region: {request.region}</div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
