import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, Repeat2, Share } from 'lucide-react'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <div className="p-4 border-b border-gray-800">
      <div className="flex space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">User Name</span>
            <span className="text-gray-500 text-base">@username · 1h</span>
          </div>
          <p className="mt-2 text-lg">{content}</p>
          <div className="flex justify-between mt-4 text-gray-500">
            <Button variant="ghost" size="sm" className="text-base">
              <MessageCircle className="h-5 w-5 mr-2" />
              0
            </Button>
            <Button variant="ghost" size="sm" className="text-base">
              <Repeat2 className="h-5 w-5 mr-2" />
              0
            </Button>
            <Button variant="ghost" size="sm" className="text-base">
              <Heart className="h-5 w-5 mr-2" />
              0
            </Button>
            <Button variant="ghost" size="sm" className="text-base">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

