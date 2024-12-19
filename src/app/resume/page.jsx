import { Zap } from 'lucide-react'
import ResumeHeader from '@/components/ResumeHeader'
import ResumeScore from '@/components/ResumeScore'
import ResumeContent from '@/components/ResumeContent'
import ActionPanel from '@/components/ActionPanel'
import { Button } from '@/components/ui/button'

export default function ResumeParsePage() {
  return (
    <div className="min-h-screen px-10 bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100 dark:from-blue-900 dark:to-blue-950 pt-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold bg-black bg-clip-text text-transparent">
            Unleash the power of AI in <span className="text-blue-800">Resume Building</span>
          </h1>
          <Button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white">
            <Zap className="w-4 h-4 mr-2" />
            Get Hired Faster
          </Button>
        </div>
        
        <ResumeHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <ResumeContent />
          </div>
          <div className="space-y-6">
            <ResumeScore />
            <ActionPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
