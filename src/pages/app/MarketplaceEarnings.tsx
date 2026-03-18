import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, ArrowUpRight, ArrowDownRight, Download, CreditCard, Activity, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MarketplaceEarnings() {
  const agents = [
    { id: 1, name: "Auto-Blogger Pro", installs: 1204, subs: 845, mrr: "$41,405", rating: 4.9, status: "Live" },
    { id: 2, name: "Support Ticket Resolver", installs: 3420, subs: 0, mrr: "$0", rating: 4.7, status: "Live" },
    { id: 3, name: "Meeting Summarizer", installs: 4890, subs: 0, mrr: "$0", rating: 4.6, status: "Live" },
  ]

  const history = [
    { id: 1, date: "Oct 1, 2025", amount: "$32,450.00", status: "Paid" },
    { id: 2, date: "Sep 1, 2025", amount: "$28,120.00", status: "Paid" },
    { id: 3, date: "Aug 1, 2025", amount: "$24,500.00", status: "Paid" },
  ]

  const chartData = React.useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      height: 30 + Math.random() * 70
    }))
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Earnings</h2>
          <p className="text-sm text-slate-500">Track your marketplace revenue and payouts.</p>
        </div>
        <Button variant="primary" className=" font-semibold gap-2">
          <CreditCard className="h-4 w-4" /> Withdraw Funds
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Earned (All Time)</CardTitle>
            <DollarSign className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$142,850</div>
            <p className="text-xs text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-3 w-3" /> +12% this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Subscribers</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">845</div>
            <p className="text-xs text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-3 w-3" /> +45 this week
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Available to Withdraw</CardTitle>
            <CreditCard className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-400">$41,405</div>
            <p className="text-xs text-slate-400 flex items-center mt-1">
              Next payout: Nov 1, 2025
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card className="bg-white border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Last 30 days of MRR and new installs.</CardDescription>
          </div>
          <div className="flex bg-slate-50 rounded-lg p-1">
            <button className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-900">MRR</button>
            <button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900">Installs</button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-10 relative">
            {/* Mock Chart Bars */}
            {chartData.map((data) => {
              const height = data.height
              return (
                <div key={data.id} className="relative w-full group flex flex-col justify-end h-full">
                  <div 
                    className="w-full bg-indigo-600/20 rounded-t-sm group-hover:bg-indigo-600 transition-colors"
                    style={{ height: `${height}%` }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    ${(height * 100).toFixed(0)}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Published Agents */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold">Published Agents</h3>
          <Card className="bg-white border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 font-medium">Agent Name</th>
                    <th className="px-6 py-3 font-medium text-right">Installs</th>
                    <th className="px-6 py-3 font-medium text-right">Subs</th>
                    <th className="px-6 py-3 font-medium text-right">MRR</th>
                    <th className="px-6 py-3 font-medium text-center">Status</th>
                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{agent.name}</td>
                      <td className="px-6 py-4 text-right text-slate-700">{agent.installs.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right text-slate-700">{agent.subs.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right text-emerald-400 font-medium">{agent.mrr}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {agent.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost-light" size="sm" className="h-8 text-xs text-slate-500 hover:text-slate-900">Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Payout History */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payout History</h3>
          <Card className="bg-white border-slate-200">
            <CardContent className="p-0">
              <div className="flex flex-col divide-y divide-slate-200">
                {history.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50">
                        <Calendar className="h-4 w-4 text-slate-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900">{item.amount}</span>
                        <span className="text-xs text-slate-400">{item.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{item.status}</span>
                      <Button variant="ghost-light" size="icon" className="h-6 w-6 text-slate-400 hover:text-slate-900">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
