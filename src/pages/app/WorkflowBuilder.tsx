import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play, Save, Rocket, MousePointer2, Hand, Link as LinkIcon, MessageSquare, ZoomIn, ZoomOut, Maximize, Undo, Redo, PhoneCall, Webhook, Clock, FormInput, Mail, User, GitBranch, Database, Filter, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WorkflowBuilder() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null)

  const nodes = [
    { id: 1, type: "trigger", label: "Inbound Call", icon: PhoneCall, x: 100, y: 150 },
    { id: 2, type: "action", label: "Run AI Prompt", icon: MessageSquare, x: 350, y: 150 },
    { id: 3, type: "logic", label: "If / Else Branch", icon: GitBranch, x: 600, y: 150 },
    { id: 4, type: "action", label: "Update CRM", icon: Database, x: 850, y: 50 },
    { id: 5, type: "action", label: "Send SMS", icon: Mail, x: 850, y: 250 },
  ]

  const edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4, label: "Interested" },
    { from: 3, to: 5, label: "Not Interested" },
  ]

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* Builder Topbar */}
      <div className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900 hover:bg-slate-50 px-2 py-1 rounded cursor-pointer transition-colors">
            Sales Qualification Agent
          </h3>
          <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">Draft</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost-light" size="sm" className="gap-2 text-slate-500">
            <Save className="h-4 w-4" /> Save Draft
          </Button>
          <Button variant="ghost-light" size="sm" className="gap-2 text-slate-500">
            <Play className="h-4 w-4" /> Test Run
          </Button>
          <Button variant="primary" size="sm" className="gap-2  font-semibold">
            <Rocket className="h-4 w-4" /> Deploy
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Palette */}
        <div className="w-64 border-r border-slate-200 bg-white flex flex-col">
          <div className="p-3 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input placeholder="Search nodes..." className="pl-9 h-9 bg-white" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-6 scrollbar-hide">
            <div>
              <h4 className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">Triggers</h4>
              <div className="space-y-2">
                {[
                  { label: "Inbound Call", icon: PhoneCall },
                  { label: "Webhook Received", icon: Webhook },
                  { label: "Schedule / Cron", icon: Clock },
                ].map((n) => (
                  <div key={n.label} className="flex cursor-grab items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-2 text-sm hover:bg-slate-100 transition-colors">
                    <n.icon className="h-4 w-4 text-indigo-600" /> {n.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">Actions</h4>
              <div className="space-y-2">
                {[
                  { label: "Run AI Prompt", icon: MessageSquare },
                  { label: "Update CRM", icon: Database },
                  { label: "Send Email", icon: Mail },
                ].map((n) => (
                  <div key={n.label} className="flex cursor-grab items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-2 text-sm hover:bg-slate-100 transition-colors">
                    <n.icon className="h-4 w-4 text-purple-600" /> {n.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">Logic</h4>
              <div className="space-y-2">
                {[
                  { label: "If / Else Branch", icon: GitBranch },
                  { label: "Filter / Search", icon: Filter },
                ].map((n) => (
                  <div key={n.label} className="flex cursor-grab items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-2 text-sm hover:bg-slate-100 transition-colors">
                    <n.icon className="h-4 w-4 text-amber-400" /> {n.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center - Canvas */}
        <div className="relative flex-1 bg-slate-50 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')]">
          {/* Canvas Toolbar */}
          <div className="absolute left-1/2 top-4 -translate-x-1/2 flex items-center gap-1 rounded-lg border border-slate-200 bg-white/80 p-1 backdrop-blur-md z-10 shadow-xl">
            <Button variant="ghost-light" size="icon" className="h-8 w-8 bg-slate-100 text-slate-900"><MousePointer2 className="h-4 w-4" /></Button>
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><Hand className="h-4 w-4" /></Button>
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><LinkIcon className="h-4 w-4" /></Button>
            <div className="mx-1 h-4 w-px bg-slate-100" />
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><ZoomIn className="h-4 w-4" /></Button>
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><ZoomOut className="h-4 w-4" /></Button>
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><Maximize className="h-4 w-4" /></Button>
            <div className="mx-1 h-4 w-px bg-slate-100" />
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><Undo className="h-4 w-4" /></Button>
            <Button variant="ghost-light" size="icon" className="h-8 w-8 text-slate-500"><Redo className="h-4 w-4" /></Button>
          </div>

          {/* Mock Nodes on Canvas */}
          <div className="absolute inset-0">
            {/* Mock Edges */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none">
              <path d="M 300 180 C 325 180, 325 180, 350 180" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
              <path d="M 550 180 C 575 180, 575 180, 600 180" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
              <path d="M 800 180 C 825 180, 825 80, 850 80" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
              <path d="M 800 180 C 825 180, 825 280, 850 280" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
              
              <text x="825" y="120" fill="rgba(0,0,0,0.6)" fontSize="10" textAnchor="middle">Interested</text>
              <text x="825" y="240" fill="rgba(0,0,0,0.6)" fontSize="10" textAnchor="middle">Not Interested</text>
            </svg>

            {nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={cn(
                  "absolute flex w-48 cursor-pointer flex-col rounded-lg border bg-white shadow-xl transition-all",
                  selectedNode === node.id ? "border-[#00f3ff] ring-1 ring-indigo-500/50" : "border-slate-200 hover:border-white/30"
                )}
                style={{ left: node.x, top: node.y }}
              >
                <div className={cn(
                  "flex items-center gap-2 rounded-t-lg border-b border-slate-200 px-3 py-2 text-xs font-medium",
                  node.type === "trigger" ? "bg-indigo-600/10 text-indigo-600" :
                  node.type === "logic" ? "bg-amber-400/10 text-amber-400" :
                  "bg-purple-600/10 text-purple-600"
                )}>
                  <node.icon className="h-3.5 w-3.5" /> {node.type.toUpperCase()}
                </div>
                <div className="p-3 text-sm font-medium text-slate-900">
                  {node.label}
                </div>
                
                {/* Ports */}
                {node.type !== "trigger" && (
                  <div className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-slate-300" />
                )}
                <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-slate-300" />
              </div>
            ))}
          </div>

          {/* Mini-map */}
          <div className="absolute bottom-4 right-4 h-32 w-48 rounded-lg border border-slate-200 bg-white/80 backdrop-blur-md p-2">
            <div className="relative h-full w-full bg-slate-50 rounded border border-slate-200">
              <div className="absolute top-2 left-2 h-2 w-4 bg-indigo-600/50 rounded-sm" />
              <div className="absolute top-2 left-8 h-2 w-4 bg-purple-600/50 rounded-sm" />
              <div className="absolute top-2 left-14 h-2 w-4 bg-amber-400/50 rounded-sm" />
              <div className="absolute top-0 left-20 h-2 w-4 bg-purple-600/50 rounded-sm" />
              <div className="absolute top-4 left-20 h-2 w-4 bg-purple-600/50 rounded-sm" />
              {/* Viewport rect */}
              <div className="absolute top-0 left-0 h-10 w-24 border border-slate-300 bg-slate-100 rounded-sm cursor-move" />
            </div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className="w-80 border-l border-slate-200 bg-white flex flex-col">
          {selectedNode ? (
            <>
              <div className="p-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">Run AI Prompt</h3>
                <p className="text-xs text-slate-400 mt-1">Action Node</p>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">Node Name</label>
                  <Input defaultValue="Run AI Prompt" className="h-8 text-xs" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">AI Model</label>
                  <select className="flex h-8 w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500/50">
                    <option>GPT-4o</option>
                    <option>Claude 3.5 Sonnet</option>
                    <option>Gemini 1.5 Pro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">System Prompt</label>
                  <textarea 
                    className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500/50"
                    defaultValue="You are a helpful sales assistant. Analyze the transcript and determine if the lead is interested."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">User Message</label>
                  <textarea 
                    className="flex min-h-[60px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500/50"
                    defaultValue="{{trigger.transcript}}"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-700">Output Variable</label>
                  <Input defaultValue="ai_analysis" className="h-8 text-xs font-mono" />
                </div>
              </div>
              <div className="p-4 border-t border-slate-200">
                <Button variant="primary" className="w-full  font-semibold">Apply Changes</Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center p-6 text-center">
              <p className="text-sm text-slate-400">Select a node to edit its properties</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
