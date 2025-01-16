'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ChapterChat() {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        setMessage('')
      }, 1500)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Chapter Selection */}
      <select className="w-full p-2 mb-4 bg-gray-100 rounded-md">
        <option>Select a chapter</option>
        <option>Chapter 1: Introduction</option>
        <option>Chapter 2: Fundamentals</option>
        <option>Chapter 3: Advanced Concepts</option>
      </select>

      {/* Chat Messages Area */}
      <div className="h-64 mb-4 overflow-y-auto bg-gray-50 p-4 rounded-md">
        {/* Placeholder message from the AI */}
        <div className="bg-blue-100 p-2 rounded-lg mb-2">
          Welcome! How can I help you with your learning pathway?
        </div>
      </div>

      {/* User Input */}
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <Send size={20} />
          )}
        </button>
      </form>

      {/* Save Pathway Button */}
      <button className="mt-4 w-full bg-yellow-400 text-white p-2 rounded-md hover:bg-yellow-500 transition-colors">
        Save Pathway
      </button>
    </div>
  )
}
