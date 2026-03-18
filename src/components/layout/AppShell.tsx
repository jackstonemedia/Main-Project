import { useState } from "react"
import { Outlet, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { 
  Home,
  FolderOpen,
  MessageSquare,
  Users,
  Settings,
  Search,
  Menu,
  X,
  Plus
} from "lucide-react"

export default function AppShell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const location = useLocation()

  const primaryNav = [
    { path: "/app/overview", label: "Home", icon: Home, id: "home" },
    { path: "/app/files", label: "Files", icon: FolderOpen, id: "files", actionIcon: Search },
    { path: "/app/chats", label: "Chats", icon: MessageSquare, id: "chats", actionIcon: Plus },
    { path: "/app/agents", label: "Agents", icon: Users, id: "agents" },
  ]

  const bottomNav = [
    { path: "/app/settings", label: "Settings", icon: Settings, id: "settings" },
  ]

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 text-slate-900 selection:bg-indigo-600/30">
      {/* Sidebar (Desktop) - Zo Style Narrow */}
      <aside className="hidden w-20 flex-col items-center border-r border-slate-200 bg-white py-4 md:flex z-20">
        {/* Logo */}
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 shadow-[0_0_15px_rgba(0,243,255,0.1)] border border-slate-200">
          <div className="h-3 w-3 rounded-full bg-indigo-600 neon-glow animate-pulse" />
        </div>

        {/* Primary Nav */}
        <nav className="flex flex-1 flex-col items-center gap-4 w-full px-2">
          {primaryNav.map((item) => {
            const isActive = location.pathname.startsWith(item.path) || (item.path === "/app/overview" && location.pathname === "/app")
            
            return (
              <div 
                key={item.id}
                className="relative w-full"
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <NavLink
                  to={item.path}
                  className={cn(
                    "group relative flex w-full flex-col items-center justify-center gap-1 rounded-xl py-3 transition-all duration-300",
                    isActive
                      ? "bg-slate-100 text-slate-900 shadow-sm"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full bg-indigo-600 shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                    />
                  )}
                  <item.icon className={cn("h-5 w-5 transition-transform duration-300", isActive ? "scale-110 text-indigo-600" : "group-hover:scale-110")} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                </NavLink>

                {/* Hover Action Icon (e.g., Search for Files) */}
                <AnimatePresence>
                  {item.actionIcon && hoveredNav === item.id && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8, x: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -10 }}
                      className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-100 p-1.5 text-slate-600 shadow-lg border border-slate-200 hover:bg-indigo-600/20 hover:text-indigo-600 transition-colors z-30"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Action handler
                      }}
                    >
                      <item.actionIcon className="h-3.5 w-3.5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>

        {/* Bottom Nav */}
        <nav className="flex flex-col items-center gap-4 w-full px-2 mt-auto">
          {bottomNav.map((item) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={cn(
                  "group relative flex w-full flex-col items-center justify-center gap-1 rounded-xl py-3 transition-all duration-300",
                  isActive
                    ? "bg-slate-100 text-slate-900 shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                )}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full bg-indigo-600 shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                  />
                )}
                <item.icon className={cn("h-5 w-5 transition-transform duration-300", isActive ? "scale-110 text-indigo-600" : "group-hover:scale-110")} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </NavLink>
            )
          })}
          
          {/* User Avatar */}
          <button className="mt-2 h-10 w-10 overflow-hidden rounded-full border border-slate-200 transition-transform hover:scale-105 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=12&backgroundColor=b6e3f4" alt="User" className="h-full w-full object-cover" />
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col overflow-hidden relative z-10">
        {/* Mobile Header */}
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md md:hidden z-20">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-600 neon-glow animate-pulse" />
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">STONE AIO</span>
          </div>
          <button className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-slate-50 relative">
          {/* Subtle background grid/glow for the main content area to make it feel like an OS */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="relative z-10 h-full p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute bottom-0 left-0 top-0 w-64 border-r border-slate-200 bg-white p-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600 neon-glow animate-pulse" />
                  <span className="font-display text-xl font-bold tracking-tight text-slate-900">STONE AIO</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="rounded-md p-1 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto pb-20 flex flex-col gap-2">
                {[...primaryNav, ...bottomNav].map((item) => {
                  const isActive = location.pathname.startsWith(item.path) || (item.path === "/app/overview" && location.pathname === "/app")
                  return (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <item.icon className={cn("h-5 w-5", isActive ? "text-indigo-600" : "")} />
                      {item.label}
                    </NavLink>
                  )
                })}
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-3 px-2">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=12&backgroundColor=b6e3f4" alt="User" className="h-10 w-10 rounded-full border border-slate-200" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900">Jack Stone</span>
                  <span className="text-xs text-indigo-600">Pro Plan</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
