'use client'

import { useState } from 'react'
import { SendHorizontal, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function AIChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: 'assistant',
        content: `Here's how I would enhance that section:

1. Use more action verbs
2. Add quantifiable achievements
3. Highlight specific technologies
4. Include relevant keywords for ATS

Would you like me to rewrite it with these improvements?`
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="fixed bottom-4 right-4 bg-blue-600 text-white hover:bg-blue-700">
          AI Assistant
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] h-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-blue-600">AI Resume Assistant</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-900'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blue-100 rounded-lg px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="border-t pt-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI to enhance your resume..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading} className="bg-blue-600 text-white hover:bg-blue-700">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
