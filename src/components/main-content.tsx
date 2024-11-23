'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Image, GiftIcon as GIF, ListFilter, Smile, MapPin } from 'lucide-react'
import { Tweet } from "./tweet"

export function MainContent() {
  const [posts, setPosts] = useState<string[]>([])
  const [newPost, setNewPost] = useState('')
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false)
  const feedRef = useRef<HTMLDivElement>(null)

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([newPost, ...posts])
      setNewPost('')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (feedRef.current) {
        setIsNavbarTransparent(feedRef.current.scrollTop > 0)
      }
    }

    const feedElement = feedRef.current
    if (feedElement) {
      feedElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (feedElement) {
        feedElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="flex flex-col h-screen w-full">
      <div className={`sticky top-0 z-10 bg-black transition-opacity duration-200 ${isNavbarTransparent ? 'bg-opacity-80' : ''}`}>
        <div className="border-b border-gray-800 p-4">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="flex space-x-4 mt-4">
            <Button variant="ghost" className="flex-1 font-semibold text-lg">For you</Button>
            <Button variant="ghost" className="flex-1 font-semibold text-lg text-gray-500">Following</Button>
          </div>
        </div>
      </div>
      <div ref={feedRef} className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-800">
          <div className="flex space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Input
                placeholder="What is happening?!"
                className="bg-transparent border-0 text-xl placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon"><Image className="h-6 w-6 text-blue-400" /></Button>
                  <Button variant="ghost" size="icon"><GIF className="h-6 w-6 text-blue-400" /></Button>
                  <Button variant="ghost" size="icon"><ListFilter className="h-6 w-6 text-blue-400" /></Button>
                  <Button variant="ghost" size="icon"><Smile className="h-6 w-6 text-blue-400" /></Button>
                  <Button variant="ghost" size="icon"><MapPin className="h-6 w-6 text-blue-400" /></Button>
                </div>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 text-lg"
                  onClick={handlePost}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
        {posts.map((post, index) => (
          <Tweet key={index} content={post} />
        ))}
      </div>
    </div>
  )
}

