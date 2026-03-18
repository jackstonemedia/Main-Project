import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, Download, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MarketplaceBrowse() {
  const agents = [
    { id: 1, name: "Auto-Blogger Pro", author: "Stone AIO", desc: "Generates SEO-optimized blog posts daily based on trending keywords.", price: "$49/mo", rating: 4.9, installs: 1204, category: "Content", color: "text-purple-600", bg: "bg-purple-600/10" },
    { id: 2, name: "Cold Caller AI", author: "SalesTech", desc: "Outbound voice agent that qualifies leads and books meetings.", price: "$99/mo", rating: 4.8, installs: 856, category: "Voice", color: "text-indigo-600", bg: "bg-indigo-600/10" },
    { id: 3, name: "Support Ticket Resolver", author: "Stone AIO", desc: "Automatically resolves tier 1 support tickets via Zendesk/Intercom.", price: "Free", rating: 4.7, installs: 3420, category: "Support", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { id: 4, name: "LinkedIn Outreach Bot", author: "GrowthHackers", desc: "Sends personalized connection requests and follow-ups.", price: "$29/mo", rating: 4.5, installs: 2100, category: "Sales", color: "text-amber-400", bg: "bg-amber-400/10" },
    { id: 5, name: "Data Enrichment Engine", author: "DataFlow", desc: "Scrapes and enriches CRM contacts with missing data points.", price: "$79/mo", rating: 4.9, installs: 512, category: "Data", color: "text-pink-400", bg: "bg-pink-400/10" },
    { id: 6, name: "Meeting Summarizer", author: "Stone AIO", desc: "Joins Zoom/Meet calls, transcribes, and emails summaries.", price: "Free", rating: 4.6, installs: 4890, category: "Productivity", color: "text-blue-400", bg: "bg-blue-400/10" },
  ]

  const filters = ["All", "Voice", "Sales", "Content", "Support", "Data", "Marketing", "Productivity", "Free", "New", "Top Rated"]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-2">Marketplace</h2>
          <p className="text-slate-500 max-w-md">Discover, install, and deploy pre-built AI agents created by Stone AIO and the community.</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search agents..." className="pl-10 bg-slate-50 border-slate-200" />
          </div>
          <Button variant="primary" className=" font-semibold shrink-0">Publish Your Agent</Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors border",
                i === 0 
                  ? "bg-indigo-600/10 text-indigo-600 border-[#00f3ff]/30" 
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <select className="flex h-9 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-900 focus-visible:outline-none shrink-0">
          <option>Sort by: Top Rated</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Most Installed</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id} className="bg-white border-slate-200 hover:border-slate-300 transition-all group overflow-hidden flex flex-col cursor-pointer">
            <CardHeader className="p-5 pb-2">
              <div className="flex items-center justify-between mb-3">
                <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-slate-200", agent.bg, agent.color)}>
                  {agent.category}
                </span>
                <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded-md">{agent.price}</span>
              </div>
              <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">{agent.name}</CardTitle>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                <span className="font-medium text-slate-500">by {agent.author}</span>
                {agent.author === "Stone AIO" && <CheckCircle2 className="h-3 w-3 text-indigo-600" />}
              </div>
            </CardHeader>
            <CardContent className="p-5 pt-3 flex-1 flex flex-col justify-between">
              <CardDescription className="text-sm line-clamp-2 mb-4 text-slate-500">{agent.desc}</CardDescription>
              
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-medium text-slate-700">{agent.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span>{agent.installs.toLocaleString()} installs</span>
                </div>
              </div>
              
              <Button className="w-full bg-slate-100 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-200 hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
                Install Agent
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
