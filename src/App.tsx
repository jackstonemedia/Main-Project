import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Splash from "./pages/Splash"
import Auth from "./pages/Auth"
import Onboarding from "./pages/Onboarding"
import AppShell from "./components/layout/AppShell"

// Placeholder pages
import Overview from "./pages/app/Overview"
import ManageAgents from "./pages/app/ManageAgents"
import Integrations from "./pages/app/Integrations"
import ActivityLogs from "./pages/app/ActivityLogs"
import Settings from "./pages/app/Settings"
import WorkflowBuilder from "./pages/app/WorkflowBuilder"
import VoiceAgents from "./pages/app/VoiceAgents"
import Templates from "./pages/app/Templates"
import TestDebug from "./pages/app/TestDebug"
import MarketplaceBrowse from "./pages/app/MarketplaceBrowse"
import MarketplaceInstalled from "./pages/app/MarketplaceInstalled"
import MarketplacePublish from "./pages/app/MarketplacePublish"
import MarketplaceEarnings from "./pages/app/MarketplaceEarnings"

// New Pages
import Files from "./pages/app/Files"
import Chats from "./pages/app/Chats"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Navigate to="/app/overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="files" element={<Files />} />
          <Route path="chats" element={<Chats />} />
          <Route path="agents" element={<ManageAgents />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="logs" element={<ActivityLogs />} />
          <Route path="settings" element={<Settings />} />
          
          <Route path="builder/workflow" element={<WorkflowBuilder />} />
          <Route path="builder/voice" element={<VoiceAgents />} />
          <Route path="builder/templates" element={<Templates />} />
          <Route path="builder/test" element={<TestDebug />} />
          
          <Route path="marketplace/browse" element={<MarketplaceBrowse />} />
          <Route path="marketplace/installed" element={<MarketplaceInstalled />} />
          <Route path="marketplace/publish" element={<MarketplacePublish />} />
          <Route path="marketplace/earnings" element={<MarketplaceEarnings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
