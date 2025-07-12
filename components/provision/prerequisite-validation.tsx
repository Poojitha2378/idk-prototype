"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface PrerequisiteValidationProps {
  prerequisites: any
  onPrerequisitesChange: (prerequisites: any) => void
  onNext: () => void
  onPrev: () => void
}

export function PrerequisiteValidation({
  prerequisites,
  onPrerequisitesChange,
  onNext,
  onPrev,
}: PrerequisiteValidationProps) {
  const [formData, setFormData] = useState({
    environment: "",
    fgid: "",
    appName: "",
    description: "",
    region: "",
    resourceGroup: "",
    tags: "",
    costCenter: "",
    owner: "",
  })

  const handleInputChange = (field: string, value: string) => {
    const updated = { ...formData, [field]: value }
    setFormData(updated)
    onPrerequisitesChange(updated)
  }

  const isFormValid = formData.environment && formData.fgid && formData.appName && formData.region

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Prerequisite Validation</h2>
        <p className="text-muted-foreground mt-2">Provide required information for resource provisioning</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Required Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="environment">Environment *</Label>
              <Select value={formData.environment} onValueChange={(value) => handleInputChange("environment", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="staging">Staging</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fgid">FGID *</Label>
              <Input
                id="fgid"
                placeholder="Enter FGID"
                value={formData.fgid}
                onChange={(e) => handleInputChange("fgid", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="appName">Application Name *</Label>
              <Input
                id="appName"
                placeholder="Enter application name"
                value={formData.appName}
                onChange={(e) => handleInputChange("appName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Azure Region *</Label>
              <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eastus">East US</SelectItem>
                  <SelectItem value="eastus2">East US 2</SelectItem>
                  <SelectItem value="westus">West US</SelectItem>
                  <SelectItem value="westus2">West US 2</SelectItem>
                  <SelectItem value="centralus">Central US</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resourceGroup">Resource Group</Label>
              <Input
                id="resourceGroup"
                placeholder="Enter resource group name"
                value={formData.resourceGroup}
                onChange={(e) => handleInputChange("resourceGroup", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="costCenter">Cost Center</Label>
              <Input
                id="costCenter"
                placeholder="Enter cost center"
                value={formData.costCenter}
                onChange={(e) => handleInputChange("costCenter", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the purpose of this infrastructure"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              placeholder="e.g., project:starbucks, team:platform, env:prod"
              value={formData.tags}
              onChange={(e) => handleInputChange("tags", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="owner">Technical Owner</Label>
            <Input
              id="owner"
              placeholder="Enter technical owner email"
              value={formData.owner}
              onChange={(e) => handleInputChange("owner", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!isFormValid}>
          Continue to Azure Validation
        </Button>
      </div>
    </div>
  )
}
