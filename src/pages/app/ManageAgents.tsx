import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Pause, Settings, PhoneCall, MessageSquare, Mail, RotateCcw, FileText, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ManageAgents() {
  const [agents] = useState([
    { id: 1, name: "Inbound Sales SDR", type: "Voice", integration: "Retell.ai", status: "Running", icon: PhoneCall },
    { id: 2, name: "Customer Support Bot", type: "Chat", integration: "Intercom", status: "Running", icon: MessageSquare },
    { id: 3, name: "Cold Email Outreach", type: "Email", integration: "Instantly.ai", status: "Idle", icon: Mail },
    { id: 4, name: "Data Scraper", type: "Data", integration: "Custom", status: "Error", icon: FileText },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Manage Agents</h2>
          <p className="text-sm text-slate-500">Control and configure your deployed agents.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline-light" className="gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button variant="primary" className=" font-semibold">+ New Agent</Button>
        </div>
      </div>

      <div className="space-y-4">
        {agents.map((agent) => {
          const Icon = agent.icon
          return (
            <Card key={agent.id} className="bg-white border-slate-200 hover:border-slate-200 transition-colors">
              <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    agent.status === "Running" ? "bg-emerald-500/10 text-emerald-400" :
                    agent.status === "Error" ? "bg-red-500/10 text-red-400" :
                    "bg-slate-100 text-slate-500"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{agent.name}</h4>
                    <p className="text-xs text-slate-500">{agent.type} · {agent.integration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                      agent.status === "Running" ? "bg-emerald-500/10 text-emerald-400" :
                      agent.status === "Error" ? "bg-red-500/10 text-red-400" :
                      "bg-slate-100 text-slate-500"
                    )}>
                      {agent.status === "Running" && <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                      {agent.status === "Error" && <div className="h-1.5 w-1.5 rounded-full bg-red-400" />}
                      {agent.status === "Idle" && <div className="h-1.5 w-1.5 rounded-full bg-white/40" />}
                      {agent.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {agent.status === "Running" && (
                      <Button variant="outline-light" size="sm" className="h-8 gap-1.5">
                        <Pause className="h-3.5 w-3.5" /> Pause
                      </Button>
                    )}
                    {agent.status === "Idle" && (
                      <Button variant="outline-light" size="sm" className="h-8 gap-1.5">
                        <Play className="h-3.5 w-3.5" /> Resume
                      </Button>
                    )}
                    {agent.status === "Error" && (
                      <>
                        <Button variant="outline-light" size="sm" className="h-8 gap-1.5 border-red-500/20 text-red-400 hover:bg-red-500/10">
                          <RotateCcw className="h-3.5 w-3.5" /> Restart
                        </Button>
                        <Button variant="ghost-light" size="sm" className="h-8 text-slate-500">View Logs</Button>
                      </>
                    )}
                    <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
