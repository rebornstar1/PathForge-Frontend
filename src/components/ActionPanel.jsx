import { Sparkles, Download, Share2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ActionPanel() {
  const suggestions = [
    {
      title: "Enhance with AI",
      description: "Let AI improve your resume content",
      icon: Sparkles,
      variant: "default"
    },
    {
      title: "Download Resume",
      description: "Get your resume in PDF/Word format",
      icon: Download,
      variant: "outline"
    },
    {
      title: "Share Resume",
      description: "Share your resume with recruiters",
      icon: Share2,
      variant: "outline"
    }
  ]

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant={suggestion.variant}
              className="w-full justify-start text-left"
            >
              <suggestion.icon className="w-4 h-4 mr-2" />
              <div>
                <div className="font-medium">{suggestion.title}</div>
                <div className="text-xs text-muted-foreground">{suggestion.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
