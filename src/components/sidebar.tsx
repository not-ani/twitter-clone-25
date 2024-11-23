import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, FileText, Users, User, MoreHorizontal } from 'lucide-react'

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Explore", href: "/explore" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Mail, label: "Messages", href: "/messages" },
  { icon: FileText, label: "Grok", href: "/grok" },
  { icon: Users, label: "Communities", href: "/communities" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function Sidebar() {
  return (
    <aside className="w-[20%] min-w-[275px] p-4 flex flex-col justify-between">
      <div>
        <Link href="/" className="mb-6 inline-block">
          <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden="true">
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </Link>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
              <item.icon className="h-8 w-8" />
              <span>{item.label}</span>
            </Link>
          ))}
          <Button variant="ghost" className="w-full justify-start space-x-4 p-3 rounded-full hover:bg-gray-900 text-xl">
            <MoreHorizontal className="h-8 w-8" />
            <span>More</span>
          </Button>
        </nav>
      </div>
      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-4 text-xl font-bold">
        Post
      </Button>
    </aside>
  )
}

