import ChapterChat from './components/ChapterChat'
import VideoSection from './components/VideoSection'
import ChatbotButton from './components/ChatbotButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChapterChat />
          <VideoSection />
        </div>
      </main>
      <ChatbotButton />
    </div>
  )
}