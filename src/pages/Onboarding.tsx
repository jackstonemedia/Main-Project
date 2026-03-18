import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, ChevronRight, ChevronLeft, User, Briefcase, Code, Cpu, MessageSquare, Database, Headset, Calendar, Mail } from "lucide-react"

type Path = "build" | "buy" | null

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [path, setPath] = useState<Path>(null)
  const [selections, setSelections] = useState<string[]>([])
  const [workspaceName, setWorkspaceName] = useState("")
  const [role, setRole] = useState("")
  const [avatar, setAvatar] = useState(0)
  const [defaultView, setDefaultView] = useState("builder")

  // Generate stars once so they don't jump around on re-renders
  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 2}s`,
    }))
  }, [])

  const totalSteps = 5

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const toggleSelection = (item: string) => {
    setSelections((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const handleLaunch = () => {
    navigate("/app/overview")
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center text-center"
          >
            <span className="mb-4 text-xs font-bold tracking-widest text-[#00f3ff] uppercase">
              Welcome to Stone AIO
            </span>
            <h2 className="mb-6 font-display text-2xl font-bold tracking-widest uppercase sm:text-3xl">
              The future of work is autonomous.
            </h2>
            <p className="mb-10 max-w-md text-sm tracking-widest text-white/60 uppercase">
              Set up your workspace and deploy your first AI agent in minutes.
            </p>
            <Button size="lg" variant="neon" onClick={nextStep} className="w-full max-w-sm font-semibold text-black uppercase tracking-widest">
              Let's Go <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-xs font-bold tracking-widest text-[#00f3ff] uppercase">
              Step 1 of 4
            </span>
            <h2 className="mb-2 font-display text-2xl font-bold tracking-widest uppercase">
              What brings you to Stone AIO?
            </h2>
            <p className="mb-8 text-xs tracking-widest text-white/60 uppercase">
              Choose your primary goal to help us tailor your experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                className={cn(
                  "glass-card cursor-pointer p-6 transition-all hover:bg-white/10",
                  path === "build" ? "border-[#00f3ff] bg-[#00f3ff]/10" : "border-white/10"
                )}
                onClick={() => {
                  setPath("build")
                  setDefaultView("builder")
                }}
              >
                <Code className="mb-4 h-8 w-8 text-[#00f3ff]" />
                <h3 className="mb-2 font-display text-sm font-bold tracking-widest uppercase">Build AI Agents</h3>
                <p className="text-xs tracking-wider text-white/60 uppercase">
                  Create custom agents and complex workflows from scratch.
                </p>
              </Card>
              <Card
                className={cn(
                  "glass-card cursor-pointer p-6 transition-all hover:bg-white/10",
                  path === "buy" ? "border-[#b026ff] bg-[#b026ff]/10" : "border-white/10"
                )}
                onClick={() => {
                  setPath("buy")
                  setDefaultView("marketplace")
                }}
              >
                <Briefcase className="mb-4 h-8 w-8 text-[#b026ff]" />
                <h3 className="mb-2 font-display text-sm font-bold tracking-widest uppercase">Use Pre-Built Agents</h3>
                <p className="text-xs tracking-wider text-white/60 uppercase">
                  Browse and deploy ready-made agents from our marketplace.
                </p>
              </Card>
            </div>
            <div className="mt-10 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-widest text-xs">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button variant="neon" onClick={nextStep} disabled={!path} className="text-black font-semibold uppercase tracking-widest text-xs">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )
      case 3:
        const isBuild3 = path === "build"
        const options3 = isBuild3
          ? ["My own business", "Client projects", "SaaS product", "Sales & outreach", "Marketing & content", "Research & analysis"]
          : ["Real Estate", "Healthcare", "E-Commerce", "Finance & Insurance", "Agency / Marketing", "SaaS / Tech"]
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-xs font-bold tracking-widest text-[#00f3ff] uppercase">
              Step 2 of 4 · {isBuild3 ? "Builder Path" : "Browse Path"}
            </span>
            <h2 className="mb-2 font-display text-2xl font-bold tracking-widest uppercase">
              {isBuild3 ? "What are you building for?" : "What industry are you in?"}
            </h2>
            <p className="mb-8 text-xs tracking-widest text-white/60 uppercase">Select all that apply.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {options3.map((opt) => (
                <div
                  key={opt}
                  onClick={() => toggleSelection(opt)}
                  className={cn(
                    "glass-card flex cursor-pointer items-center rounded-lg p-4 transition-all hover:bg-white/10",
                    selections.includes(opt) ? "border-[#00f3ff] bg-[#00f3ff]/10" : "border-white/10"
                  )}
                >
                  <div className={cn("mr-3 flex h-5 w-5 items-center justify-center rounded border", selections.includes(opt) ? "border-[#00f3ff] bg-[#00f3ff] text-black" : "border-white/20")}>
                    {selections.includes(opt) && <Check className="h-3 w-3" />}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase">{opt}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-widest text-xs">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button variant="neon" onClick={nextStep} disabled={selections.length === 0} className="text-black font-semibold uppercase tracking-widest text-xs">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )
      case 4:
        const isBuild4 = path === "build"
        const options4 = isBuild4
          ? [
              { id: "voice", label: "Voice Agents", icon: Headset },
              { id: "content", label: "Content Agents", icon: MessageSquare },
              { id: "outreach", label: "Outreach Agents", icon: Mail },
              { id: "data", label: "Data Agents", icon: Database },
              { id: "support", label: "Support Agents", icon: User },
              { id: "custom", label: "Custom Workflow", icon: Cpu },
            ]
          : [
              { id: "voice_ai", label: "Voice AI Agents", icon: Headset },
              { id: "chat", label: "Chat & Support", icon: MessageSquare },
              { id: "appt", label: "Appointment Setter", icon: Calendar },
              { id: "lead", label: "Lead Qualifier", icon: User },
              { id: "copy", label: "Content & Copy", icon: Code },
              { id: "email", label: "Email Automation", icon: Mail },
            ]
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-xs font-bold tracking-widest text-[#00f3ff] uppercase">
              Step 3 of 4 · {isBuild4 ? "Builder Path" : "Browse Path"}
            </span>
            <h2 className="mb-2 font-display text-2xl font-bold tracking-widest uppercase">
              {isBuild4 ? "What kinds of agents are you planning to build?" : "What type of agents are you interested in?"}
            </h2>
            <p className="mb-8 text-xs tracking-widest text-white/60 uppercase">Select all that apply.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {options4.map((opt) => {
                const Icon = opt.icon
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleSelection(opt.id)}
                    className={cn(
                      "glass-card flex cursor-pointer items-center rounded-lg p-4 transition-all hover:bg-white/10",
                      selections.includes(opt.id) ? "border-[#00f3ff] bg-[#00f3ff]/10" : "border-white/10"
                    )}
                  >
                    <Icon className={cn("mr-3 h-5 w-5", selections.includes(opt.id) ? "text-[#00f3ff]" : "text-white/40")} />
                    <span className="text-xs font-bold tracking-widest uppercase">{opt.label}</span>
                    <div className="ml-auto">
                      <div className={cn("flex h-5 w-5 items-center justify-center rounded-full border", selections.includes(opt.id) ? "border-[#00f3ff] bg-[#00f3ff] text-black" : "border-white/20")}>
                        {selections.includes(opt.id) && <Check className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-10 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-widest text-xs">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button variant="neon" onClick={nextStep} className="text-black font-semibold uppercase tracking-widest text-xs">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )
      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex w-full flex-col"
          >
            <span className="mb-2 text-xs font-bold tracking-widest text-[#00f3ff] uppercase">
              Step 4 of 4 · Almost There
            </span>
            <h2 className="mb-2 font-display text-2xl font-bold tracking-widest uppercase">
              Set up your workspace.
            </h2>
            <p className="mb-8 text-xs tracking-widest text-white/60 uppercase">
              Personalize your Stone AIO environment.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest text-white/80 uppercase">Workspace Name</label>
                  <Input 
                    placeholder="Acme Corp AI" 
                    value={workspaceName} 
                    onChange={(e) => setWorkspaceName(e.target.value)} 
                    className="glass-card uppercase tracking-widest text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold tracking-widest text-white/80 uppercase">Your Role</label>
                  <Input 
                    placeholder="Founder, Developer, etc." 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    className="glass-card uppercase tracking-widest text-xs"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-white/80 uppercase">Choose Avatar</label>
                <div className="flex gap-3">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      onClick={() => setAvatar(i)}
                      className={cn(
                        "h-12 w-12 overflow-hidden rounded-full border-2 transition-all",
                        avatar === i ? "border-[#00f3ff] ring-2 ring-[#00f3ff]/20" : "border-transparent opacity-50 hover:opacity-100"
                      )}
                    >
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}&backgroundColor=b6e3f4`} alt={`Avatar ${i}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-white/80 uppercase">Default View</label>
                <div className="grid grid-cols-3 gap-2">
                  {["builder", "computer", "marketplace"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setDefaultView(view)}
                      className={cn(
                        "glass-card rounded-lg px-3 py-2 text-xs font-bold tracking-widest uppercase transition-all",
                        defaultView === view ? "border-[#00f3ff] bg-[#00f3ff]/20 text-[#00f3ff]" : "border-white/10 text-white/60 hover:bg-white/10"
                      )}
                    >
                      {view === "builder" ? "Agent Builder" : view === "computer" ? "Cloud Computer" : "Marketplace"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-between">
              <Button variant="ghost" onClick={prevStep} className="uppercase tracking-widest text-xs">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button variant="neon" onClick={handleLaunch} disabled={!workspaceName} className="text-black font-semibold uppercase tracking-widest text-xs">
                Launch Workspace 🚀
              </Button>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#050505] p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[#050505]" />
      
      {/* Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              '--duration': star.duration,
              '--delay': star.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="z-10 w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-12 rounded-full transition-all duration-500",
                i + 1 === step ? "bg-[#00f3ff] neon-glow" : i + 1 < step ? "bg-white/40" : "bg-white/10"
              )}
            />
          ))}
        </div>

        <div className="glass-card overflow-hidden rounded-3xl p-8 sm:p-12">
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
