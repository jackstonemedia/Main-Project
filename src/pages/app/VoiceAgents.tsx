import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneCall, Play, Settings, Mic, Volume2, PhoneForwarded, Link as LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function VoiceAgents() {
  const [selectedAgent, setSelectedAgent] = useState(1)
  const [activeTab, setActiveTab] = useState("general")

  const agents = [
    { id: 1, name: "Inbound Sales SDR", phone: "+1 (555) 019-2834", status: "Running", calls: 142 },
    { id: 2, name: "Customer Support", phone: "+1 (555) 823-1928", status: "Idle", calls: 0 },
    { id: 3, name: "Appointment Setter", phone: "+1 (555) 394-8271", status: "Running", calls: 89 },
  ]

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "prompts", label: "Prompts", icon: MessageSquare },
    { id: "voice", label: "Voice", icon: Mic },
    { id: "routing", label: "Call Routing", icon: PhoneForwarded },
    { id: "integrations", label: "Integrations", icon: LinkIcon },
  ]

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col lg:flex-row overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* Left - Agent List */}
      <div className="w-full lg:w-80 border-r border-slate-200 bg-white flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">Voice Agents</h3>
          <Button variant="primary" size="sm" className=" font-semibold">+ New</Button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide">
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent.id)}
              className={cn(
                "cursor-pointer rounded-lg border p-3 transition-all",
                selectedAgent === agent.id ? "border-[#00f3ff] bg-indigo-600/5" : "border-slate-200 bg-slate-50 hover:border-slate-300"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm text-slate-900">{agent.name}</h4>
                <span className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                  agent.status === "Running" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-100 text-slate-500"
                )}>
                  {agent.status === "Running" && <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                  {agent.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <PhoneCall className="h-3 w-3" /> {agent.phone}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{agent.calls} calls today</span>
                <div className="flex gap-1">
                  <Button variant="ghost-light" size="icon" className="h-6 w-6 text-slate-500 hover:text-slate-900"><Settings className="h-3 w-3" /></Button>
                  <Button variant="ghost-light" size="icon" className="h-6 w-6 text-slate-500 hover:text-slate-900"><Play className="h-3 w-3" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Configuration Panel */}
      <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
        <div className="border-b border-slate-200 bg-white px-4">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 border-b-2 px-1 py-4 text-sm font-medium transition-colors whitespace-nowrap",
                  activeTab === tab.id ? "border-[#00f3ff] text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-900"
                )}
              >
                <tab.icon className="h-4 w-4" /> {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {activeTab === "general" && (
            <div className="max-w-2xl space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Agent Name</label>
                <Input defaultValue="Inbound Sales SDR" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Assigned Phone Number</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f3ff]">
                  <option>+1 (555) 019-2834</option>
                  <option>+1 (555) 823-1928</option>
                  <option>Buy new number...</option>
                </select>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-medium text-slate-700">Max Call Duration</label>
                  <span className="text-xs text-indigo-600">15 minutes</span>
                </div>
                <input type="range" min="1" max="60" defaultValue="15" className="w-full accent-[#00f3ff]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Welcome Message</label>
                <textarea 
                  className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                  defaultValue="Hi, thanks for calling Acme Corp. How can I help you today?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Fallback Message</label>
                <textarea 
                  className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                  defaultValue="I'm sorry, I didn't quite catch that. Could you repeat?"
                />
              </div>
              <Button variant="primary" className=" font-semibold">Save General Settings</Button>
            </div>
          )}

          {activeTab === "voice" && (
            <div className="max-w-2xl space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Voice Provider</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f3ff]">
                  <option>ElevenLabs</option>
                  <option>Retell.ai</option>
                  <option>Play.ht</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Voice ID</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {["Rachel (American, Calm)", "Drew (British, Professional)", "Clyde (American, Energetic)"].map((v, i) => (
                    <div key={i} className={cn(
                      "flex items-center justify-between rounded-lg border p-3 cursor-pointer transition-colors",
                      i === 0 ? "border-[#00f3ff] bg-indigo-600/5" : "border-slate-200 bg-slate-50 hover:border-white/30"
                    )}>
                      <span className="text-sm">{v}</span>
                      <Button variant="ghost-light" size="icon" className="h-6 w-6"><Volume2 className="h-3 w-3" /></Button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-medium text-slate-700">Speaking Speed</label>
                  <span className="text-xs text-indigo-600">1.0x</span>
                </div>
                <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full accent-[#00f3ff]" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-medium text-slate-700">Pitch Adjustment</label>
                  <span className="text-xs text-indigo-600">0</span>
                </div>
                <input type="range" min="-10" max="10" defaultValue="0" className="w-full accent-[#00f3ff]" />
              </div>
              <Button variant="primary" className=" font-semibold">Save Voice Settings</Button>
            </div>
          )}
          
          {/* Other tabs would be implemented similarly */}
          {(activeTab === "prompts" || activeTab === "routing" || activeTab === "integrations") && (
            <div className="flex h-full items-center justify-center text-slate-400 text-sm">
              Select a tab to configure its settings.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Need to import MessageSquare for the tabs
import { MessageSquare } from "lucide-react"
