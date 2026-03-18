import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, XCircle } from "lucide-react"

export default function Integrations() {
  const categories = [
    {
      name: "CRM & Sales",
      items: [
        { name: "HubSpot", status: "connected", icon: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
        { name: "Salesforce", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
        { name: "Pipedrive", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/pipedrive-1.svg" },
        { name: "Airtable", status: "connected", icon: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
      ]
    },
    {
      name: "Communication",
      items: [
        { name: "Retell.ai", status: "connected", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" }, // placeholder
        { name: "Instantly.ai", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" }, // placeholder
        { name: "Slack", status: "connected", icon: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
        { name: "Gmail", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg" },
      ]
    },
    {
      name: "Data & Storage",
      items: [
        { name: "Supabase", status: "connected", icon: "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg" },
        { name: "Firebase", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
        { name: "MongoDB", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Google Drive", status: "disconnected", icon: "https://cdn.worldvectorlogo.com/logos/google-drive-logo-1.svg" },
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Integrations</h2>
          <p className="text-sm text-slate-500">Connect your favorite tools and services.</p>
        </div>
        <Button variant="primary" className=" font-semibold gap-2">
          <Plus className="h-4 w-4" /> Connect New
        </Button>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="space-y-4">
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {category.items.map((item) => (
              <Card key={item.name} className="bg-white border-slate-200 hover:border-slate-200 transition-colors cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 p-2 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                    <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.name}</h4>
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-xs">
                      {item.status === "connected" ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Connected</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3.5 w-3.5 text-slate-400" />
                          <span className="text-slate-400">Not Connected</span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
