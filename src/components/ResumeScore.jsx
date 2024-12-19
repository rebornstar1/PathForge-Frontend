import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function ResumeScore() {
  const score = {
    grade: 'B',
    status: 'GOOD',
    urgent: 4,
    critical: 0,
    optional: 0,
    lastUpdated: '41 days ago',
    credits: 3
  }

  return (
    <Card className="bg-white">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
              <span className="text-3xl font-bold text-yellow-700">{score.grade}</span>
            </div>
            <div>
              <CardTitle className="text-xl font-bold">{score.status}</CardTitle>
              <Button variant="link" className="text-blue-600 p-0 h-auto font-normal">
                View Full Report
              </Button>
            </div>
          </div>
          <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
            Re-Analyze
            <span className="text-xs ml-2 opacity-75">Last updated {score.lastUpdated}</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{score.urgent}</div>
            <div className="text-sm text-gray-600">URGENT FIX</div>
            <Progress value={75} className="mt-2 bg-red-100" indicatorClassName="bg-red-500" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{score.critical}</div>
            <div className="text-sm text-gray-600">CRITICAL FIX</div>
            <Progress value={0} className="mt-2 bg-orange-100" indicatorClassName="bg-orange-500" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">{score.optional}</div>
            <div className="text-sm text-gray-600">OPTIONAL FIX</div>
            <Progress value={0} className="mt-2 bg-blue-100" indicatorClassName="bg-blue-500" />
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 flex items-center justify-between">
          <span className="text-sm text-green-700">{score.credits} credits available</span>
          <AlertCircle className="w-4 h-4 text-green-700" />
        </div>
      </CardContent>
    </Card>
  )
}

