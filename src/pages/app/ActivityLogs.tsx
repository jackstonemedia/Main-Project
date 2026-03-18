import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ActivityLogs() {
  const [logs] = useState([
    { id: 1, agent: "Sales SDR 1", event: "Call completed", meta: "Duration: 4m 12s", time: "2 mins ago", status: "success" },
    { id: 2, agent: "Support Bot", event: "Ticket resolved", meta: "ID: #1429", time: "15 mins ago", status: "success" },
    { id: 3, agent: "Data Scraper", event: "Failed to parse HTML", meta: "Error: Timeout", time: "1 hour ago", status: "error" },
    { id: 4, agent: "Content Agent", event: "Draft generated", meta: "Words: 1,200", time: "2 hours ago", status: "info" },
    { id: 5, agent: "Sales SDR 2", event: "Voicemail left", meta: "Contact: John Doe", time: "3 hours ago", status: "warning" },
    { id: 6, agent: "Support Bot", event: "Escalated to human", meta: "Reason: Complex query", time: "4 hours ago", status: "warning" },
    { id: 7, agent: "Sales SDR 1", event: "Meeting booked", meta: "Date: Tomorrow 2PM", time: "5 hours ago", status: "success" },
  ])

  const filters = ["All", "Voice Agent", "Content", "Outreach", "Errors", "Today", "This Week"]
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Activity Logs</h2>
          <p className="text-sm text-slate-500">Detailed history of all agent actions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline-light" className="gap-2">
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                activeFilter === f 
                  ? "bg-indigo-600/10 text-indigo-600 border-[#00f3ff]/30" 
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search logs..." className="pl-9 bg-white border-slate-200" />
        </div>
      </div>

      <Card className="bg-white border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Agent Name</th>
                <th className="px-6 py-3 font-medium">Event Description</th>
                <th className="px-6 py-3 font-medium">Metadata</th>
                <th className="px-6 py-3 font-medium text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      log.status === "success" ? "bg-emerald-400" :
                      log.status === "error" ? "bg-red-400" :
                      log.status === "warning" ? "bg-amber-400" :
                      "bg-indigo-600"
                    )} />
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">{log.agent}</td>
                  <td className="px-6 py-4 text-slate-700">{log.event}</td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-xs">{log.meta}</td>
                  <td className="px-6 py-4 text-right text-slate-400 whitespace-nowrap">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <span className="text-xs text-slate-400">Showing 1–7 of 243 events</span>
          <div className="flex gap-1">
            <Button variant="outline-light" size="sm" className="h-8 px-3 text-xs" disabled>← Prev</Button>
            <Button variant="outline-light" size="sm" className="h-8 w-8 p-0 text-xs bg-slate-100">1</Button>
            <Button variant="outline-light" size="sm" className="h-8 w-8 p-0 text-xs border-transparent hover:bg-slate-100">2</Button>
            <Button variant="outline-light" size="sm" className="h-8 w-8 p-0 text-xs border-transparent hover:bg-slate-100">3</Button>
            <Button variant="outline-light" size="sm" className="h-8 px-3 text-xs">Next →</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
