"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Zap, MessageSquare, HardDrive, Plus, Minus, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const serviceCategories = [
  {
    name: "Database Services",
    icon: Database,
    color: "bg-gradient-to-br from-blue-900 to-blue-700 text-white border-blue-600",
    services: [
      { id: "postgresql", name: "PostgreSQL", description: "Managed PostgreSQL database", popular: true },
      { id: "cosmosdb", name: "Cosmos DB", description: "Multi-model NoSQL database", popular: true },
      { id: "mysql", name: "MySQL", description: "Managed MySQL database", popular: false },
      { id: "sqlmi", name: "SQL Managed Instance", description: "Fully managed SQL Server", popular: false },
      { id: "sqldb", name: "SQL Database", description: "Managed SQL database", popular: true },
      { id: "mongodb", name: "MongoDB", description: "Document database service", popular: false },
    ],
  },
  {
    name: "Security Services",
    icon: Shield,
    color: "bg-gradient-to-br from-orange-900 to-orange-700 text-white border-orange-600",
    services: [
      { id: "keyvault", name: "Azure Key Vault", description: "Secure key and secret management", popular: true },
      { id: "appgateway", name: "Application Gateway", description: "Web traffic load balancer", popular: false },
      { id: "firewall", name: "Azure Firewall", description: "Network security service", popular: false },
    ],
  },
  {
    name: "Compute Services",
    icon: Zap,
    color: "bg-gradient-to-br from-green-900 to-green-700 text-white border-green-600",
    services: [
      { id: "functionapp", name: "Function App", description: "Serverless compute service", popular: true },
      { id: "appservice", name: "App Service", description: "Web app hosting service", popular: true },
      { id: "linuxvm", name: "Linux VM", description: "Linux virtual machine", popular: false },
      { id: "windowsvm", name: "Windows VM", description: "Windows virtual machine", popular: false },
    ],
  },
  {
    name: "Storage Services",
    icon: HardDrive,
    color: "bg-gradient-to-br from-purple-900 to-purple-700 text-white border-purple-600",
    services: [
      { id: "blobstorage", name: "Blob Storage", description: "Object storage service", popular: true },
      { id: "filestorage", name: "File Storage", description: "Managed file shares", popular: false },
      { id: "diskstorage", name: "Disk Storage", description: "High-performance disk storage", popular: false },
    ],
  },
  {
    name: "Events & Messaging",
    icon: MessageSquare,
    color: "bg-gradient-to-br from-indigo-900 to-indigo-700 text-white border-indigo-600",
    services: [
      { id: "servicebus", name: "Service Bus", description: "Enterprise messaging service", popular: true },
      { id: "eventhub", name: "Event Hub", description: "Big data streaming platform", popular: false },
      { id: "eventgrid", name: "Event Grid", description: "Event routing service", popular: false },
    ],
  },
]

interface ServiceSelectionProps {
  selectedServices: string[]
  onServicesChange: (services: string[]) => void
  onNext: () => void
}

export function ServiceSelection({ selectedServices, onServicesChange, onNext }: ServiceSelectionProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter((id) => id !== serviceId))
    } else {
      onServicesChange([...selectedServices, serviceId])
    }
  }

  const handleCategoryToggle = (categoryName: string) => {
    if (expandedCategories.includes(categoryName)) {
      setExpandedCategories(expandedCategories.filter((name) => name !== categoryName))
    } else {
      setExpandedCategories([...expandedCategories, categoryName])
    }
  }

  const selectAllInCategory = (categoryServices: any[]) => {
    const categoryServiceIds = categoryServices.map((service) => service.id)
    const newSelected = [...selectedServices]

    categoryServiceIds.forEach((serviceId) => {
      if (!newSelected.includes(serviceId)) {
        newSelected.push(serviceId)
      }
    })

    onServicesChange(newSelected)
  }

  const deselectAllInCategory = (categoryServices: any[]) => {
    const categoryServiceIds = categoryServices.map((service) => service.id)
    const newSelected = selectedServices.filter((serviceId) => !categoryServiceIds.includes(serviceId))
    onServicesChange(newSelected)
  }

  const getSelectedInCategory = (categoryServices: any[]) => {
    return categoryServices.filter((service) => selectedServices.includes(service.id)).length
  }

  const clearAllSelections = () => {
    onServicesChange([])
  }

  const selectPopularServices = () => {
    const popularServices: string[] = []
    serviceCategories.forEach((category) => {
      category.services.forEach((service) => {
        if (service.popular) {
          popularServices.push(service.id)
        }
      })
    })
    onServicesChange(popularServices)
  }

  return (
    <div className="space-y-4 min-w-max">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-starbucks-dark-green">Select Azure Services</h2>
        <p className="text-lg text-starbucks-green">Choose individual services or select multiple at once</p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 justify-center py-4">
        <Button
          variant="outline"
          onClick={selectPopularServices}
          className="gap-2 h-11 px-6 text-base font-medium bg-starbucks-green text-white hover:bg-starbucks-dark-green border-starbucks-green"
        >
          <CheckCircle2 className="h-5 w-5" />
          Select Popular Services
        </Button>
        <Button
          variant="outline"
          onClick={clearAllSelections}
          className="gap-2 h-11 px-6 text-base font-medium border-starbucks-green text-starbucks-green hover:bg-starbucks-green hover:text-white bg-transparent"
        >
          <Minus className="h-5 w-5" />
          Clear All Selections
        </Button>
      </div>

      {/* Selected Services Summary */}
      {selectedServices.length > 0 && (
        <Card className="bg-gradient-to-r from-starbucks-cream to-starbucks-gold/20 border-starbucks-gold shadow-sm">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-starbucks-green" />
                <span className="text-xl font-semibold text-starbucks-dark-green">
                  Selected Services ({selectedServices.length})
                </span>
              </div>
              <Button
                variant="ghost"
                size="lg"
                onClick={clearAllSelections}
                className="text-base text-starbucks-green hover:bg-starbucks-green/10"
              >
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {selectedServices.map((serviceId) => {
                const service = serviceCategories.flatMap((cat) => cat.services).find((s) => s.id === serviceId)
                return service ? (
                  <Badge
                    key={serviceId}
                    variant="secondary"
                    className="gap-2 px-3 py-2 text-sm font-medium bg-starbucks-green text-white"
                  >
                    {service.name}
                    <button
                      onClick={() => handleServiceToggle(serviceId)}
                      className="ml-1 hover:bg-starbucks-dark-green rounded-full p-1 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                  </Badge>
                ) : null
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Service Categories */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 min-w-max">
        {serviceCategories.map((category) => {
          const selectedCount = getSelectedInCategory(category.services)
          const isExpanded = expandedCategories.includes(category.name)

          return (
            <Card key={category.name} className={`${category.color} shadow-lg hover:shadow-xl transition-shadow`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-lg text-white">
                    <category.icon className="h-6 w-6" />
                    {category.name}
                    {selectedCount > 0 && (
                      <Badge variant="secondary" className="ml-2 px-2 py-1 bg-white text-gray-900">
                        {selectedCount}
                      </Badge>
                    )}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCategoryToggle(category.name)}
                    className="text-white hover:bg-white/20"
                  >
                    {isExpanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </Button>
                </div>

                <div className="flex gap-3 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => selectAllInCategory(category.services)}
                    className="text-sm h-9 px-4 font-medium bg-white/20 text-white border-white/30 hover:bg-white hover:text-gray-900"
                  >
                    Select All
                  </Button>
                  {selectedCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deselectAllInCategory(category.services)}
                      className="text-sm h-9 px-4 font-medium bg-white/20 text-white border-white/30 hover:bg-white hover:text-gray-900"
                    >
                      Deselect All
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {(isExpanded ? category.services : category.services.filter((s) => s.popular)).map((service) => (
                  <div
                    key={service.id}
                    className="flex items-start space-x-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                      className="mt-1 border-white data-[state=checked]:bg-white data-[state=checked]:text-gray-900"
                    />
                    <div className="grid gap-2 leading-none flex-1">
                      <label
                        htmlFor={service.id}
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex items-center gap-2 text-white"
                      >
                        {service.name}
                        {service.popular && (
                          <Badge variant="outline" className="text-xs px-2 py-0.5 bg-white text-gray-900 border-white">
                            Popular
                          </Badge>
                        )}
                      </label>
                      <p className="text-sm text-white/80 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}

                {!isExpanded && category.services.filter((s) => !s.popular).length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCategoryToggle(category.name)}
                    className="w-full text-sm text-white/80 h-10 font-medium hover:bg-white/10"
                  >
                    Show {category.services.filter((s) => !s.popular).length} more services
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-starbucks-green/20 bg-gradient-to-r from-starbucks-cream/50 to-white rounded-lg p-6">
        <div className="text-base text-starbucks-green">
          <div className="font-semibold text-starbucks-dark-green">{selectedServices.length} service(s) selected</div>
          {selectedServices.length > 0 && (
            <div className="text-starbucks-green mt-1">
              Estimated setup time: {Math.ceil(selectedServices.length * 1.5)} minutes
            </div>
          )}
        </div>
        <Button
          onClick={onNext}
          disabled={selectedServices.length === 0}
          size="lg"
          className="h-12 px-8 text-base font-semibold bg-starbucks-green hover:bg-starbucks-dark-green text-white"
        >
          Continue to Compute Selection →
        </Button>
      </div>
    </div>
  )
}
