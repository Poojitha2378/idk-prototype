import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, MoreHorizontal } from "lucide-react"

const resources = [
  {
    name: "starbucks-prod-postgresql-01",
    type: "PostgreSQL Database",
    environment: "Production",
    status: "Healthy",
    region: "East US 2",
    cost: "$245.67/month",
    lastUpdated: "2 hours ago",
  },
  {
    name: "starbucks-staging-keyvault-01",
    type: "Key Vault",
    environment: "Staging",
    status: "Healthy",
    region: "West US 2",
    cost: "$12.34/month",
    lastUpdated: "4 hours ago",
  },
  {
    name: "starbucks-dev-functionapp-01",
    type: "Function App",
    environment: "Development",
    status: "Warning",
    region: "Central US",
    cost: "$56.78/month",
    lastUpdated: "1 day ago",
  },
  {
    name: "starbucks-prod-cosmosdb-01",
    type: "Cosmos DB",
    environment: "Production",
    status: "Healthy",
    region: "East US 2",
    cost: "$1,234.56/month",
    lastUpdated: "30 minutes ago",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Healthy":
      return "bg-green-100 text-green-800"
    case "Warning":
      return "bg-yellow-100 text-yellow-800"
    case "Critical":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ResourcesList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.name} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{resource.name}</span>
                  <Badge variant="outline">{resource.type}</Badge>
                  <Badge variant="outline">{resource.environment}</Badge>
                  <Badge className={getStatusColor(resource.status)}>{resource.status}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {resource.region} • {resource.cost} • Updated {resource.lastUpdated}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
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
