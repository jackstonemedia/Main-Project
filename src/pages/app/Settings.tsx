import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Copy, AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function Settings() {
  const [showKey, setShowKey] = useState<Record<string, boolean>>({})

  const toggleKey = (key: string) => {
    setShowKey(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-sm text-slate-500">Manage your workspace and account preferences.</p>
      </div>

      <div className="grid gap-6">
        {/* Workspace */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle>Workspace Settings</CardTitle>
            <CardDescription>Update your workspace details and localization.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Workspace Name</label>
                <Input defaultValue="Acme Corp AI" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-700">Time Zone</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50">
                  <option value="utc">UTC (Coordinated Universal Time)</option>
                  <option value="est">EST (Eastern Standard Time)</option>
                  <option value="pst">PST (Pacific Standard Time)</option>
                </select>
              </div>
            </div>
            <Button variant="outline-light" className="mt-2">Save Workspace</Button>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Securely store keys for external integrations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "retell", label: "Retell.ai API Key", value: "key_live_xxxxxxxxxxxxxxxxx" },
              { id: "openai", label: "OpenAI API Key", value: "sk-xxxxxxxxxxxxxxxxxxxxxxxx" },
              { id: "supabase_url", label: "Supabase Project URL", value: "https://xxxxxxxxxxxx.supabase.co" },
              { id: "supabase_anon", label: "Supabase Anon Key", value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <label className="text-xs font-medium text-slate-700">{field.label}</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input 
                      type={showKey[field.id] ? "text" : "password"} 
                      defaultValue={field.value} 
                      className="pr-10 font-mono text-xs" 
                    />
                    <button 
                      onClick={() => toggleKey(field.id)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-900"
                    >
                      {showKey[field.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <Button variant="outline-light" size="icon" className="shrink-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="primary" className="mt-4  font-semibold">Save API Keys</Button>
          </CardContent>
        </Card>

        {/* Billing */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <CardTitle>Billing & Usage</CardTitle>
            <CardDescription>Manage your subscription and limits.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div>
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  Pro Plan <span className="rounded bg-indigo-600/20 px-2 py-0.5 text-[10px] text-indigo-600 uppercase tracking-wider">Active</span>
                </h4>
                <p className="text-sm text-slate-500 mt-1">Up to 10 active agents, 10,000 tasks/mo.</p>
              </div>
              <Button variant="outline-light">Upgrade Plan</Button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-700">Agents Used</span>
                <span className="font-medium text-slate-900">3 / 10</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[30%] bg-indigo-600 neon-glow" />
              </div>
            </div>

            <a href="#" className="inline-block text-sm text-indigo-600 hover:underline">Manage Billing →</a>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/20 bg-red-500/5">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Danger Zone
            </CardTitle>
            <CardDescription className="text-red-400/60">Irreversible actions for your workspace.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button variant="destructive" className="bg-red-500/10 border border-red-500/20">Reset Workspace</Button>
            <Button variant="destructive" className="bg-red-500 text-slate-900 hover:bg-red-600">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
