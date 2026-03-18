import { useState } from "react"
import { motion } from "motion/react"
import { Search, Plus, MoreVertical, Send, Paperclip, Smile, Hash, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Chats() {
  const [activeTab, setActiveTab] = useState("all")
  const [activeChat, setActiveChat] = useState<number | null>(1)

  const chats = [
    { id: 1, name: "Project Alpha", type: "channel", unread: 3, time: "10:42 AM", lastMessage: "Let's review the latest designs." },
    { id: 2, name: "Sarah Jenkins", type: "direct", unread: 0, time: "Yesterday", lastMessage: "Thanks for the update!" },
    { id: 3, name: "Engineering Team", type: "channel", unread: 12, time: "Yesterday", lastMessage: "Deployment successful." },
    { id: 4, name: "Design Sync", type: "channel", unread: 0, time: "Oct 24", lastMessage: "Here are the Figma links." },
    { id: 5, name: "Mike Ross", type: "direct", unread: 0, time: "Oct 22", lastMessage: "Can you send me the report?" },
  ]

  return (
    <div className="flex h-[calc(100vh-8rem)] overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* Sidebar */}
      <div className="flex w-80 flex-col border-r border-slate-200 bg-slate-50">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-slate-900">Chats</h2>
            <button className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors">
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
            />
          </div>
        </div>

        <div className="flex px-4 pb-2">
          <button 
            onClick={() => setActiveTab("all")}
            className={cn("flex-1 border-b-2 pb-2 text-sm font-medium transition-colors", activeTab === "all" ? "border-[#00f3ff] text-indigo-600" : "border-transparent text-slate-400 hover:text-slate-700")}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab("unread")}
            className={cn("flex-1 border-b-2 pb-2 text-sm font-medium transition-colors", activeTab === "unread" ? "border-[#00f3ff] text-indigo-600" : "border-transparent text-slate-400 hover:text-slate-700")}
          >
            Unread
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors",
                activeChat === chat.id ? "bg-slate-100" : "hover:bg-slate-50"
              )}
            >
              <div className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
                {chat.type === "channel" ? <Hash className="h-5 w-5 text-slate-500" /> : <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.name}&backgroundColor=b6e3f4`} alt={chat.name} className="h-full w-full rounded-full object-cover" />}
                {chat.unread > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                    {chat.unread}
                  </span>
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className={cn("truncate text-sm font-medium", chat.unread > 0 ? "text-slate-900" : "text-slate-700")}>{chat.name}</span>
                  <span className="text-xs text-slate-400">{chat.time}</span>
                </div>
                <p className={cn("truncate text-xs mt-0.5", chat.unread > 0 ? "font-medium text-slate-700" : "text-slate-500")}>
                  {chat.lastMessage}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {activeChat ? (
        <div className="flex flex-1 flex-col bg-white">
          {/* Chat Header */}
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
                <Hash className="h-5 w-5 text-slate-500" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Project Alpha</h3>
                <p className="text-xs text-slate-400">12 members · 3 online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <div className="flex justify-center">
              <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-400">Today</span>
            </div>
            
            <div className="flex gap-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4" alt="Sarah" className="h-8 w-8 rounded-full" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-slate-900">Sarah Jenkins</span>
                  <span className="text-xs text-slate-400">10:30 AM</span>
                </div>
                <div className="mt-1 rounded-2xl rounded-tl-none bg-slate-50 p-3 text-sm text-slate-700 border border-slate-200">
                  Hey team, I've uploaded the new assets to the shared folder. Let me know what you think!
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=12&backgroundColor=b6e3f4" alt="You" className="h-8 w-8 rounded-full" />
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-2 flex-row-reverse">
                  <span className="text-sm font-medium text-slate-900">You</span>
                  <span className="text-xs text-slate-400">10:42 AM</span>
                </div>
                <div className="mt-1 rounded-2xl rounded-tr-none bg-indigo-600/10 p-3 text-sm text-slate-900 border border-[#00f3ff]/20">
                  Awesome, I'll take a look right now. Let's review the latest designs.
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
              <button className="rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <textarea 
                placeholder="Type a message..." 
                className="max-h-32 min-h-[40px] w-full resize-none bg-transparent py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                rows={1}
              />
              <button className="rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                <Smile className="h-5 w-5" />
              </button>
              <button className="rounded-md bg-indigo-600 p-2 text-white hover:bg-indigo-600/90 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center bg-white text-slate-400">
          <MessageSquare className="h-12 w-12 mb-4 opacity-50" />
          <p>Select a chat to start messaging</p>
        </div>
      )}
    </div>
  )
}
