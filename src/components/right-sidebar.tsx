import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function RightSidebar() {
  return (
    <aside className="w-[25%] min-w-[350px] p-4 space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <Input
          placeholder="Search"
          className="pl-12 bg-gray-900 border-none rounded-full text-white placeholder-gray-500 text-lg py-6"
        />
      </div>
      <div className="bg-gray-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-3">Subscribe to Premium</h2>
        <p className="text-base text-gray-300 mb-4">
          Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 w-full text-lg">
          Subscribe
        </Button>
      </div>
      <div className="bg-gray-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">What's happening</h2>
        <div className="space-y-6">
          <div>
            <p className="text-base text-gray-500">F1 Las Vegas Grand Prix 2024 · LIVE</p>
            <p className="font-bold text-lg">F1 Las Vegas Grand Prix 2024</p>
          </div>
          <div>
            <p className="text-base text-gray-500">Music · Trending</p>
            <p className="font-bold text-lg">#TorontoTSTheErasTour</p>
            <p className="text-base text-gray-500">37.8K posts</p>
          </div>
          <div>
            <p className="text-base text-gray-500">Sports · Trending</p>
            <p className="font-bold text-lg">#SmackDown</p>
            <p className="text-base text-gray-500">13.6K posts</p>
          </div>
          <div>
            <p className="text-base text-gray-500">Trending</p>
            <p className="font-bold text-lg">Docker</p>
            <p className="text-base text-gray-500">1,263 posts</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

