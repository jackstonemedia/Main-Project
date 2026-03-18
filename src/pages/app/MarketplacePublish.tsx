import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UploadCloud, CheckCircle2, ArrowRight, ArrowLeft, Image as ImageIcon, FileJson } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MarketplacePublish() {
  const [step, setStep] = useState(1)

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Publish to Marketplace</h2>
        <p className="text-sm text-slate-500">Share your AI agents with the world and earn revenue.</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between relative mb-8">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-100 z-0" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-indigo-600 z-0 transition-all duration-500" 
          style={{ width: `${((step - 1) / 2) * 100}%` }} 
        />
        
        {[1, 2, 3].map((s) => (
          <div key={s} className="relative z-10 flex flex-col items-center gap-2">
            <div className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors",
              step === s ? "border-indigo-600 bg-indigo-600 text-white" :
              step > s ? "border-indigo-600 bg-indigo-600/20 text-indigo-600" :
              "border-slate-300 bg-white text-slate-400"
            )}>
              {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
            </div>
            <span className={cn(
              "text-xs font-medium absolute top-10 whitespace-nowrap",
              step >= s ? "text-slate-900" : "text-slate-400"
            )}>
              {s === 1 ? "Details" : s === 2 ? "Configuration" : "Pricing & Review"}
            </span>
          </div>
        ))}
      </div>

      <Card className="bg-white border-slate-200 mt-12">
        <CardContent className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Agent Name</label>
                <Input placeholder="e.g. Sales Qualifier Pro" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Category</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f3ff]">
                  <option>Voice</option>
                  <option>Sales</option>
                  <option>Content</option>
                  <option>Support</option>
                  <option>Data</option>
                  <option>Productivity</option>
                </select>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-slate-700">Short Description</label>
                  <span className="text-xs text-slate-400">0/140</span>
                </div>
                <Input placeholder="A brief summary of what your agent does..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Description</label>
                <textarea 
                  className="flex min-h-[150px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f3ff]"
                  placeholder="Detailed explanation, features, and use cases (Markdown supported)..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Banner Image</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-indigo-500/50 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                    <ImageIcon className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <Button variant="primary" className=" font-semibold" onClick={() => setStep(2)}>
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Workflow JSON File</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-indigo-500/50 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                    <FileJson className="h-6 w-6 text-indigo-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">Upload your exported workflow JSON</p>
                  <p className="text-xs text-slate-400 mt-1">This contains the logic and prompts for your agent.</p>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-700">Required Integrations (Auto-detected)</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["OpenAI", "HubSpot", "Twilio"].map((int) => (
                    <div key={int} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">{int}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Minimum Plan Required</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f3ff]">
                  <option>Free</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div className="pt-4 flex justify-between">
                <Button variant="ghost-light" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button variant="primary" className=" font-semibold" onClick={() => setStep(3)}>
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-700">Pricing Model</label>
                <div className="grid gap-4 sm:grid-cols-3">
                  {["Free", "Monthly Subscription", "One-Time Purchase"].map((model, i) => (
                    <div key={model} className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-colors text-center",
                      i === 1 ? "border-indigo-600 bg-indigo-600/5" : "border-slate-200 hover:border-slate-300"
                    )}>
                      <span className="text-sm font-medium">{model}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Monthly Price (USD)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                    <Input defaultValue="49" className="pl-7" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Annual Price (USD)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                    <Input defaultValue="490" className="pl-7" />
                  </div>
                  <p className="text-xs text-emerald-400">~16% discount applied</p>
                </div>
              </div>

              <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 p-4 text-sm text-blue-200">
                <strong>Revenue Share:</strong> You keep 80% of all revenue generated. Stone AIO takes a 20% platform fee to cover hosting, bandwidth, and payment processing.
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="ghost-light" onClick={() => setStep(2)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button variant="primary" className=" font-semibold gap-2">
                  <UploadCloud className="h-4 w-4" /> Submit for Review
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
