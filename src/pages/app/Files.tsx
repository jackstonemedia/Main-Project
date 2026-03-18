import { motion } from "motion/react"
import { FolderOpen, File, Search, Plus, MoreVertical, HardDrive, Cloud, Clock, Star } from "lucide-react"

export default function Files() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">Files</h1>
          <p className="text-sm text-slate-500">Manage your cloud storage and assets.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search files..." 
              className="h-10 w-64 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
            />
          </div>
          <button className="flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-black transition-colors hover:bg-indigo-600/90">
            <Plus className="h-4 w-4" />
            New Folder
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Locations</h3>
            <nav className="flex flex-col gap-1">
              <button className="flex items-center gap-3 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900">
                <HardDrive className="h-4 w-4 text-indigo-600" />
                My Cloud
              </button>
              <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">
                <Cloud className="h-4 w-4" />
                Shared with me
              </button>
              <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">
                <Clock className="h-4 w-4" />
                Recent
              </button>
              <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">
                <Star className="h-4 w-4" />
                Starred
              </button>
            </nav>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Storage</h3>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-900">45.2 GB</span>
              <span className="text-slate-400">100 GB</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[45%] rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 flex flex-col gap-6 lg:col-span-3">
          {/* Folders */}
          <div>
            <h3 className="mb-4 text-sm font-medium text-slate-700">Folders</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Projects', 'Assets', 'Documents', 'Backups'].map((folder) => (
                <motion.div 
                  key={folder}
                  whileHover={{ y: -2 }}
                  className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <FolderOpen className="h-8 w-8 text-indigo-600/80" />
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">{folder}</h4>
                      <p className="text-xs text-slate-400">12 items</p>
                    </div>
                  </div>
                  <button className="rounded-md p-1 text-slate-400 opacity-0 transition-all hover:bg-slate-100 hover:text-slate-900 group-hover:opacity-100">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Files */}
          <div>
            <h3 className="mb-4 text-sm font-medium text-slate-700">Recent Files</h3>
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Modified</th>
                    <th className="px-4 py-3 font-medium">Size</th>
                    <th className="px-4 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { name: 'Q3_Report.pdf', date: 'Oct 24, 2023', size: '2.4 MB' },
                    { name: 'Logo_Final.svg', date: 'Oct 22, 2023', size: '156 KB' },
                    { name: 'dataset_v2.csv', date: 'Oct 20, 2023', size: '14.2 MB' },
                    { name: 'presentation.key', date: 'Oct 18, 2023', size: '8.1 MB' },
                  ].map((file) => (
                    <tr key={file.name} className="group transition-colors hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <File className="h-5 w-5 text-slate-500" />
                          <span className="font-medium text-slate-900">{file.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{file.date}</td>
                      <td className="px-4 py-3 text-slate-500">{file.size}</td>
                      <td className="px-4 py-3 text-right">
                        <button className="rounded-md p-1 text-slate-400 opacity-0 transition-all hover:bg-slate-100 hover:text-slate-900 group-hover:opacity-100">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
