import { Sidebar } from "./sidebar"
import { RightSidebar } from "./right-sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 border-x border-gray-800 overflow-hidden">
        {children}
      </main>
      <RightSidebar />
    </div>
  )
}

