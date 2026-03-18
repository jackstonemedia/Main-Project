import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Trash2, Power, Download, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MarketplaceInstalled() {
  const [agents, setAgents] = useState([
    { id: 1, name: "Auto-Blogger Pro", version: "v2.1.0", installed: "Oct 12, 2025", updated: "2 days ago", enabled: true, icon: "https://api.dicebear.com/7.x/icons/svg?seed=blog&backgroundColor=b026ff" },
    { id: 2, name: "Cold Caller AI", version: "v1.0.4", installed: "Nov 05, 2025", updated: "1 week ago", enabled: false, icon: "https://api.dicebear.com/7.x/icons/svg?seed=call&backgroundColor=00f3ff" },
    { id: 3, name: "Support Ticket Resolver", version: "v3.0.1", installed: "Dec 20, 2025", updated: "Today", enabled: true, icon: "https://api.dicebear.com/7.x/icons/svg?seed=support&backgroundColor=10b981" },
  ])

  const toggleAgent = (id: number) => {
    setAgents(agents.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Installed Agents ({agents.length})</h2>
          <p className="text-sm text-slate-500">Manage agents you've installed from the marketplace.</p>
        </div>
        <Button variant="primary" className=" font-semibold gap-2">
          <Download className="h-4 w-4" /> Browse More
        </Button>
      </div>

      <div className="space-y-4">
        {agents.map((agent) => (
          <Card key={agent.id} className="bg-white border-slate-200 hover:border-slate-200 transition-colors">
            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden border border-slate-200",
                  !agent.enabled && "opacity-50 grayscale"
                )}>
                  <img src={agent.icon} alt={agent.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={cn("font-semibold", agent.enabled ? "text-slate-900" : "text-slate-500")}>{agent.name}</h4>
                    <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">{agent.version}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>Installed: {agent.installed}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="flex items-center gap-1"><RefreshCw className="h-3 w-3" /> Updated: {agent.updated}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => toggleAgent(agent.id)}
                    className={cn(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00f3ff] focus:ring-offset-2 focus:ring-offset-[#050505]",
                      agent.enabled ? "bg-indigo-600" : "bg-slate-200"
                    )}
                  >
                    <span className={cn(
                      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                      agent.enabled ? "translate-x-6" : "translate-x-1"
                    )} />
                  </button>
                  <span className={cn("text-xs font-medium w-12", agent.enabled ? "text-indigo-600" : "text-slate-400")}>
                    {agent.enabled ? "Enabled" : "Disabled"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline-light" size="sm" className="h-8 gap-1.5" disabled={!agent.enabled}>
                    <Settings className="h-3.5 w-3.5" /> Configure
                  </Button>
                  <Button variant="ghost-light" size="icon" className="h-8 w-8 text-red-400 hover:bg-red-500/10 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
