import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Auth() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Always navigate to onboarding for testing purposes
    navigate("/onboarding")
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#050505] p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-80" />
      
      {/* Window Glow Effect - Isolates bright spots (windows) and blurs them to create a neon bloom */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dbdrkehcp/image/upload/v1773800662/Untitled_design_2_jcjlud.png')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
        style={{ filter: 'contrast(2) brightness(1.2) blur(16px)' }}
      />
      
      <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-[4px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="neon-sign-auth font-display text-4xl font-black tracking-widest sm:text-5xl">STONE AIO</h1>
          <p className="neon-sign-auth-subtle mt-2 font-display text-xs font-medium tracking-widest uppercase sm:text-sm">Your 24/7 AI Agent Workforce</p>
        </div>

        <div className="glass-panel overflow-hidden rounded-2xl p-1">
          {/* Tab Switcher */}
          <div className="flex rounded-xl bg-black/40 p-1">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                activeTab === "signin" ? "bg-white/10 text-white shadow-sm" : "text-white/50 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                activeTab === "signup" ? "bg-white/10 text-white shadow-sm" : "text-white/50 hover:text-white"
              }`}
            >
              Create Account
            </button>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.form
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === "signin" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === "signin" ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* OAuth Section */}
                <div className="flex gap-3">
                  <Button type="button" variant="outline" className="flex-1 border-white/10 bg-white/5 hover:bg-white/10">
                    Google
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 border-white/10 bg-white/5 hover:bg-white/10">
                    GitHub
                  </Button>
                </div>

                <div className="relative py-4 flex flex-col items-center justify-center">
                  <span className="mb-2 text-xs uppercase tracking-widest text-white/30">Or continue with email</span>
                  <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {activeTab === "signup" && (
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-white/80">Full Name</label>
                    <Input placeholder="John Doe" required />
                  </div>
                )}
                
                <div className="space-y-1">
                  <label className="text-xs font-medium text-white/80">Email</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-white/80">Password</label>
                    {activeTab === "signin" && (
                      <a href="#" className="text-xs text-[#00f3ff] hover:underline">Forgot password?</a>
                    )}
                  </div>
                  <Input type="password" placeholder="••••••••" required />
                </div>

                <Button type="submit" variant="neon" className="mt-6 w-full text-black font-semibold">
                  {activeTab === "signin" ? "Sign In" : "Create Account"}
                </Button>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          By continuing, you agree to our <a href="#" className="text-white/60 hover:text-white underline underline-offset-2">Terms of Service</a> and <a href="#" className="text-white/60 hover:text-white underline underline-offset-2">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  )
}
