import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Trash2, Copy, CheckCircle2, AlertCircle, Clock, FileJson, PhoneCall } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TestDebug() {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<{ time: string, step: string, result: string, type: "info" | "success" | "error" }[]>([])

  const runTest = () => {
    setIsRunning(true)
    setLogs([])
    
    const sequence = [
      { time: "10:00:01", step: "Trigger: Inbound Call", result: "Received call from +1 (555) 123-4567", type: "info" as const },
      { time: "10:00:02", step: "Action: Run AI Prompt", result: "Analyzing transcript...", type: "info" as const },
      { time: "10:00:04", step: "Action: Run AI Prompt", result: "Intent detected: Interested", type: "success" as const },
      { time: "10:00:04", step: "Logic: If / Else Branch", result: "Condition met: Interested == true", type: "success" as const },
      { time: "10:00:05", step: "Action: Update CRM", result: "Connecting to HubSpot...", type: "info" as const },
      { time: "10:00:06", step: "Action: Update CRM", result: "Contact created ID: 893421", type: "success" as const },
      { time: "10:00:06", step: "Action: Send SMS", result: "Sending confirmation text...", type: "info" as const },
      { time: "10:00:07", step: "Action: Send SMS", result: "SMS delivered successfully", type: "success" as const },
    ]

    sequence.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log])
        if (index === sequence.length - 1) setIsRunning(false)
      }, index * 800)
    })
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col lg:flex-row gap-6">
      {/* Left - Test Input */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Test & Debug</h2>
          <p className="text-sm text-slate-500">Simulate triggers and inspect agent execution.</p>
        </div>

        <Card className="bg-white border-slate-200 flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">Test Configuration</CardTitle>
            <CardDescription>Configure the payload to simulate a run.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex-1">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-700">Select Agent / Workflow</label>
              <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50">
                <option>Sales Qualification Agent (Draft)</option>
                <option>Customer Support Bot (Live)</option>
              </select>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-indigo-600">
                <PhoneCall className="h-4 w-4" /> Voice Trigger Simulation
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Mock Caller Phone</label>
                <Input defaultValue="+1 (555) 123-4567" className="font-mono text-xs" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Mock Transcript</label>
                <textarea 
                  className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                  defaultValue="Hi, I saw your ad online and I'm interested in learning more about your enterprise plan. Can someone call me back?"
                />
              </div>
            </div>
          </CardContent>
          <div className="p-6 pt-0 flex gap-3">
            <Button variant="outline-light" className="flex-1" onClick={() => setLogs([])}>Clear</Button>
            <Button variant="primary" className="flex-1  font-semibold gap-2" onClick={runTest} disabled={isRunning}>
              {isRunning ? <Clock className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              {isRunning ? "Running..." : "Run Test"}
            </Button>
          </div>
        </Card>
      </div>

      {/* Right - Output Console */}
      <Card className="w-full lg:w-2/3 bg-white border-slate-200 flex flex-col overflow-hidden font-mono text-sm shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2 text-slate-500">
            <FileJson className="h-4 w-4" /> Console Output
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost-light" size="sm" className="h-8 text-xs text-slate-500 hover:text-slate-900 gap-1.5" onClick={() => setLogs([])}>
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </Button>
            <Button variant="ghost-light" size="sm" className="h-8 text-xs text-slate-500 hover:text-slate-900 gap-1.5">
              <Copy className="h-3.5 w-3.5" /> Copy
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-hide">
          {logs.length === 0 ? (
            <div className="flex h-full items-center justify-center text-slate-900/20">
              Waiting for execution...
            </div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="flex items-start gap-4 py-1 hover:bg-slate-50 px-2 rounded transition-colors">
                <span className="text-slate-400 shrink-0 w-20">{log.time}</span>
                <div className="flex flex-col flex-1">
                  <span className="text-slate-700 font-semibold">{log.step}</span>
                  <span className={cn(
                    "mt-0.5",
                    log.type === "success" ? "text-emerald-400" :
                    log.type === "error" ? "text-red-400" :
                    "text-slate-500"
                  )}>
                    {log.result}
                  </span>
                </div>
                <div className="shrink-0 mt-1">
                  {log.type === "success" && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                  {log.type === "error" && <AlertCircle className="h-4 w-4 text-red-400" />}
                  {log.type === "info" && <div className="h-2 w-2 rounded-full bg-indigo-600 mt-1 animate-pulse" />}
                </div>
              </div>
            ))
          )}
          {isRunning && (
            <div className="flex items-center gap-2 py-2 px-2 text-indigo-600 animate-pulse">
              <span className="text-slate-400 shrink-0 w-20">--:--:--</span>
              Executing...
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
