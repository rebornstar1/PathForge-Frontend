'use client'

import { MessageCircle } from 'lucide-react'

export default function ChatbotButton() {
  return (
    <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg">
      <MessageCircle size={24} />
    </button>
  )
}

