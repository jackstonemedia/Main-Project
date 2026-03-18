import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Download, Eye, Star, Clock, Zap, MessageSquare, PhoneCall, Database } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function Templates() {
  const templates = [
    { id: 1, name: "Inbound Sales SDR", desc: "Qualifies leads and books meetings directly to your calendar.", category: "Voice", icon: PhoneCall, nodes: 8, level: "Intermediate", color: "text-indigo-600", bg: "bg-indigo-600/10" },
    { id: 2, name: "Customer Support Bot", desc: "Answers FAQs and escalates complex issues to human agents.", category: "Support", icon: MessageSquare, nodes: 12, level: "Advanced", color: "text-purple-600", bg: "bg-purple-600/10" },
    { id: 3, name: "Cold Email Outreach", desc: "Sends personalized emails based on LinkedIn profile data.", category: "Sales", icon: Zap, nodes: 5, level: "Beginner", color: "text-amber-400", bg: "bg-amber-400/10" },
    { id: 4, name: "Data Enrichment", desc: "Scrapes company websites and updates CRM records automatically.", category: "Data", icon: Database, nodes: 6, level: "Intermediate", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { id: 5, name: "Appointment Reminder", desc: "Calls clients 24h before their meeting to confirm attendance.", category: "Voice", icon: Clock, nodes: 4, level: "Beginner", color: "text-indigo-600", bg: "bg-indigo-600/10" },
    { id: 6, name: "Review Collector", desc: "Follows up with customers post-purchase to request a review.", category: "Marketing", icon: Star, nodes: 7, level: "Intermediate", color: "text-pink-400", bg: "bg-pink-400/10" },
  ]

  const filters = ["All", "Voice", "Sales", "Content", "Support", "Data", "Starter"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Templates</h2>
          <p className="text-sm text-slate-500">Start building faster with pre-configured workflows.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline-light" className="gap-2">
            <Download className="h-4 w-4" /> Import
          </Button>
          <Button variant="primary" className=" font-semibold">Save Current as Template</Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                i === 0 
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
          <Input placeholder="Search templates..." className="pl-9 bg-white border-slate-200" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((tpl) => {
          const Icon = tpl.icon
          return (
            <Card key={tpl.id} className="bg-white border-slate-200 hover:border-slate-300 transition-all group overflow-hidden flex flex-col">
              <div className="h-24 w-full bg-white border-b border-slate-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center relative z-10 shadow-xl", tpl.bg)}>
                  <Icon className={cn("h-6 w-6", tpl.color)} />
                </div>
              </div>
              <CardHeader className="p-5 pb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{tpl.category}</span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                    tpl.level === "Beginner" ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" :
                    tpl.level === "Intermediate" ? "border-amber-500/30 text-amber-400 bg-amber-500/10" :
                    "border-red-500/30 text-red-400 bg-red-500/10"
                  )}>{tpl.level}</span>
                </div>
                <CardTitle className="text-lg">{tpl.name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2 mt-1">{tpl.desc}</CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-4 flex-1 flex flex-col justify-end">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span>{tpl.nodes} nodes</span>
                  <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                    <Eye className="h-3.5 w-3.5" /> Preview
                  </button>
                </div>
                <Button className="w-full bg-slate-100 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-200 hover:border-indigo-600">
                  Use Template
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
